import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Linkedin } from 'lucide-react';

const teamMembers = [
    {
        name: "John Smith",
        role: "CEO and Founder",
        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and Content Strategy.",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Jane Doe",
        role: "Director of Operations",
        description: "7+ years of experience in project management and team leadership. Strong organizational skills.",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Michael Brown",
        role: "Senior SEO Specialist",
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Emily Davis",
        role: "PPC Manager",
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and ad copywriting.",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        name: "Brian Williams",
        role: "Social Media Specialist",
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content.",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        name: "Sarah Wilson",
        role: "Content Creator",
        description: "2+ years of experience in writing and editing. Skilled in creating compelling blog posts and social media content.",
        image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
];

const Team = () => {
    return (
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Team"
                description="Meet the skilled and experienced team behind our successful digital marketing strategies"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {teamMembers.map((member, index) => (
                    <Card key={index} variant="white" className="p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-4 items-end">
                                <div className="w-20 h-20 rounded-full overflow-hidden border border-dark relative">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-xl font-bold">{member.name}</h4>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                            <div className="bg-black text-primary p-2 rounded-full cursor-pointer hover:bg-primary hover:text-black border border-black transition-colors">
                                <Linkedin size={20} />
                            </div>
                        </div>
                        <div className="border-t border-dark pt-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center">
                <Button variant="dark" className="px-12">See all team</Button>
            </div>

        </section>
    );
};

export default Team;
