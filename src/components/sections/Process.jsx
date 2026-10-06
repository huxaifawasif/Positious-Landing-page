import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import AccordionItem from '../ui/AccordionItem';

const steps = [
    {
        title: "Consultation",
        content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        title: "Research and Strategy Development",
        content: "We define a coherent strategy based on market research, competitor analysis, and your unique brand positioning."
    },
    {
        title: "Implementation",
        content: "Our team executes the plan, building campaigns, creating content, and optimizing technical aspects of your digital presence."
    },
    {
        title: "Monitoring and Optimization",
        content: "We track performance continuously, making data-driven adjustments to maximize ROI and campaign effectiveness."
    },
    {
        title: "Reporting and Communication",
        content: "You receive regular, transparent reports detailing key metrics, progress toward goals, and actionable insights."
    },
    {
        title: "Continual Improvement",
        content: "We constantly refine our approach based on results and evolving market trends to ensure long-term success."
    }
];

const Process = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your Business Goals"
            />

            <div className="max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        title={step.title}
                        content={step.content}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Process;
