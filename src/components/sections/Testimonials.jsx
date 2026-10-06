import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in our website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
        author: "John Smith",
        role: "Marketing Director at XYZ Corp"
    },
    {
        text: "Positivus transformed our digital presence. Their strategic approach to SEO and PPC helped us reach new markets and achieve our sales targets faster than we expected. Highly recommended!",
        author: "Emily Johnson",
        role: "CEO at TechStart"
    },
    {
        text: "The social media campaigns managed by Positivus have been a game changer. Our engagement rates have skyrocketed, and we've built a loyal community around our brand.",
        author: "David Lee",
        role: "Founder at EcoStore"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Testimonials"
                description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
            />

            <Card variant="dark" className="rounded-[45px] p-8 sm:p-14 lg:p-20 overflow-hidden flex flex-col items-center">

                <div className="w-full max-w-3xl relative min-h-[300px] flex flex-col justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="relative border border-primary rounded-[45px] p-8 sm:p-12 mb-10 text-white bubble-tail">
                                <p className="text-lg sm:text-lg leading-relaxed">
                                    "{testimonials[currentIndex].text}"
                                </p>
                            </div>
                            <div className="pl-12">
                                <h4 className="text-primary text-xl font-bold">{testimonials[currentIndex].author}</h4>
                                <p className="text-white">{testimonials[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-10 mt-12">
                    <button onClick={prevSlide} className="text-white hover:text-primary transition-colors">
                        <ArrowLeft size={32} />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`cursor-pointer transition-all duration-300 ${idx === currentIndex ? 'text-primary' : 'text-white'}`}
                                onClick={() => setCurrentIndex(idx)}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="text-white hover:text-primary transition-colors">
                        <ArrowRight size={32} />
                    </button>
                </div>

            </Card>

            {/* Custom CSS for bubble tail inside component or global CSS */}
            <style jsx>{`
        .bubble-tail::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50px;
            border-width: 20px 20px 0;
            border-style: solid;
            border-color: #B9FF66 transparent transparent transparent; /* Match border color logic if solid, but for outline it's tricky. Using solid for now or just pseudo element outline */
        }
        /* A better approach for outline tail is strictly SVG or complex css. I'll skip complex tail for now to ensure cleanliness */
      `}</style>

        </section>
    );
};

export default Testimonials;
