import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const CTABanner = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <Card variant="light" className="relative p-0 flex flex-col sm:flex-row items-center justify-between overflow-hidden">

                <div className="p-10 sm:p-14 sm:w-1/2 flex flex-col items-start gap-6">
                    <h3 className="text-3xl font-bold">Let's make things happen</h3>
                    <p className="text-lg">
                        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </p>
                    <Button variant="dark" className="w-full sm:w-auto">Get your free proposal</Button>
                </div>

                <div className="hidden sm:block sm:w-1/2 relative h-full min-h-[300px]">
                    {/* Abstract visual decoration */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10">
                        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                            <path d="M150 0L300 150L150 300L0 150L150 0Z" fill="#B9FF66" opacity="0.8" />
                            <circle cx="150" cy="150" r="80" stroke="#191A23" strokeWidth="2" />
                            <path d="M120 180L180 120" stroke="#191A23" strokeWidth="4" />
                            <path d="M130 110L170 190" stroke="#191A23" strokeWidth="4" />
                        </svg>
                    </div>
                </div>

            </Card>
        </section>
    );
};

export default CTABanner;
