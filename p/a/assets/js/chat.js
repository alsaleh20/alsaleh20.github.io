/**
 * public/assets/js/chat.js
 * روبوت الدردشة الذكي - مُوحَّد مع PHP config
 * جميع مزايا النسخة الأصلية محفوظة
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const cfg          = window.SITE_CONFIG || {};
    const questions    = cfg.chatQuestions  || [];
    const initMsg      = cfg.chatInit       || 'مرحباً! 🤖';
    const successMsg   = cfg.chatSuccess    || 'تم! الرقم المرجعي: ';
    const webhookUrl   = cfg.webhookUrl     || '';
    const projectName  = cfg.projectName    || 'ashraf';

    const toggleBtn    = document.getElementById('chat-toggle-btn');
    const closeBtn     = document.getElementById('close-chat');
    const chatWindow   = document.getElementById('chat-window');
    const chatInput    = document.getElementById('chat-input');
    const sendBtn      = document.getElementById('send-chat');
    const msgContainer = document.getElementById('chat-messages');

    if (!toggleBtn || !chatWindow || !msgContainer) return;

    let chatState = 0;
    let userData  = {};
    let isFirstOpen = true;

    // ─── Toggle Chat ─────────────────────────────────
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            if (isFirstOpen) {
                isFirstOpen = false;
                msgContainer.innerHTML = '';
                setTimeout(() => addMessage(questions[0] || initMsg, false), 300);
            }
            chatInput?.focus();
        }
    });

    closeBtn?.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // ─── Send Message ────────────────────────────────
    sendBtn?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = chatInput?.value?.trim();
        if (!text) return;
        chatInput.value = '';
        processInput(text);
    }

    // ─── Add Message Bubble ──────────────────────────
    function addMessage(text, isUser = false) {
        const div = document.createElement('div');
        div.classList.add('message', isUser ? 'user-message' : 'bot-message');
        div.innerText = text;   // innerText للحفاظ على السطور الجديدة
        msgContainer.appendChild(div);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function addTyping() {
        const div = document.createElement('div');
        div.classList.add('message', 'bot-message', 'typing');
        div.id = 'typing-indicator';
        div.innerHTML = '<i>●</i><i>●</i><i>●</i>';
        msgContainer.appendChild(div);
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function removeTyping() {
        document.getElementById('typing-indicator')?.remove();
    }

    // ─── Process Input ───────────────────────────────
    function processInput(text) {
        addMessage(text, true);

        switch (chatState) {
            case 0: userData.name     = text; break;
            case 1: userData.phone    = text; break;
            case 2: userData.email    = text; break;
            case 3: userData.location = text; break;
            case 4: userData.details  = text; break;
        }

        chatState++;

        if (chatState < questions.length) {
            addTyping();
            setTimeout(() => {
                removeTyping();
                addMessage(questions[chatState], false);
            }, 700);
        } else {
            finishChat();
        }
    }

    // ─── Finish & Submit ─────────────────────────────
    async function finishChat() {
        const refNumber = 'REF-' + Math.floor(100000 + Math.random() * 900000);
        userData.refNumber  = refNumber;
        userData.date       = new Date().toISOString();
        userData.project    = projectName;
        userData.ref_number = refNumber;

        // Disable inputs
        if (chatInput) chatInput.disabled = true;
        if (sendBtn)   sendBtn.disabled   = true;

        addTyping();

        // Save to PHP API
        try {
            await fetch('/api/requests.php?project=' + encodeURIComponent(projectName), {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(userData),
            });
        } catch (e) {
            console.warn('DB save error:', e);
        }

        // Send Webhook
        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method:  'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:    JSON.stringify(userData),
                });
            } catch (e) {
                console.warn('Webhook error:', e);
            }
        }

        removeTyping();
        setTimeout(() => {
            addMessage(successMsg + refNumber, false);

            // Show success overlay
            const refDisplay = document.getElementById('ref-num-display');
            const overlay    = document.getElementById('success-overlay');
            if (refDisplay) refDisplay.innerText = refNumber;
            if (overlay)    overlay.classList.add('active');
        }, 500);
    }

    // Make closeSuccessOverlay global
    window.closeSuccessOverlay = function () {
        document.getElementById('success-overlay')?.classList.remove('active');
        chatWindow?.classList.remove('active');
        // Reset chat
        chatState = 0;
        userData  = {};
        isFirstOpen = true;
        msgContainer.innerHTML = '';
        if (chatInput) { chatInput.disabled = false; chatInput.value = ''; }
        if (sendBtn)   sendBtn.disabled = false;
    };
});
