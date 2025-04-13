import Head from "../Head";
import Card from "../Card";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Work", "Education", "Contact"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full min-h-screen">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-5xl font-bold underline text-gray-800">About Me</h1>
                    <Card
                        title="The Knott Family"
                        text="I have a wonderful family. I'm the youngest of 3 brothers, and an uncle of 1 niece."
                        image="ProjectImages/SelfFamily.jpeg"
                        icons={["ProjectIcons/USA.png", "ProjectIcons/Utah.png"]}
                    />
                    <Card
                        title="My Mission"
                        text="I've served a proselyting mission for the Church of Jesus Christ of Latter-Day Saints in Peru and California."
                        links={[{ url: "https://www.churchofjesuschrist.org/comeuntochrist/lp/homepage-1", text: "Website" }]}
                        image="ProjectImages/SelfMission.jpeg"
                        icons={["ProjectIcons/Peru.png"]}
                    />
                    <Card
                        title="My Friends and I"
                        text="My friends and I love taking pictures together, every now and then I put them in ChatGPT."
                        image="ProjectImages/GhibliCruise.png"
                        icons={["ProjectIcons/LGBTQ.png"]}
                    />
                    <Card
                        title="Music and Podcasts"
                        text="I listen to a lot of music, everything from folk and indie, to pop and country. I also listen to lots of news and tech podcasts."
                        links={[
                            { url: "https://open.spotify.com/playlist/62jY4wQmS6Wwp5ogTfbCtW?si=9ee8ccb9d3034a87", text: "Red Playlist" },
                            { url: "https://open.spotify.com/playlist/64fPooHmgFDzHjpTxMEz3X?si=6f017c2c88094d93", text: "Blue Playlist" }
                        ]}
                        image="ProjectImages/SpotifySongs.jpeg"
                        icons={["ProjectIcons/Spotify.svg"]}
                    />
                    <Card
                        title="Dungeons & Dragons"
                        text="Playing D&D with friends is one of my favorite pastimes. This is my current character, a monk named Pachamancha of Hanantambo."
                        image="ProjectImages/DnDCharacter.jpeg"
                        icons={["ProjectIcons/D20.png"]}
                    />
                </div>
            </div>
        </main>
    )
}