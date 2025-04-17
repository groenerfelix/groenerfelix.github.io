gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('section');
const totalSections = sections.length;

gsap.set(sections, { opacity: 0, scale: 0.8 });

sections.forEach((section, index) => {
    const direction = index % 2 === 0 ? -1 : 1;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "top 80%",
            scrub: 0.5,
        }
    });

    tl.to(section, {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.5,
    });

    if (index < totalSections - 1) {
        const progress = index / (totalSections - 1);
        const curve = Math.sin(progress * Math.PI) * direction * 50;
        
        tl.to(".story-line", {
            morphSVG: `M0,${index * 100} Q50,${index * 100 + 50} ${50 + curve},${(index + 1) * 100}`,
            ease: "none",
        }, 0);
    }
});