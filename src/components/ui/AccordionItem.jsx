import React, { useState } from 'react';
import Card from './Card';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
    return (
        <Card
            variant={isOpen ? "green" : "light"}
            className={`p-8 sm:p-10 mb-6 transition-colors duration-300 border border-dark ${isOpen ? 'shadow-[0_5px_0_0_#191A23]' : 'shadow-[0_5px_0_0_#191A23]'}`}
        >
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <div className="flex items-center gap-6">
                    <span className="text-3xl sm:text-5xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
                </div>
                <div className="bg-secondary rounded-full p-2 border border-dark flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-8 border-t border-dark/20 mt-8">
                            <p className="text-lg leading-relaxed">{content}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
};

export default AccordionItem;
