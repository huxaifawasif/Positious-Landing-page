import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact = () => {
    const [formType, setFormType] = useState('say_hi'); // 'say_hi' or 'quote'

    return (
        <section id="contact" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <SectionHeader
                title="Contact Us"
                description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
            />

            <Card variant="light" className="p-0 overflow-hidden flex flex-col lg:flex-row relative">

                <div className="w-full lg:w-2/3 p-8 sm:p-14 lg:p-16">
                    <div className="flex gap-8 mb-10">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="contact_type"
                                checked={formType === 'say_hi'}
                                onChange={() => setFormType('say_hi')}
                                className="accent-primary w-5 h-5"
                            />
                            <span className="text-lg">Say Hi</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="contact_type"
                                checked={formType === 'quote'}
                                onChange={() => setFormType('quote')}
                                className="accent-primary w-5 h-5"
                            />
                            <span className="text-lg">Get a Quote</span>
                        </label>
                    </div>

                    <form className="flex flex-col gap-6 max-w-lg">
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-medium">Name</label>
                            <input type="text" placeholder="Name" className="p-4 rounded-xl border border-gray-300 focus:border-primary focus:outline-none bg-white" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base font-medium">Email*</label>
                            <input type="email" placeholder="Email" className="p-4 rounded-xl border border-gray-300 focus:border-primary focus:outline-none bg-white" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base font-medium">Message*</label>
                            <textarea placeholder="Message" rows="6" className="p-4 rounded-xl border border-gray-300 focus:border-primary focus:outline-none bg-white resize-none" required></textarea>
                        </div>

                        <Button variant="dark" type="submit" className="w-full mt-4">Send Message</Button>
                    </form>
                </div>

                <div className="hidden lg:block lg:w-1/3 relative overflow-hidden">
                    {/* Illustration placeholder - right side of form */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[600px] h-[600px]">
                        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
                            {/* Abstract shapes mimicking the design */}
                            <path d="M300 100 Q 400 50 500 100 T 700 100" stroke="#191A23" strokeWidth="2" strokeDasharray="5 5" />
                            <circle cx="400" cy="300" r="150" fill="#B9FF66" opacity="0.2" />
                            <path d="M400 300 L 550 150 L 600 200 L 450 350 Z" fill="#191A23" />
                            <circle cx="550" cy="150" r="20" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

            </Card>
        </section>
    );
};

export default Contact;
