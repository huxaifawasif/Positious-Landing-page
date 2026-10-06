import React from 'react';

const SectionHeader = ({ title, description }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mb-16 text-center sm:text-left">
            <h2 className="bg-primary text-3xl sm:text-4xl font-bold px-2 rounded-md inline-block">
                {title}
            </h2>
            <p className="max-w-lg text-lg text-gray-700 mt-2">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
