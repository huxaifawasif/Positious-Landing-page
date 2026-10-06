import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
    useLayoutEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        // Connect Lenis to GSAP ScrollTrigger
        // This is critical for ScrollTrigger to work perfectly with smooth scroll
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        requestAnimationFrame(raf);

        let ctx = gsap.context(() => {
            // Global Section Animations
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                // Check if section is NOT the hero (first section usually) to avoid conflict
                // or just ensure settings are robust
                // We'll trust the specific Hero selector below to override or work alongside

                gsap.fromTo(section,
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                );
            });

            // Navbar Animation
            const navbar = document.querySelector('nav');
            if (navbar) {
                gsap.fromTo(navbar,
                    { y: -100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.2
                    }
                );
            }

            // Hero Animations
            // We target the Main > Hero Section specifically
            const heroSection = document.querySelector('main > section:first-of-type');
            if (heroSection) {
                // Kill the generic section animation for the hero if it exists to avoid double-animation
                // Better yet, just animate children

                const heroElements = heroSection.querySelectorAll('h1, p, button, a');
                gsap.fromTo(heroElements,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.1,
                        ease: 'power3.out',
                        delay: 0.5
                    }
                );

                const heroImage = heroSection.querySelector('.relative.w-full.aspect-square');
                if (heroImage) {
                    gsap.fromTo(heroImage,
                        { scale: 0.8, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.2,
                            ease: 'back.out(1.7)',
                            delay: 0.8
                        }
                    );
                }
            }




            // Footer Animation
            const footer = document.querySelector('footer');
            if (footer) {
                // General Footer Fade
                gsap.fromTo(footer,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: footer,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                );

                // Big Text Typography Reveal
                const bigText = footer.querySelector('.footer-big-text');
                if (bigText) {
                    gsap.to(bigText, {
                        y: "0%",
                        opacity: 0.3, // Make it semi-visible
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: footer,
                            start: "top 70%", // Start animating when footer is partially visible
                            end: "bottom bottom",
                            scrub: 1, // Tie to scroll for a paralax-like reveal effect? Or just play?
                            // User asked for "Reveal Animation". Usually scrub looks cool for footers.
                            // Let's try toggleActions for a "Reveal" effect (Curtain up).
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }

        }); // End of gsap.context

        return () => {
            ctx.revert(); // This is the KEY fix. Reverts all animations/styles when component unmounts/re-runs.
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);
};


