'use client';
import { useState } from 'react';

export default function Skill({ text, icon, color, experience }) {
    const [active, setActive] = useState(false);
    const [iconText, setIconText] = useState(null);
    const colors = {
        red: 'bg-gradient-to-r from-red-200 via-red-100 to-red-200 border border-red-600',
        blue: 'bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 border border-blue-600',
        yellow: 'bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border border-yellow-600',
        green: 'bg-gradient-to-r from-green-200 via-green-100 to-green-200 border border-green-600',
        purple: 'bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 border border-purple-600',
    };
    
    const handleClick = () => {
        setActive(!active);
        setIconText(null);
    };

    const handleIconClick = (text) => {
        setIconText(text)
    }

    const showIcons = experience.map((exp, index) => (
        <div key={index} className="flex flex-col items-center col-span-full">
            <h2 className="text-xl font-bold underline text-gray-700 mb-2">{exp.type}</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {exp.icons.map((icon, idx) => (
                    <button
                        onClick={() => handleIconClick(icon.text)}
                        className="hover:scale-125 transition-transform duration-300">
                        <img key={idx} src={icon.path} alt="icon" className="w-20 h-20" />
                    </button>
                ))}
            </div>
        </div>
    ))

    return (
        <div className="relative w-full items-center">
            {!active ? (
                <button
                    className={`w-full h-full p-6 flex items-center justify-center ${colors[color]} rounded-full hover:scale-105 transition-transform duration-200 hover:shadow-lg`}
                    onClick={handleClick}>
                    {icon && <img src={icon} alt="Icon" className="w-10 h-10 mx-6" />}
                    <h1 className="text-2xl font-bold text-gray-700">{text}</h1>
                    {icon && <img src={icon} alt="Icon" className="w-10 h-10 mx-6" />}
                </button>
            ) : (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex flex-row">
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <button
                            className={`w-1/2 h-1/6 p-6 flex items-center justify-center ${colors[color]} rounded-full hover:scale-105 transition-transform duration-200`}
                            onClick={handleClick}>
                            {icon && <img src={icon} alt="Icon" className="w-10 h-10 mx-6" />}
                            <h1 className="text-2xl font-bold text-gray-700">Return</h1>
                            {icon && <img src={icon} alt="Icon" className="w-10 h-10 mx-6" />}
                        </button>
                    </div>
                    <div className="absolute bg-gradient-to-t from-gray-400 via-gray-50 to-gray-400 right-0 w-1/2 h-full flex flex-col justify-between">
                        <div className="h-5/6 w-full p-14 flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-bold text-gray-700 underline pb-6">My {text} Experience</h1>
                            <div className="grid grid-cols-2 gap-8">
                                {showIcons} 
                            </div>
                        </div>
                        <div className="h-1/6 bg-gray-400 p-6 flex items-center">
                            {iconText && <p className="text-xl font-bold text-gray-700 text-center">{iconText}</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}