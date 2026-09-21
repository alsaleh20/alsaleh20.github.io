// Interactive portfolio CLI
const cliInput = document.getElementById('cli-input');
const cliBody = document.getElementById('cli-body');
let commandHistory = [];
let historyIndex = -1;

const cliCommands = [
    'about', 'skills', 'projects', 'sub-projects', 'contact', 'clear', 'github', 'help', 'apt',
    'puretouch', 'salttime', 'ashraf', 'status', 'ping', 'htop', 'uptime', 'logs', 'services', 'valve-steam',
    'matrix', 'cyberpunk', 'neon', 'hacker', 'hack', 'sudo', 'party', 'celebrate', 'secret', 'vault'
];

const cliArgumentOptions = {
    apt: ['servar', 'server'],
    help: ['--sudo', '-sudo'],
    contact: ['-wa', '-wa2', '-mail', '-git', '-link', '-khamsat', '-mostaql', '-baaeed', '-hsoub', '-unicoders', '-insta', '-x', '-yt', '-fb'],
    ping: ['puretouchplus.com', 'ashrafaldbas.com', 'github.com', 'salttime', 'puretouch']
};

if (cliInput) {
    cliInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            const command = cliInput.value.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                executeCommand(command);
            }
            cliInput.value = '';
            return;
        }

        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            const direction = event.key === 'ArrowUp' ? -1 : 1;
            historyIndex = Math.max(0, Math.min(commandHistory.length, historyIndex + direction));
            cliInput.value = commandHistory[historyIndex] || '';
            return;
        }

        if (event.key === 'Tab') {
            event.preventDefault();
            completeCliInput();
        }
    });
}

function completeCliInput() {
    const parts = cliInput.value.toLowerCase().split(' ');
    const options = parts.length === 1 ? cliCommands : cliArgumentOptions[parts[0]];
    if (!options) return;

    const currentValue = parts[parts.length - 1];
    const match = options.find(option => option.startsWith(currentValue)) || (currentValue === '' ? options[0] : null);
    if (match) {
        parts[parts.length - 1] = match;
        cliInput.value = parts.join(' ');
    }
}

function appendTerminalLine(text, className = '') {
    if (!cliBody) return;
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    const inputLine = cliBody.querySelector('.terminal-input-line');
    cliBody.insertBefore(line, inputLine);
    cliBody.scrollTop = cliBody.scrollHeight;
}

function executeCommand(command) {
    if (typeof checkSudoCommand === 'function' && checkSudoCommand(command)) return;

    appendTerminalLine(`guest@alhayari:~$ ${command}`, 'terminal-command-response');
    const parts = command.trim().split(/\s+/);
    const mainCommand = parts[0].toLowerCase();
    const argument = parts[1] ? parts[1].toLowerCase() : '';

    switch (mainCommand) {
        case 'apt':
            if (argument === 'servar' || argument === 'server') openServerCLITerminal();
            else appendTerminalLine('Usage: apt servar  (Deploys and launches the Server CLI Terminal)', 'cli-highlight');
            break;
        case 'help':
            if (argument === '--sudo' || argument === '-sudo') triggerHackerFallEffect();
            else appendTerminalLine('Available commands:\n  apt servar    - 🚀 Launch second terminal: Server CLI\n  projects      - Show key portfolio projects & repositories\n  sub-projects  - 📂 Show all imported side projects\n  skills        - List technical skills and proficiency\n  about         - Show information about Alsaleh Al-Hayari\n  contact       - Options: -wa, -git, -link, -mail\n  clear         - Clear the terminal screen');
            break;
        case '/rgb':
        case 'rgb':
            openRgbModal();
            appendTerminalLine('🎨 Opening RGB Theme Customizer...', 'cli-success');
            break;
        case 'sub-projects':
        case 'side-projects':
            appendTerminalLine('📂 Side Projects Portfolio:\n1. Ashraf Al-Dabas    - Digital Media Portfolio (p/a/x.html)\n2. Raad Arabiyat      - Hospitality Leader CV (p/r/x.html)\n3. Ehab Al-Khaldi     - Operations Manager CV (p/k/x.html)\n4. Renad Kloob        - Social Worker Portfolio (p/n/x.html)\n5. Dr. Eman Al-Ali    - Academic Law Professor (p/e/x.html)\n6. Aya Hamed          - Life Skills Trainer (p/y/x.html)\n7. Omar Al-Hiwarat    - Professional Barista (p/b/x.html)\n\nAll side projects are live and accessible under the /p/ directory.');
            break;
        case 'status':
        case 'system':
            showServerStatus();
            break;
        case 'htop':
        case 'top':
            showHtopMonitor();
            break;
        case 'services':
            showServicesStatus();
            break;
        case 'ping':
            executePingCommand(argument);
            break;
        case 'logs':
            showServerLogs();
            break;
        case 'uptime':
            showUptime();
            break;
        case 'about':
            appendTerminalLine('Name: Alsaleh Al-Hayari\nRole: Server Administrator & Automation Expert (n8n)\nLocation: Salt, Jordan\nBio: I design workflows, deploy web servers, configure secure Linux systems, and connect APIs.');
            break;
        case 'skills':
            appendTerminalLine('[ Server Administration ]  ██████████████████ 90%\n[ n8n / Automations ]      ████████████████████ 95%\n[ Linux / Bash Scripting ] ████████████████ 85%\n[ Frontend Web (HTML/JS) ] ██████████████ 70%');
            break;
        case 'projects':
            appendTerminalLine('Featured Web Projects:\n1. Pure Touch Plus   - Cleaning & Sterilization Service Website (https://puretouchplus.com/)\n2. Salt Time News    - Salt Time News Website (https://ashrafaldbas.com/)\n\nGitHub Repositories:\n3. linkedin_ai.skill  - Content creation automation for LinkedIn\n4. n8n_master.skill  - Advanced n8n workflow templates\n5. PayFlow           - Financial flow & payment management system\n\nn8n Workflows:\n6. Student Attendance Processing (Ollama + n8n)\n7. Telegram News Aggregator Scraper\n8. Unified Webhook Notifications Hub\n9. AI Lead Generator & Cold Outreach (Gemini + GPT-4)\n10. Task Management AI Agent (Google Sheets + GPT-4o)\n11. Telegram Gmail Assistant Agent (Gemini)\n\nType "puretouch", "salttime", or "github" to open them.');
            break;
        case 'puretouch':
            appendTerminalLine('Opening Pure Touch Plus...');
            window.open('https://puretouchplus.com/', '_blank');
            break;
        case 'salttime':
        case 'ashraf':
            appendTerminalLine('Opening Salt Time News...');
            window.open('https://ashrafaldbas.com/', '_blank');
            break;
        case 'github':
            appendTerminalLine('Opening GitHub profile...');
            window.open('https://github.com/alsaleh20', '_blank');
            break;
        case 'contact':
            executeContactCommand(argument);
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'valve-steam':
            triggerValveSteamPrank();
            break;
        case 'matrix':
            triggerMatrixEffect();
            break;
        case 'cyberpunk':
        case 'neon':
            triggerCyberpunkEffect();
            break;
        case 'hacker':
        case 'hack':
            triggerHackerEffect();
            break;
        case 'sudo':
            triggerSudoEffect();
            break;
        case 'party':
        case 'celebrate':
            triggerPartyEffect();
            break;
        case 'secret':
        case 'vault':
            appendTerminalLine('🔓 SECRET UNLOCKED:\n✨ "Creativity is intelligence having fun." - Albert Einstein\n🚀 You found the hidden Easter Egg! Try typing: matrix, cyberpunk, hacker, sudo, or party.', 'matrix-text');
            break;
        default:
            appendTerminalLine(`bash: command not found: ${command}. Type 'help' for options.`, 'terminal-error');
    }
}

function executeContactCommand(argument) {
    const links = {
        '-wa': ['WhatsApp chat 1', 'https://wa.me/962775858328'],
        '-wa2': ['WhatsApp chat 2', 'https://wa.me/962779511729'],
        '-mail': ['email composer', 'mailto:alsalehhiary@gmail.com'],
        '-git': ['GitHub profile', 'https://github.com/alsaleh20'],
        '-link': ['LinkedIn profile', 'https://www.linkedin.com/in/alsaleh-hyari-b2b5b5392/'],
        '-insta': ['Instagram profile', 'https://instagram.com/k_alsaleh20_'],
        '-x': ['X profile', 'https://x.com/k_alsaleh20'],
        '-yt': ['YouTube channel', 'https://www.youtube.com/@alsaleh20'],
        '-fb': ['Facebook profile', 'https://www.facebook.com/alsaleh.hiary.2025'],
        '-khamsat': ['Khamsat profile', 'https://khamsat.com/user/alsaleh20'],
        '-mostaql': ['Mostaql profile', 'https://mostaql.com/u/k_alsaleh20'],
        '-baaeed': ['Baaeed profile', 'https://baaeed.com/u/alsaleh20'],
        '-hsoub': ['Hsoub Academy profile', 'https://academy.hsoub.com/profile/4433240-alsaleh-hiary/'],
        '-unicoders': ['Unicoders profile', 'https://unicoders.co/profile/alsaleh20']
    };
    const link = links[argument];
    if (link) {
        appendTerminalLine(`Opening ${link[0]}...`);
        window.open(link[1], argument === '-mail' ? '_self' : '_blank');
        return;
    }
    appendTerminalLine('Usage: contact [option]\nOptions: -wa, -wa2, -mail, -git, -link, -khamsat, -mostaql, -baaeed, -hsoub, -unicoders, -insta, -x, -yt, -fb');
}

function getMainTerminalWindow() {
    return document.querySelector('.terminal-window');
}

function triggerMatrixEffect() {
    const terminal = getMainTerminalWindow();
    if (terminal) {
        terminal.classList.remove('cyberpunk-mode', 'hacker-mode');
        terminal.classList.add('matrix-mode', 'glitch-effect');
        setTimeout(() => terminal.classList.remove('glitch-effect'), 600);
    }
    appendTerminalLine('Entering Matrix visual mode...', 'matrix-text');
    let count = 0;
    const interval = setInterval(() => {
        appendTerminalLine(Array.from({ length: 45 }, () => Math.random() > 0.5 ? '1 ' : '0 ').join(''), 'matrix-text');
        count++;
        if (count > 6) {
            clearInterval(interval);
            appendTerminalLine('[ System Encrypted & Ready ]', 'matrix-text');
        }
    }, 100);
}

function triggerCyberpunkEffect() { applyTerminalEffect('cyberpunk-mode', '⚡ CYBERPUNK NEON OVERDRIVE ACTIVATED ⚡', 'cyberpunk-text'); }
function triggerHackerEffect() { applyTerminalEffect('hacker-mode', '🚨 ACCESS GRANTED - ROOT LEVEL PROTOCOLS INITIALIZED...', 'hacker-text'); }
function triggerSudoEffect() { applyTerminalEffect(null, 'guest IS NOT IN THE SUDOERS FILE. THIS INCIDENT WILL BE REPORTED TO ALSALEH! 🚨', 'terminal-error'); }

function applyTerminalEffect(mode, message, className) {
    const terminal = getMainTerminalWindow();
    if (terminal) {
        if (mode) terminal.classList.remove('matrix-mode', 'cyberpunk-mode', 'hacker-mode');
        if (mode) terminal.classList.add(mode);
        terminal.classList.add('glitch-effect');
        setTimeout(() => terminal.classList.remove('glitch-effect'), 600);
    }
    appendTerminalLine(message, className);
}

function triggerPartyEffect() {
    appendTerminalLine('🎉 🥳 PARTY TIME! 🎉 🥳', 'cyberpunk-text');
    appendTerminalLine('✨ 🚀 Welcome to Alsaleh Al-Hayari Portfolio! 🚀 ✨', 'matrix-text');
    const terminal = getMainTerminalWindow();
    if (terminal) {
        terminal.classList.add('cyberpunk-mode', 'glitch-effect');
        setTimeout(() => terminal.classList.remove('glitch-effect'), 600);
    }
}

function triggerValveSteamPrank() {
    applyTerminalEffect('hacker-mode', '⚠️ [VALVE ANTI-CHEAT PROTOCOL ACTIVATED]', 'terminal-error');
    setTimeout(() => appendTerminalLine('🚨 تم إقصاء المخترق (إعدامه) ☠️', 'hacker-text'), 400);
    setTimeout(() => appendTerminalLine('🎯 وأنت الهدف التالي... 👁️⚔️', 'hacker-text'), 1000);
}

function triggerHackerFallEffect() {
    applyTerminalEffect('hacker-mode', '⚠️ OVERRIDING SYSTEM SECURITY PERMISSIONS...', 'hacker-text');
    setTimeout(() => {
        appendTerminalLine('🔥 SYSTEM CRASH: GRAVITY PROTOCOL OVERLOAD! 💥', 'terminal-error');
        document.querySelectorAll('.card, .about-card-section, .projects-section').forEach((section, index) => {
            if (!section.querySelector('.terminal-window')) setTimeout(() => section.classList.add('falling-element'), index * 150);
        });
        setTimeout(() => {
            appendTerminalLine('\n🎉 💻 🏆 مبروك انت هاكر 🏆 💻 🎉', 'cyberpunk-text');
            appendTerminalLine('System bypass complete. Type "clear" to restore the matrix.', 'matrix-text');
        }, 1200);
    }, 600);
}