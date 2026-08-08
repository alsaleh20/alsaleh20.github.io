document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');

    cursorDot.classList.add('cursor-dot');
    cursorOutline.classList.add('cursor-outline');

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Directly move dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Animate outline with slight delay for smoothness (Liquid feel)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 250, fill: "forwards", easing: "ease-out" });
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-badge, .experience-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-active');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-active');
        });
    });

    // Function to wrap words in spans safely without breaking links or icons
    function wrapWords(element) {
        // Skip if already processed
        if (element.dataset && element.dataset.wrapped) return;
        if (element.classList.contains('hover-word')) return;

        // Mark as processed
        if (element.dataset) element.dataset.wrapped = "true";

        Array.from(element.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                const text = node.textContent;
                const words = text.split(/(\s+)/); // Keep all spaces

                const fragment = document.createDocumentFragment();
                words.forEach(word => {
                    if (word.trim().length > 0) {
                        const span = document.createElement('span');
                        span.className = 'hover-word';
                        span.textContent = word;
                        fragment.appendChild(span);
                    } else if (word.length > 0) {
                        fragment.appendChild(document.createTextNode(word));
                    }
                });

                element.replaceChild(fragment, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Recursively wrap children for inline-like elements
                const name = node.nodeName.toLowerCase();
                if (['a', 'span', 'strong', 'em', 'b', 'i'].includes(name)) {
                    wrapWords(node);
                }
            }
        });
    }

    // Target elements to wrap - focusing on content areas
    // Excluding h1 and h2 to ensure the main title name remains perfectly stable
    const textContainers = document.querySelectorAll('p, li, .experience-item h3, .section-card h2');
    textContainers.forEach(wrapWords);

    // Apply hover logic using event delegation
    document.addEventListener('mouseover', (e) => {
        const word = e.target.closest('.hover-word');
        if (word) {
            document.body.classList.add('cursor-active');
            word.style.transform = 'scale(1.2)';
            word.style.color = 'var(--accent-color)';
            word.style.zIndex = '100';
        }
    });

    document.addEventListener('mouseout', (e) => {
        const word = e.target.closest('.hover-word');
        if (word) {
            document.body.classList.remove('cursor-active');
            word.style.transform = 'scale(1)';
            word.style.color = '';
            word.style.zIndex = '';
        }
    });

    // Handle clicks
    window.addEventListener('mousedown', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorOutline.style.backgroundColor = 'rgba(0, 210, 255, 0.2)';
    });
    window.addEventListener('mouseup', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});
