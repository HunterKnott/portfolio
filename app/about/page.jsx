import Head from "../Head";
import Card from "../Card";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Work", "Projects", "Contact"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full min-h-screen">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-5xl font-bold underline text-gray-800">About Me</h1>
                    <Card
                        title="The Knott Family"
                        text="I have a wonderful family. I'm the youngest of 3 brothers, and an uncle of 1 niece."
                        image="ProjectImages/SelfFamily.jpeg"
                    />
                    <Card
                        title="My Mission"
                        text="I've served a proselyting mission for the Church of Jesus Christ of Latter-Day Saints in Peru and California."
                        links={[{ url: "https://www.churchofjesuschrist.org/comeuntochrist/lp/homepage-1", text: "Website" }]}
                        image="ProjectImages/SelfMission.jpeg"
                    />
                    <Card
                        title="My Friends"
                        text="I love going on hiking trips with friends."
                        image="ProjectImages/SelfHiking.jpeg"
                    />
                    <Card
                        title="Painting"
                        text="I really enjoy painting when I have some extra time. Here's one I did recently."
                        image="ProjectImages/MoonPainting.jpeg"
                    />
                    <Card
                        title="Music"
                        text="I listen to lots of music at any spare moment I have. I especially enjoy folk and indie songs."
                        image="ProjectImages/SpotifySongs.jpeg"
                    />
                    <Card
                        title="Dungeons & Dragons"
                        text="Playing D&D with friends is one of my favorite pastimes. This is my current character, a monk named Pachamancha of Hanantambo."
                        image="ProjectImages/DnDCharacter.jpeg"
                    />
                </div>
            </div>
        </main>
    )
}