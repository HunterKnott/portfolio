import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
        <header className="bg-gray-100 w-full shadow-md">
          <div className="container mx-auto flex items-center justify-between px-24 py-4">
              <h1 className="text-3xl font-bold text-gray-800">Hunter Knott</h1>
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-800 transition-colors duration-180 hover:text-pink-500">Work</a>
                <a href="#" className="text-gray-800 transition-colors duration-180 hover:text-pink-500">Projects</a>
                <a href="#" className="text-gray-800 transition-colors duration-180 hover:text-pink-500">About</a>
                <a href="#" className="text-gray-800 transition-colors duration-180 hover:text-pink-500">Contact</a>
              </nav>
          </div>
        </header>
        <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-20 w-full h-screen">
          <div className="flex flex-row">
            <div className="container w-5/12 ml-20">
                <img src="/Self1.png" alt="Portrait" className="mx-auto mt-8 mb-8 rounded-lg shadow-lg w-96 h-96" />
            </div>
            <div className="container flex flex-col gap-4 w-5/12 pr-28 py-12">
                <h1 className="text-4xl font-bold text-gray-800">Hi there, nice to meet you</h1>
                <h1 className="text-4xl font-bold text-gray-800">I'm Hunter Knott</h1>
                <h1 className="text-4xl font-bold text-gray-800">Computer Science Major</h1>
                <h1 className="text-4xl font-bold text-gray-800">Software Developer</h1>
                <h1></h1>
                <p className="text-lg text-gray-600">I build software solutions, gather data insights, engage in lifelong learning, and love doing it</p>
            </div>
            <div className="container flex flex-col gap-6 w-2/12 py-4">
                <img src="/icons8-lightbulb.svg" alt="Lightbulb" className="w-20 h-20" />
                <img src="/icons8-strong-96.png" alt="Strong" className="w-20 h-20" />
                <img src="/icons8-gears-96.png" alt="Gears" className="w-20 h-20" />
                <img src="/icons8-mountain-96.png" alt="Mountain" className="w-20 h-20" />
            </div>
          </div>
          <div className="flex flex-row gap-8 justify-center mt-4">
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center transform transition-transform hover:bg-gradient-to-r from-pink-700 to-pink-500 duration-1000">
                <img src="icons8-linkedin.svg" alt="LinkedIn" />
              </button>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center transform transition-transform hover:bg-gradient-to-r from-pink-700 to-pink-500 duration-1000">
                <img src="icons8-github-60.png" alt="GitHub" className="w-14 h-14" />
              </button>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center transform transition-transform hover:bg-gradient-to-r from-pink-700 to-pink-500 duration-1000">
                  <img src="icons8-paper-airplane-50.png" alt="Email" className="w-10 h-10 pr-1" />
              </button>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center transform transition-transform hover:bg-gradient-to-r from-pink-700 to-pink-500 duration-1000">
                <img src="icons8-instagram-50.png" alt="Instagram" className="w-11 h-11" />
              </button>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <button className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center transform transition-transform hover:bg-gradient-to-r from-pink-700 to-pink-500 duration-1000">
                <img src="icons8-facebook-50.png" alt="Facebook" />
              </button>
            </div>
          </div>
        </div>
    </main>
  )
}
