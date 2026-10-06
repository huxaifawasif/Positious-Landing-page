import React from 'react';
import Button from '../ui/Button';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white rounded-t-[45px] mx-4 sm:mx-6 lg:mx-8 mb-8 pb-8 pt-12 sm:pt-16 px-6 sm:px-12 lg:px-16 mt-20">

            {/* Top Part: Logo & Nav */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 sm:mb-16">
                <div className="flex items-center gap-2">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 filter invert">
                        <path d="M14.5 0L17.8647 11.1353L29 14.5L17.8647 17.8647L14.5 29L11.1353 17.8647L0 14.5L11.1353 11.1353L14.5 0Z" fill="#191A23" />
                    </svg>
                    <span className="text-3xl font-bold tracking-tight">Positivus</span>
                </div>

                <nav className="flex flex-wrap justify-center gap-6 sm:gap-10">
                    {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg hover:underline underline-offset-4 decoration-primary">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="w-8 h-8 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
                    <a href="#" className="w-8 h-8 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
                </div>
            </div>

            {/* Middle Part: Contact & Subscribe */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">

                <div className="flex flex-col gap-4 text-center lg:text-left w-full lg:w-1/3">
                    <h4 className="bg-primary text-black font-bold px-2 rounded-md inline-block w-fit mx-auto lg:mx-0">Contact us:</h4>
                    <p className="text-lg mt-4">Email: info@positivus.com</p>
                    <p className="text-lg">Phone: 555-567-8901</p>
                    <p className="text-lg">Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
                </div>

                <div className="w-full lg:w-2/3 bg-[#292A32] p-8 sm:p-12 rounded-[20px] flex flex-col sm:flex-row gap-4 items-center">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full sm:w-1/2 p-4 rounded-xl border border-white/20 bg-transparent text-white placeholder-white/60 focus:outline-none focus:border-primary"
                    />
                    <Button variant="primary" className="w-full sm:w-1/2">Subscribe to news</Button>
                </div>

            </div>

            {/* Bottom Part: Copyright */}
            <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row gap-8 items-center text-white/80 z-10 relative">
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>

            {/* Big Typography Reveal */}
            <div className="w-full mt-16 overflow-hidden flex justify-center pb-4">
                <h1 className="footer-big-text text-[14vw] leading-[0.8] font-bold text-center text-white opacity-20 tracking-tighter select-none translate-y-full">
                    POSITIVUS
                </h1>
            </div>

        </footer>
    );
};

export default Footer;
