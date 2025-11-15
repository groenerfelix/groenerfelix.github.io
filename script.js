document.addEventListener('DOMContentLoaded', () => {

    // --- Interactive Aurora Background ---
    const aurora = document.querySelector('.aurora-background');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate movement as a percentage of the screen
        const moveX = ((clientX / innerWidth) * 100) - 50; // -50 to 50
        const moveY = ((clientY / innerHeight) * 100) - 50; // -50 to 50
        
        // Apply a dampened transformation. The division by 5 makes the movement more subtle.
        aurora.style.transform = `translate(${moveX / 5 - 50}%, ${moveY / 5 - 50}%)`;
    });


    // --- Fade-in on Scroll Animation ---
    // const sections = document.querySelectorAll('.content-section');

    // const observerOptions = {
    //     root: null, // observes intersections relative to the viewport
    //     rootMargin: '0px',
    //     threshold: 0.1 // trigger when 10% of the element is visible
    // };

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible');
    //             observer.unobserve(entry.target); // stop observing once it's visible
    //         }
    //     });
    // }, observerOptions);

    // sections.forEach(section => {
    //     observer.observe(section);
    // });

    // --- Highlighted project selector logic ---
    const highlightedTitle = document.getElementById('highlighted-title');
    const highlightedDescription = document.getElementById('highlighted-description');
    const highlightedImage = document.getElementById('highlighted-image');

    const smallCards = Array.from(document.querySelectorAll('.project-selector .small-card'));

    if (smallCards.length) {
        const setSelected = (card) => {
            smallCards.forEach(c => {
                c.classList.toggle('selected', c === card);
                c.setAttribute('aria-checked', c === card ? 'true' : 'false');
            });

            // Update big highlighted card
            const title = card.dataset.title || '';
            const description = card.dataset.description || '';
            const badge = card.dataset.badge || '';
            const image = card.dataset.image || '';

            highlightedTitle.textContent = title;
            highlightedDescription.textContent = description;
            highlightedDescription.innerHTML = description;

            if (image) {
                highlightedImage.src = image;
                highlightedImage.alt = title;
                highlightedImage.style.display = '';
            } else {
                highlightedImage.src = '';
                highlightedImage.alt = '';
                highlightedImage.style.display = 'none';
            }
        };

        // Click and keyboard handling
        smallCards.forEach((card, idx) => {
            card.addEventListener('click', () => setSelected(card));
            card.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    setSelected(card);
                }
                // left/right arrow navigation for the group
                if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') {
                    ev.preventDefault();
                    const next = smallCards[(idx + 1) % smallCards.length];
                    next.focus();
                    setSelected(next);
                }
                if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') {
                    ev.preventDefault();
                    const prev = smallCards[(idx - 1 + smallCards.length) % smallCards.length];
                    prev.focus();
                    setSelected(prev);
                }
            });
        });

        // Default select first
        setSelected(smallCards[0]);
    }

});