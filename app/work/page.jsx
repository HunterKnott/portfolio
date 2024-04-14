import Head from "../Head";
import Card from "../Card";
import Skill from "./Skill";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Projects", "About", "Contact"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full min-h-screen">
                <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold underline text-gray-800">My Skills</h1>
                    <ul className="w-3/4">
                        <li><Skill text="DevOps" icon="ProjectIcons/icons8-sprint-iteration-50.png" color="red" /></li>
                        <li><h2>Coding</h2></li>
                        <li><h2>Front-End Development</h2></li>
                        <li><h2>Back-End Development</h2></li>
                        <li><h2>Data Science</h2></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <Card
                        title="ION Solar"
                        text="Worked with the Design Validation team to develop and test Salesforce CRM features to automate loan audits and change order processing."
                        links={[{ url: "https://www.ionsolar.com/", text: "Website" }]}
                        image="ProjectImages/IonPicture.jpeg"
                        icons={["ProjectIcons/ion-solar-icon.png", "ProjectIcons/icons8-salesforce.svg"]}
                    />
                </div>
            </div>
        </main>
    )
}