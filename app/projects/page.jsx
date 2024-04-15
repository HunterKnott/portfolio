import Head from "../Head";
import Card from "../Card";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Work", "About", "Contact"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full min-h-screen">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-5xl font-bold underline text-gray-800">My Projects</h1>
                    <Card
                        title="Fantasy Foyer"
                        text="An escape room game written at a hackathon, deployed on Vercel. Escape if you can!"
                        links={[{ url: "https://github.com/HunterKnott/escape-room", text: "GitHub" },
                                { url: "https://escape-room-hunter-knotts-projects.vercel.app/", text: "Deployment" }
                            ]}
                        image="ProjectImages/EscapeRoom.png"
                        icons={["ProjectIcons/React.png", "ProjectIcons/NextJS.svg"]}
                    />
                    <Card
                        title="Picture Presser"
                        text="A photo compressor using a lossy Fourier Transform algorithm. Implemented in both Python and Matlab."
                        links={[{ url: "https://github.com/HunterKnott/CS3270/tree/main/Photo_Compressor", text: "GitHub" }]}
                        image="ProjectImages/ImageCompression.png"
                        icons={["ProjectIcons/Python.svg", "ProjectIcons/Matlab.svg"]}
                    />
                    <Card
                        title="Personal Website"
                        text="A website hosted with AWS EC2, platformed with Wordpress, and published via the Route 53 DNS. Website isn't currently online to avoid maintenance charges."
                        links={[{ url: "/ProjectImages/AWSWebsiteDocumentation.pdf", text: "Documentation"}]}
                        image="ProjectImages/Paintings.png"
                        icons={["ProjectIcons/AWS.svg", "ProjectIcons/Wordpress.svg"]}
                    />
                    <Card
                        title="Cafe Connection"
                        text="A database created to hold information for a cafe business. Written by 3 partners and I in a database class."
                        links={[{ url: "https://github.com/simonalligatorsmith/cafesql", text: "GitHub"}]}
                        image="ProjectImages/DatabaseDiagram.png"
                        icons={["ProjectIcons/MySQL.svg"]}
                    />
                    <Card
                        title="Gravity Grid"
                        text="A 2-D game written in Java where blocks have different physical behaviors. Kind of like Minecraft!"
                        links={[{ url: "https://github.com/HunterKnott/sandGame", text: "GitHub"}]}
                        image="ProjectImages/BlockGame.png"
                        icons={["ProjectIcons/Java.svg"]}
                    />
                    <Card
                        title="Subword Surfer"
                        text="A game where a random word is picked from a list, and the user must write every word that the picked word can make."
                        links={[{ url: "https://github.com/HunterKnott/CPPWordGame", text: "GitHub"}]}
                        image="ProjectImages/WordGame.png"
                        icons={["ProjectIcons/Cpp.svg"]}
                    />
                </div>
            </div>
        </main>
    )
}