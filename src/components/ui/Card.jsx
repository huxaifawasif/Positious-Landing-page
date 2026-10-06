import React from 'react';

const Card = ({ children, className = '', variant = 'white' }) => {
    const baseStyles = "p-8 rounded-[45px] border border-dark shadow-[0_5px_0_0_#191A23]";

    const variants = {
        white: "bg-secondary", // Usually #F3F3F3 based on design, or white. Let's stick to theme colors.
        light: "bg-secondary",
        dark: "bg-dark text-white",
        green: "bg-primary",
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
