import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import MenuButton from '../ui/MenuButton';
import OsmoLogo from '../ui/OsmoLogo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Links data
    const navLinks = [
        { name: 'About us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Use Cases', href: '#use-cases' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Blog', href: '#blog' },
    ];

    // GSAP for opening/closing height and width animation
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Define animations for Desktop (> 768px) where width change is most effective
            mm.add("(min-width: 768px)", () => {
                if (isOpen) {
                    gsap.to(navRef.current, {
                        width: "100%", // Expands to fill the max-w-4xl container (which is 56rem ~ 896px)
                        maxWidth: "896px", // Ensure it respects the max-width
                        height: "auto",
                        backgroundColor: "rgba(25, 26, 35, 0.95)",
                        borderRadius: "30px", // Keep rounded corners consistent
                        duration: 0.6,
                        ease: "power3.inOut"
                    });
                } else {
                    gsap.to(navRef.current, {
                        width: "600px", // Constrained width when closed
                        height: "64px",
                        backgroundColor: "rgba(25, 26, 35, 0.8)",
                        duration: 0.6,
                        ease: "power3.inOut"
                    });
                }
            });

            // Mobile fallback (always full width mostly, just animate height)
            mm.add("(max-width: 767px)", () => {
                if (isOpen) {
                    gsap.to(navRef.current, {
                        height: "auto",
                        backgroundColor: "rgba(25, 26, 35, 0.95)",
                        width: "90%",
                        duration: 0.5,
                        ease: "power3.inOut"
                    });
                } else {
                    gsap.to(navRef.current, {
                        height: "64px",
                        backgroundColor: "rgba(25, 26, 35, 0.8)",
                        width: "90%",
                        duration: 0.5,
                        ease: "power3.inOut"
                    });
                }
            });

        }, navRef);

        return () => ctx.revert();
    }, [isOpen]);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div
                ref={navRef}
                className="pointer-events-auto relative w-[90%] max-w-4xl bg-dark/80 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden flex flex-col transition-shadow shadow-2xl"
                style={{ height: '64px' }} // Initial height
            >

                {/* Top Bar (Always Visible) */}
                <div className="relative flex items-center justify-between px-6 h-[64px] flex-shrink-0 w-full">
                    {/* Left: Menu Toggle */}
                    <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <OsmoLogo isOpen={isOpen} />
                    </div>

                    {/* Right: Join / CTA */}
                    <Button variant="primary" className="!py-2 !px-6 !text-sm !rounded-full">Join</Button>
                </div>

                {/* Expanded Menu Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            className="flex flex-col p-6 pt-2 border-t border-white/10"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        variants={{
                                            hidden: { y: 20, opacity: 0 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: { type: "spring", stiffness: 300, damping: 24 }
                                            }
                                        }}
                                        className="text-2xl font-light text-white hover:text-primary transition-colors py-2 border-b border-white/10 last:border-0"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-4">
                                <motion.div
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { type: "spring", stiffness: 300, damping: 24 }
                                        }
                                    }}
                                >
                                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black w-full justify-center">Member Login</Button>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { type: "spring", stiffness: 300, damping: 24 }
                                        }
                                    }}
                                >
                                    <Button variant="primary" className="w-full justify-center">Join Osmo</Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};

export default Navbar;
