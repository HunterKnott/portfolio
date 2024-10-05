import Head from "../Head";
import Card from "../Card";
import Skill from "../Skill";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Work", "About", "Contact"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full min-h-screen flex flex-col items-center">
                <h1 className="text-5xl font-bold underline text-gray-800 pb-8">My Education</h1>
                <div className="flex flex-col items-center gap-10 w-full mb-16">
                    <h2 className="text-4xl font-bold underline text-gray-800">Skills</h2>
                    <ul className="w-1/2 flex flex-col gap-10 py-6">
                        <li><Skill
                            text="DevOps"
                            icon="ProjectIcons/DevOps.png"
                            color="red"
                            experience={[{ type: "IDEs", icons: [{ path: "ProjectIcons/Eclipse.svg", text: "Eclipse was my first ever IDE all the way back in high school. I learned Java and object-oriented programming on it." },
                                                                { path: "ProjectIcons/Jupyter.png", text: "Jupyter has been very helpful for doing scientific computing with machine learning." },
                                                                { path: "ProjectIcons/VSCode.svg", text: "VSCode is where I keep most of my codebase and projects, it's very versatile." }] },
                                        { type: "Agile", icons: [{ path: "ProjectIcons/Jira.svg", text: "I use Jira at my current internship for project management and organization." },
                                                                { path: "ProjectIcons/Trello.svg", text: "While working at Ion Solar, our team used Trello as a reference for all important company and process information." },
                                                                { path: "ProjectIcons/Linear.webp", text: "I've recently been trying out a new project management system called Linear to see how it compares to Atlassian products." }] },
                                        { type: "Tools", icons: [{ path: "ProjectIcons/Linux.png", text: "I'm using Linux at my current internship for scripting and system administration." },
                                                                { path: "ProjectIcons/Git.svg", text: "I've used GitHub ever since high school to keep track of my achievements in software development." },
                                                                { path: "ProjectIcons/AWS.svg", text: "I have a basic knowledge of navigating the AWS dashboard, as well as building and deploying a basic website." },
                                                                { path: "ProjectIcons/Docker.png", text: "I've used Docker images while interfacing with most of the databases I've used." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Coding"
                            icon="ProjectIcons/Binary.png"
                            color="blue"
                            experience={[{ type: "Languages", icons: [{ path: "ProjectIcons/Java.svg", text: "Java was the first programming language I learned, way back in high school. It brings back nostalgia to write with it." },
                                                                    { path: "ProjectIcons/Kotlin.svg", text: "At my current internship, I've had the opportunity to develop an Android app with a team in Kotlin to make server testing data more easily accessible." },
                                                                    { path: "ProjectIcons/Python.svg", text: "I also used a lot of Python at my internship for data engineering and machine learning." },
                                                                    { path: "ProjectIcons/CSharp.svg", text: "Picking up C# has been pretty simple with my previous base in Java. I've used it to make some games with the Unity engine." },
                                                                    { path: "ProjectIcons/Cpp.svg", text: "I'm currently keeping up on my C++ to prepare for an upcoming Operating Systems class I'll be taking." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Front-End Development"
                            icon="ProjectIcons/Frontend.png"
                            color="yellow"
                            experience={[{ type: "Basics", icons: [{ path: "ProjectIcons/HTML.svg", text: "HTML is pretty simple and straightforward. I learned the basics of HTML5 my first semester of college, and I loved the class." },
                                                                    { path: "ProjectIcons/CSS.svg", text: "It's fun to work with CSS and see the visual changes in a website's many moving parts." },
                                                                    { path: "ProjectIcons/Javascript.svg", text: "Javascript is one of my most confident languages. It's wonderful to see a website come to life with interactivity and dynamic features." },
                                                                    { path: "ProjectIcons/Typescript.png", text: "My first Typescript project was doing a full transplant from a Javascript website. It felt like performing surgery." }] },
                                        { type: "Tools", icons: [{ path: "ProjectIcons/NodeJS.png", text: "Javascript makes a great backend for a web application when you can use Next.js." },
                                                                { path: "ProjectIcons/Figma.svg", text: "Designing a website UI is so much better with Figma to do much of the heavy lifting." }] },
                                        { type: "Frameworks", icons: [ { path: "ProjectIcons/Bootstrap.png", text: "Bootstrap is very helpful for getting quick and easy components with good CSS." },
                                                                        { path: "ProjectIcons/Tailwind.svg", text: "I never really had a good grasp of CSS and how powerful it is until I started using Tailwind." },
                                                                        { path: "ProjectIcons/React.png", text: "Writing components in React is one of the funnest parts of building a website. The concepts behind it are brillient and intuitive." },
                                                                        { path: "ProjectIcons/NextJS.svg", text: "I always reach for Next.js and Vercel deployment when I make a new web application." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Back-End Development"
                            icon="ProjectIcons/Database.png"
                            color="green"
                            experience={[{ type: "Python", icons: [{ path: "ProjectIcons/DJango.svg", text: "I've used DJango to assist in various backend API endpoints." },
                                                                    { path: "ProjectIcons/Flask.png", text: "I've also developed APIs with the Flask framework." },] },
                                        { type: "BaaS", icons: [{ path: "ProjectIcons/Firebase.svg", text: "I'm familiar with Google's backend services on Firebase." },
                                                                { path: "ProjectIcons/Supabase.png", text: "I've used Supabase's backend seervices for several full-stack projects." },] },
                                        { type: "Databases", icons: [{ path: "ProjectIcons/MySQL.svg", text: "MySQL was the first database system I learned. It's a good foundation to get started." },
                                                                    { path: "ProjectIcons/SQLite.png", text: "Interfacing with a SQL database via SQLite is clean and simple. Very helpful for backend development." },
                                                                    { path: "ProjectIcons/Postgres.svg", text: "I've used PostgreSQL databases in several web applications, thanks to its integration with Supabase's backend services." },
                                                                    { path: "ProjectIcons/ElasticSearch.svg", text: "I'm using ElasticSearch at my current internship for data analytics." },
                                                                    { path: "ProjectIcons/MongoDB.svg", text: "Writing transactions in MongoDB is intuitive for a software developer. I love the idea of unstructured data in the form of things like documents." },
                                                                    { path: "ProjectIcons/Redis.svg", text: "Caching through tools like Redis is becoming ever more important as the web gets even faster, and as our web expectations become more impatient." },
                                                                    { path: "ProjectIcons/Cassandra.png", text: "While I've worked with small amounts of data on Cassandra, I'm interested to eventually see the columner's true potential with big data." },
                                                                    { path: "ProjectIcons/Neo4J.png", text: "Graph databases like Neo4J are a fascinating concept, especially the potential they have to contribute to machine learning." },
                                                                    { path: "ProjectIcons/Hadoop.svg", text: "As the data we gather becomes bigger and more varied, data lake solutions like Hadoop can play a bigger role." },] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Data Science"
                            icon="ProjectIcons/DeepLearning.png"
                            color="purple"
                            experience={[{ type: "Python", icons: [{ path: "ProjectIcons/NumPy.svg", text: "NumPy is helpful for all sorts of math operations. It's been especially helpful in performing linear algrabra for making machine learning models." },
                                                                { path: "ProjectIcons/Pandas.svg", text: "I'm currently using Pandas at my internship for handling and processing the test data we work with." },
                                                                { path: "ProjectIcons/TensorFlow.png", text: "Python's TensorFlow library helps make machine learning simpler and more user friendly." }] },
                                        { type: "Tools", icons: [{ path: "ProjectIcons/R.svg", text: "The statistics classes I've taken relied heavily on R for computation and graph generation." },
                                                                { path: "ProjectIcons/Matlab.svg", text: "As part of my studies in Numerical Analysis and Machine Learning, I've used Matlab to write and implement various data-handling algorithms." }] },
                                        { type: "Topics", icons: [{ path: "ProjectIcons/Calculus.png", text: "I took all my calculus classes as a university student. Multivariable calculus was fascinating, especially how it related to the physical world." },
                                                                { path: "ProjectIcons/LinearAlgebra.png", text: "Linear Algebra has come up more and more as I've delved deeper into machine learning. It's the math of the future." },
                                                                { path: "ProjectIcons/Statistics.png", text: "Statistics is simply human intuition put down in math and writing. It's very important for probability and decision-making processes." },
                                                                { path: "ProjectIcons/NumericalAnalysis.webp", text: "Some calculations are too difficult and long to do by hand. It's interesting to learn how computers perform their calculations via Numerical Analysis." },
                                                                { path: "ProjectIcons/MachineLearning.png", text: "All my education in Data Science seems to point towards Machine Learning and its vast potential in the future. As Artificial Intelligence becomes more prevalent, understanding it will be a great asset." },] }
                                    ]}
                        /></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold underline text-gray-800">Projects</h2>
                    <ul className="w-full flex flex-col gap-10 py-6 items-center">
                        <Card
                            title="Floppy Fish Fiasco"
                            text="An obstacle course game developed at a hackathon. Fish characters jump across the screen to reach the water at the end."
                            links={[{ url: "https://www.youtube.com/watch?v=VTnqUQyWp9s", text: "Video" }]}
                            image="ProjectImages/FloppyFish.png"
                            icons={["ProjectIcons/Unity.webp", "ProjectIcons/CSharp.svg"]}
                        />
                        <Card
                            title="Fantasy Foyer"
                            text="An escape room game written at a hackathon, deployed on Vercel. Escape if you can!"
                            links={[{ url: "https://github.com/HunterKnott/escape-room", text: "GitHub" },
                                    // { url: "https://escape-room-hunter-knotts-projects.vercel.app/", text: "Deployment" }
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
                    </ul>
                </div>
            </div>
        </main>
    )
}