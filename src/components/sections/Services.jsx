import React from 'react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
    {
        title: ["Search engine", "optimization"],
        variant: "light",
        image: "/services/seo.png" // Placeholder
    },
    {
        title: ["Pay-per-click", "advertising"],
        variant: "green",
        image: "/services/ppc.png"
    },
    {
        title: ["Social Media", "Marketing"],
        variant: "dark",
        image: "/services/smm.png"
    },
    {
        title: ["Email", "Marketing"],
        variant: "light",
        image: "/services/email.png"
    },
    {
        title: ["Content", "Creation"],
        variant: "green",
        image: "/services/content.png"
    },
    {
        title: ["Analytics and", "Tracking"],
        variant: "dark",
        image: "/services/analytics.png"
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Services"
                description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {servicesData.map((service, index) => (
                    <Card
                        key={index}
                        variant={service.variant}
                        className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:h-[310px] p-12 transition-transform hover:-translate-y-2 cursor-pointer"
                    >
                        {/* Left Content */}
                        <div className="flex flex-col justify-between h-full w-full sm:w-1/2">
                            <div>
                                {service.title.map((line, i) => (
                                    <span
                                        key={i}
                                        className={`block text-2xl sm:text-3xl font-bold px-1 rounded-md mb-1 w-fit
                        ${service.variant === 'light' ? 'bg-primary text-black' :
                                                service.variant === 'green' ? 'bg-white text-black' :
                                                    'bg-white text-black'} 
                      `}
                                    >
                                        {line}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-8 sm:mt-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors
                    ${service.variant === 'dark' ? 'bg-white text-black' : 'bg-dark text-primary border-dark'}
                  `}>
                                    <ArrowUpRight size={24} />
                                </div>
                                <span className={`text-xl hidden sm:block ${service.variant === 'dark' ? 'text-white' : 'text-black'}`}>
                                    Learn more
                                </span>
                            </div>
                        </div>

                        {/* Right Image Placeholder */}
                        <div className="w-full sm:w-1/2 flex justify-center items-center">
                            {/* Visual placeholder since we don't have images yet */}
                            <div className="w-40 h-40 bg-contain bg-no-repeat bg-center opacity-80"
                                style={{
                                    backgroundImage: 'url(https://via.placeholder.com/150)', // Ideally replace with custom generated SVGs
                                    backgroundColor: service.variant === 'dark' ? '#292A32' : '#E0E0E0',
                                    borderRadius: '10px'
                                }}
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Services;
