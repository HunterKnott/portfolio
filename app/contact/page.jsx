'use client';

import Head from "../Head"
import LinkButton from "../LinkButton";

export default function Page() {
    const handleContactClick = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = `Portfolio email from ${name}`;
        const mailtoLink = `mailto:hunterknott00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Work", "Projects", "About"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full h-screen px-60">
                <div className="w-full h-full flex flex-row gap-6 border-2 bg-yellow-50 border-pink-300 rounded-lg pt-6">
                    <div className="w-1/2 px-8 py-10 items-center content-center">
                        <img src="ProjectImages/Self2.jpeg" alt="Painting" className="h-full rounded-lg" />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-5xl font-bold text-gray-800 py-6">Contact Me</h1>
                        <div className="flex flex-row flex-grow border-l-2 border-t-2 border-pink-300 rounded-tl-lg">
                            <div className="flex flex-col px-10 py-4">
                                <label htmlFor="name" className="text-gray-800 font-bold">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mb-8 border-b-2 border-black focus:outline-none bg-transparent focus:ring-0"
                                />
                                <label htmlFor="email" className="text-gray-800 font-bold">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="mb-8 border-b-2 border-black focus:outline-none bg-transparent focus:ring-0"
                                />
                                <label htmlFor="message" className="text-gray-800 font-bold">Message</label>
                                <input
                                    type="text"
                                    id="message"
                                    className="mb-8 border-b-2 border-black focus:outline-none bg-transparent focus:ring-0"
                                />
                                <button
                                    onClick={handleContactClick}
                                    className="bg-gray-800 text-white rounded-full py-2 px-4 hover:scale-105 transition-transform duration-300">
                                    Contact
                                </button>
                            </div>
                            <div className="flex flex-col px-10 ">
                                <h2 className="text-xl font-bold text-gray-800 pt-6 pb-2">Contact Information</h2>
                                <p>801-833-1606</p>
                                <p>hunterknott00@gmail.com</p>
                                <h2 className="text-xl font-bold text-gray-800 pt-6 pb-2">Based in</h2>
                                <p>Provo, Utah</p>
                                <div className="flex flex-row gap-6 pt-8">
                                    <LinkButton srcPath="HomeImages/icons8-linkedin.svg" altText="LinkedIn" url="https://www.linkedin.com/in/hunter-knott"/>
                                    <LinkButton srcPath="HomeImages/icons8-instagram-50.png" altText="Instagram" url="https://www.instagram.com/hunter_p_knott?igsh=MXcwOXJmdzZvY3E5&utm_source=qr" position="w-11 h-11"/>
                                    <LinkButton srcPath="HomeImages/icons8-facebook-50.png" altText="Facebook" url="https://www.facebook.com/profile.php?id=100008543940396"/>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}