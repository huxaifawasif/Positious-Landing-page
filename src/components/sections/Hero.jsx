import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-dark">
                        Navigating the <br className="hidden lg:block" />
                        digital landscape <br className="hidden lg:block" />
                        for success
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <div className="pt-2">
                        <Button variant="dark" className="w-full sm:w-auto text-lg px-8 py-5">
                            Book a consultation
                        </Button>
                    </div>
                </div>

                {/* Illustration */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Placeholder for the megaphone illustration. In a real project, this would be an SVG or Image.
               I will create a CSS/SVG composition to mimic the visual style. */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            {/* Megaphone Body */}
                            <path d="M150 200 L400 120 L400 480 L150 400 Z" fill="#B9FF66" stroke="#191A23" strokeWidth="3" />
                            {/* Megaphone Handle */}
                            <path d="M250 420 L280 550 L180 550 L200 425" fill="#191A23" />
                            {/* Speaker Elements */}
                            <circle cx="450" cy="300" r="20" fill="#191A23" />
                            <path d="M480 250 Q 520 300 480 350" stroke="#191A23" strokeWidth="5" fill="none" />
                            <path d="M510 220 Q 570 300 510 380" stroke="#191A23" strokeWidth="5" fill="none" />

                            {/* Abstract Shapes */}
                            <circle cx="100" cy="100" r="30" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
                            <rect x="50" y="500" width="40" height="40" fill="#191A23" />
                            <path d="M500 50 L530 100 L470 100 Z" fill="#191A23" />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
