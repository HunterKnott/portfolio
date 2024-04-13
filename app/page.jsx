import Head from './Head';
import LinkButton from './LinkButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
        <Head options={["Work", "Projects", "About", "Contact"]}/>
        <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full h-screen">
          <div className="flex flex-row">
            <div className="container w-5/12 ml-20">
                <img src="/Self1.png" alt="Portrait" className="mx-auto mt-8 mb-8 rounded-lg shadow-lg w-96 h-96" />
            </div>
            <div className="container flex flex-col gap-4 w-5/12 pr-28 py-12">
                <h1 className="text-4xl font-bold text-gray-800">Hi there, nice to meet you</h1>
                <h1 className="text-4xl font-bold text-gray-800">I'm Hunter Knott</h1>
                <h1 className="text-4xl font-bold text-gray-800">Computer Science Major</h1>
                <h1 className="text-4xl font-bold text-gray-800">Software Developer</h1>
                <p className="text-lg text-gray-600 mt-10">I build software solutions, gather data insights, engage in lifelong learning, and love doing it</p>
            </div>
            <div className="container flex flex-col gap-6 w-2/12 py-4">
                <img src="/icons8-lightbulb.svg" alt="Lightbulb" className="w-20 h-20" />
                <img src="/icons8-strong-96.png" alt="Strong" className="w-20 h-20" />
                <img src="/icons8-gears-96.png" alt="Gears" className="w-20 h-20" />
                <img src="/icons8-mountain-96.png" alt="Mountain" className="w-20 h-20" />
            </div>
          </div>
          <div className="flex flex-row gap-8 justify-center mt-4">
            <LinkButton srcPath="icons8-linkedin.svg" altText="LinkedIn" url="https://www.linkedin.com/in/hunter-knott"/>
            <LinkButton srcPath="icons8-github-60.png" altText="GitHub"m url="https://github.com/HunterKnott" position="w-14 h-14"/>
            <LinkButton srcPath="icons8-paper-airplane-50.png" altText="Email" url="mailto:hunterknott00@gmail.com" position="w-10 h-10 pr-1"/>
            <LinkButton srcPath="icons8-instagram-50.png" altText="Instagram" url="https://www.instagram.com/hunter_p_knott?igsh=MXcwOXJmdzZvY3E5&utm_source=qr" position="w-11 h-11"/>
            <LinkButton srcPath="icons8-facebook-50.png" altText="Facebook" url="https://www.facebook.com/profile.php?id=100008543940396"/>
          </div>
        </div>
    </main>
  )
}
