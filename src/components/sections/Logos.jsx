import React from 'react';

const Logos = () => {
    const partners = [
        { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Dribbble', url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.svg' },
        { name: 'HubSpot', url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg' },
        { name: 'Notion', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' }, // Notion is tricky, using text fallback often better
        { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Zoom', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg' },
    ];

    return (
        <section className="py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 grayscale opacity-70">
                    {partners.map((partner) => (
                        // Using text as fallback since external URLs might break or look bad without proper sizing
                        <div key={partner.name} className="flex items-center justify-center p-2 min-w-[120px]">
                            <h3 className="text-2xl font-bold text-gray-500">{partner.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
