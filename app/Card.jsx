'use client';

export default function Card({ title, timeline, text, links, image, icons}) {
    const openUrl = (url) => {
        const newTab = window.open(url, '_blank');
        if (newTab) {
            newTab.focus();
        }
    };
    
    let showLinks = null;
    if (links) {
        showLinks = links.map((lnk, index) => (
                <button
                    key={index}
                    className="px-3 py-1 text-pink-700 border-2 border-pink-500 rounded-full hover:scale-105 transform transition-all duration-300"
                    onClick={() => openUrl(lnk.url)}>{lnk.text}
                </button>
        ));
    }
    
    let showIcons = null
    if (icons) {
        showIcons = icons.map((icon, index) => (
            <img
                key={index}
                src={icon}
                alt="Icon"
                className="w-12 h-12"
            />
        ))
    }

    return (
<div className="flex flex-row w-2/3 h-96">
    <div className="flex flex-col gap-2 w-5/12 px-4 py-[10%]">
        <h1 className="text-3xl text-center font-bold text-gray-800">{title}</h1>
        <h2 className="text-2xl text-center font-bold text-gray-800">{timeline}</h2>
        <p className="text-base text-gray-500 text-center">{text}</p>
        <div className="flex flex-row gap-4 justify-center">
            {showIcons}
        </div>
        <div className="flex flex-row justify-center gap-2">
            {showLinks}
        </div>
    </div>
    <div className="w-7/12 flex justify-center items-center">
        <img
            className="max-h-full max-w-full object-contain rounded-lg border-2 border-black"
            src={image}
            alt={title}
        />
    </div>
</div>

    )
}