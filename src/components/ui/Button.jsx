import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-8 py-4 rounded-xl font-medium transition-all duration-300 transform active:scale-95 border border-dark text-lg";

    const variants = {
        primary: "bg-primary text-black hover:bg-white",
        dark: "bg-dark text-white hover:bg-primary hover:text-black",
        outline: "bg-transparent text-black border-dark hover:bg-primary",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
