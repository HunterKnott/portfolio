import Head from "../Head";
import Card from "../Card";
import Skill from "../Skill";

export default function Page() {
    return (
        <div className="relative">
            {/* <Background /> */}
            <main className="flex flex-col min-h-screen items-center relative z-10">
                <Head options={["App", "Education", "About", "Contact"]}/>
                <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full min-h-screen flex flex-col items-center">
                    <h1 className="text-5xl font-bold underline text-gray-800 pb-8">My Work Experience</h1>
                    <div className="flex flex-col items-center gap-10">
                        <Card
                            title="Sandbox"
                            timeline="May 2024 - Current"
                            text="Building a tech startup with co-founders. We're working on a product called Octosh, where Customer Success teams can leverage AI to write emails faster."
                            links={[{ url: "https://www.octosh.com/", text: "Octosh" }, { url: "https://sandbox.ing/", text: "Sandbox" }]}
                            image="ProjectImages/SandboxGroup.jpeg"
                            icons={["ProjectIcons/NodeJS.png", "ProjectIcons/AWS.svg", "ProjectIcons/Python.svg", "ProjectIcons/Postgres.svg"]}
                        />
                        <Card
                            title="Flex Ltd."
                            timeline="May 2024 - Aug. 2024"
                            text="Spent the summer as a test engineering intern. Worked with big data tools to increase efficiency in the production of cutting edge server technology."
                            links={[{ url: "https://flex.com/", text: "Website" }]}
                            image="ProjectImages/FlexPicture.png"
                            icons={["ProjectIcons/Linux.png", "ProjectIcons/ElasticSearch.svg", "ProjectIcons/Python.svg", "ProjectIcons/Kotlin.svg"]}
                        />
                        <Card
                            title="ION Solar"
                            timeline="Apr. 2022 - Oct. 2023"
                            text="Worked with the Design Validation team to develop and test Salesforce CRM features to automate loan audits and change order processing."
                            links={[{ url: "https://www.ionsolar.com/", text: "Website" }]}
                            image="ProjectImages/IonPicture.jpeg"
                            icons={["ProjectIcons/IonSolar.png", "ProjectIcons/Salesforce.svg", "ProjectIcons/Trello.svg"]}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}