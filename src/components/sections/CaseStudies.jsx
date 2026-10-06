import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        },
        {
            text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
        },
        {
            text: "For a national retail chain, we created a social media marketing campaign that increased social media engagement by 25% and generated 20% more sales."
        }
    ];

    return (
        <section id="use-cases" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Case Studies"
                description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
            />

            <Card variant="dark" className="p-8 sm:p-12 lg:p-16 rounded-[45px]">
                <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-600">

                    {cases.map((item, index) => (
                        <div key={index} className="px-0 lg:px-8 py-8 lg:py-0 first:pt-0 last:pb-0 first:pl-0 last:pr-0 lg:first:py-0 lg:last:py-0 flex-1 flex flex-col justify-between gap-6">
                            <p className="text-white text-lg leading-relaxed">
                                {item.text}
                            </p>
                            <div className="flex items-center gap-3 text-primary cursor-pointer hover:underline">
                                <span className="text-xl">Learn more</span>
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    ))}

                </div>
            </Card>
        </section>
    );
};

export default CaseStudies;
