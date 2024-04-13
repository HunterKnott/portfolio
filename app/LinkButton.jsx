'use client';

export default function LinkButton({ srcPath, altText, url, position }) {
    const openUrl = () => {
        const newTab = window.open(url, '_blank');
        if (newTab) {
            newTab.focus();
        }
    };

    return (
        <div className="hover:scale-105 transition-transform duration-300">
            <button
                className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center transform transition-transform hover:bg-gradient-to-r from-pink-700 to-pink-500 duration-1000"
                onClick={openUrl}>
                <img src={srcPath} alt={altText} className={position} />
            </button>
        </div>
    )
}