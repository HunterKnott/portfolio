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
                            text="General Programming"
                            icon="ProjectIcons/Binary.png"
                            color="red"
                            experience={[{ icons: [{ path: "ProjectIcons/Java.svg", text: "Java was the first programming language I learned in depth, way back in high school." },
                                                                    { path: "ProjectIcons/Python.svg", text: "I also used a lot of Python at my internship for data engineering and machine learning." },
                                                                    { path: "ProjectIcons/NodeJS.png", text: "Javascript is my most used language as of today. It's useful for frontend and backend." },
                                                                    { path: "ProjectIcons/C.png", text: "I learned C in an Operating Systems class I took. It was a surprisingly simple class that brought together much of what I had learned previously." },
                                                                    { path: "ProjectIcons/Cpp.svg", text: "C++ was my first ever exposure to any programming back in high school. Kind of funny they had us use that of all languages." },
                                                                    { path: "ProjectIcons/CSharp.svg", text: "Picking up C# has been pretty simple with my previous base in Java. I've used it to make some games with the Unity engine." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Modern DevOps"
                            icon="ProjectIcons/DevOps.png"
                            color="orange"
                            experience={[{ icons: [{ path: "ProjectIcons/Linux.png", text: "I used Linux at my previous internship for scripting and automation." },
                                                                    { path: "ProjectIcons/Docker.png", text: "I've used Docker images while interfacing with most of the databases I've used." },
                                                                    { path: "ProjectIcons/AWS.svg", text: "I've used AWS while building a website, also while setting up the backend for several applications." },
                                                                    { path: "ProjectIcons/Terraform.svg", text: "Building infrastructure on AWS is much more simple when using Terraform to code it out." },
                                                                    { path: "ProjectIcons/GoogleCloud.svg", text: "I've used several of the APIs on Google Cloud in apps, such as the Maps API and Speech-to-Text API." },
                                                                    { path: "ProjectIcons/Git.svg", text: "I've used GitHub ever since high school to keep track of my achievements in software development." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Frontend Development"
                            icon="ProjectIcons/Frontend.png"
                            color="yellow"
                            experience={[{ icons: [{ path: "ProjectIcons/HTML.svg", text: "HTML is pretty simple and straightforward. I learned the basics of HTML5 my first semester of college, and I loved the class." },
                                                                    { path: "ProjectIcons/CSS.svg", text: "It's fun to work with CSS and see the visual changes in a website's many moving parts." },
                                                                    { path: "ProjectIcons/Tailwind.svg", text: "I never really had a good grasp of CSS and how powerful it is until I started using Tailwind." },
                                                                    { path: "ProjectIcons/Javascript.svg", text: "Javascript/TypeScript is one of my most confident languages. It's wonderful to see a website come to life with interactivity and dynamic features." },
                                                                    { path: "ProjectIcons/React.png", text: "Writing components in React is one of the funnest parts of building a website. The concepts behind it are brillient and intuitive." },
                                                                    { path: "ProjectIcons/NextJS.svg", text: "I always reach for Next.js and Vercel deployment when I make a new web application." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Backend Development"
                            icon="ProjectIcons/Database.png"
                            color="green"
                            experience={[{ icons: [{ path: "ProjectIcons/Flask.svg", text: "I developed Flask APIs as part of an app at my previous internship." },
                                                                    { path: "ProjectIcons/ExpressJS.svg", text: "I've used Express.js with any Node.js app I've made that needed custom APIs and a robust backend." },
                                                                    { path: "ProjectIcons/AWSLambda.svg", text: "I'm using AWS Lambda as the backend for some of the current applications I'm doing right now." },
                                                                    { path: "ProjectIcons/Supabase.png", text: "I've used Supabase's backend seervices for several full-stack projects." },
                                                                    { path: "ProjectIcons/MySQL.svg", text: "MySQL was the first database system I learned. It's a good foundation to get started." },
                                                                    { path: "ProjectIcons/Postgres.svg", text: "I've used PostgreSQL databases in several web applications, thanks to its integration with Supabase's backend services." },
                                                                    { path: "ProjectIcons/Stripe.svg", text: "The current apps I'm working on also have a Stripe integration for when we start collecting payment for the service." }] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Data Science"
                            icon="ProjectIcons/DeepLearning.png"
                            color="blue"
                            experience={[{ icons: [{ path: "ProjectIcons/Pandas.svg", text: "I used Pandas at a summer internship for handling and processing the test data we worked with." },
                                                                { path: "ProjectIcons/Keras.svg", text: "I'm currently learning the Keras framework in my Deep Learning class for this last semester of school." },
                                                                { path: "ProjectIcons/TensorFlow.png", text: "I'm also learning TensorFlow in the same course." },
                                                                { path: "ProjectIcons/Tableau.svg", text: "I'm also taking a data analytics class that uses Tableau for various projects." },
                                                                { path: "ProjectIcons/R.svg", text: "The statistics classes I've taken relied heavily on R for computation and graph generation." },
                                                                { path: "ProjectIcons/Matlab.svg", text: "As part of my studies in Numerical Analysis and Machine Learning, I've used Matlab to write and implement various data-handling algorithms." },
                                                                { path: "ProjectIcons/Calculus.png", text: "I took all my calculus classes as a university student. Multivariable calculus was fascinating, especially how it related to the physical world." },
                                                                { path: "ProjectIcons/LinearAlgebra.png", text: "Linear Algebra has come up more and more as I've delved deeper into machine learning. It's the math of the future." },
                                                                { path: "ProjectIcons/Statistics.png", text: "Statistics is simply human intuition put down in math and writing. It's very important for probability and decision-making processes." },
                                                                { path: "ProjectIcons/NumericalAnalysis.webp", text: "Some calculations are too difficult and long to do by hand. It's interesting to learn how computers perform their calculations via Numerical Analysis." },
                                                                { path: "ProjectIcons/MachineLearning.png", text: "All my education in Data Science seems to point towards Machine Learning and its vast potential in the future. As Artificial Intelligence becomes more prevalent, understanding it will be a great asset." },] }
                                    ]}
                        /></li>
                        <li><Skill
                            text="Other"
                            icon="ProjectIcons/Telescope.png"
                            color="purple"
                            experience={[{ icons: [{ path: "ProjectIcons/RaspberryPi.svg", text: "I've used a Raspberry Pi to write Assembly for a class. I've got one right now I'm wanting to run an AI model on." },
                                                                { path: "ProjectIcons/Arduino.svg", text: "I've used an Arduino as part of a physics class I took. Maybe I'll get another one some day when I have a basement to play around with electricity in." },
                                                                { path: "ProjectIcons/Unity.webp", text: "I've used Unity to make a game during a 24-hour hackathon. That was the most stressful 24 hours of my life." },
                                                                { path: "ProjectIcons/Chrome.svg", text: "As part of one of the businesses I'm building, I'm making a Google Chrome extension that people can download and use with their Gmail accounts." },
                                                                { path: "ProjectIcons/React.png", text: "I'm currently building a mobile app with React Native for my other business idea." },
                                                                { path: "ProjectIcons/Expo.svg", text: "The Expo framework makes development in React Native so much easier." }] }
                                    ]}
                        /></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold underline text-gray-800">Projects</h2>
                    <ul className="w-full flex flex-col gap-10 py-6 items-center">
                        <Card
                            title="Lambda Learning"
                            text="A mobile app that school districts can use to administer standardized communications tests to students in special education."
                            links={[{ url: "https://will-app-website.vercel.app/", text: "Lambda Learning" },
                                ]}
                            image="ProjectImages/LambdaLearning.png"
                            icons={["ProjectIcons/React.png", "ProjectIcons/Expo.svg", "ProjectIcons/GoogleCloud.svg"]}
                        />
                        <Card
                            title="ClrDoc"
                            text="An e-commerce platform where optometrists can list and sell their glasses online."
                            links={[{ url: "https://clrdoc.com", text: "ClrDoc" },
                                ]}
                            image="ProjectImages/ClrDocListing.png"
                            icons={["ProjectIcons/React.png", "ProjectIcons/NextJS.svg", "ProjectIcons/Postgres.svg"]}
                        />
                        <Card
                            title="Floppy Fish Fiasco"
                            text="An obstacle course game developed at a hackathon. Fish characters jump across the screen to reach the water at the end."
                            links={[{ url: "https://www.youtube.com/watch?v=VTnqUQyWp9s", text: "Video" }]}
                            image="ProjectImages/FloppyFish.png"
                            icons={["ProjectIcons/Unity.webp", "ProjectIcons/CSharp.svg"]}
                        />
                        <Card
                            title="Picture Presser"
                            text="A photo compressor using a lossy Fourier Transform algorithm. Implemented in both Python and Matlab."
                            links={[{ url: "https://github.com/HunterKnott/CS3270/tree/main/Photo_Compressor", text: "GitHub" }]}
                            image="ProjectImages/ImageCompression.png"
                            icons={["ProjectIcons/Python.svg", "ProjectIcons/Matlab.svg"]}
                        />
                        <Card
                            title="Gravity Grid"
                            text="A 2-D game written in Java where blocks have different physical behaviors. Kind of like Minecraft!"
                            links={[{ url: "https://github.com/HunterKnott/sandGame", text: "GitHub"}]}
                            image="ProjectImages/BlockGame.png"
                            icons={["ProjectIcons/Java.svg"]}
                        />
                    </ul>
                </div>
            </div>
        </main>
    )
}