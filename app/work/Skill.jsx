'use client';
import { useState } from 'react';

export default function Skill({ text, icon, color }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    };

    return (
        <div className="relative w-full items-center">
            {!active ? (
                <button
                    className={`w-full h-full flex items-center justify-center bg-${color}-500 border border-${color}-600 rounded-md transition-colors duration-300 hover:bg-${color}-600`}
                    onClick={handleClick}>
                    {icon && <img src={icon} alt="Icon" className="w-6 h-6 mr-2" />}
                    {text}
                    {icon && <img src={icon} alt="Icon" className="w-6 h-6 ml-2" />}
                </button>
            ) : (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
                    <button
                        className={`w-1/6 h-1/6 bg-${color}-500 border border-${color}-600 rounded-md transition-colors duration-300 hover:bg-${color}-600 absolute left-0 transform translate-x-0`}
                        onClick={() => setExpanded(false)}>
                        {icon && <img src={icon} alt="Icon" className="w-6 h-6 mr-2" />}
                        {text}
                        {icon && <img src={icon} alt="Icon" className="w-6 h-6 ml-2" />}
                    </button>
                    <div className="absolute right-0 w-1/2 h-full flex flex-col justify-between">
                        <div className="h-1/2 flex items-center justify-around">
                            <div className="w-1/3 h-full bg-gray-300"></div>
                            <div className="w-1/3 h-full bg-gray-300"></div>
                            <div className="w-1/3 h-full bg-gray-300"></div>
                        </div>
                        <div className="h-1/2 bg-gray-400"></div>
                    </div>
                </div>
            )}
        </div>
    )
}