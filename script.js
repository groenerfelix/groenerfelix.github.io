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
    const sections = document.querySelectorAll('.content-section, .hero-section');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});