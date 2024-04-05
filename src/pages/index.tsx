import NavBar from "@/components/NavBar";
import { GiWoodBeam } from "react-icons/gi";
import { Questrial } from "next/font/google";
import ContactSideBar from "@/components/ContactSideBar";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

function App() {
  return (
    <main>
      {/* Introduction */}
      <div className="relative flex flex-row items-center w-full min-w-full bg-cream h-[100vh] content-between">
        <div className="flex flex-col lg:w-1/2 text-shadow lg:text-shadow-sm">
          {/* <img className="relative w-3/5 self-center" src="/images/logoweb.png" /> */}
          <div className="z-10 relative inline-flex mt-10 ml-10 text-5xl">
            <GiWoodBeam className="hidden lg:flex text-amber-600 h-24 w-24 animate-bounce" />
            <p className="ml-10 text-white">
              Spark Your Dream On
              <span className="text-amber-600 font-bold"> Wood</span> Carving.
            </p>
          </div>
          <button className="z-10 mt-10 self-center text-2xl gradient_transition from-meadow-300 from-20% to-amber-600 to-60% w-48 h-16 rounded-xl text-white transition-all duration-1000 hover:bg-right">
            <Link className="w-full h-full flex items-center justify-center" href="/workshop/booking">Book Now !</Link>
          </button>
        </div>
        <div>
          <video
            className=" z-0 top-0 right-0 w-full h-full absolute object-cover mt-10 lg:h-[80vh] lg:w-2/6 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:right-14 lg:border-8 border-cyan-400"
            autoPlay
            loop
            muted
          >
            <source src="/videos/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hidden lg:flex absolute bottom-0 left-0">
          <GoDotFill className="absolute h-48 w-48 bottom-0 -translate-y-36 translate-x-24 text-cyan-300" />
          <GoDotFill className="absolute h-48 w-48 bottom-0 -translate-y-6 translate-x-64 text-cyan-300" />
          <GoDotFill className="absolute h-96 w-96 bottom-0 translate-y-48 text-cyan-300" />
        </div>
      </div>
      
      {/* Link */}
      <div className="relative grid grid-cols-1 w-full max-h-full h-[80vh] bg-amber-300">
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
        <div
          className="bg-[url('/images/Image_preview1.jpg')] bg-no-repeat bg-cover bg-center bg-fixed w-full h-[40vh]"
        />
        <div
          className="bg-[url('/images/Image_preview2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed object-cover w-full h-[40vh]"
        />
      </div>

      {/* Target */}
      <div className="relative flex flex-row justify-around items-center w-full bg-meadow-300 h-[35vh] ">
        <div className="inline-flex justify-center w-screen h-screen max-w-full max-h-full bg-meadow-400">
          <p className="text-lg lg:text-4xl self-center text-white font-semibold p-12">Learning Art By Doing !</p>
        </div>
        <div className="flex flex-col p-12">
          <p className="text-sm lg:text-xl text-white">
            &quot;We are artists that have done a lot of wood sculpting project
            and many of experience.&quot;
            
          </p>
          <span className="text-white text-end text-xl font-semibold">- Poom</span>
        </div>
      </div>
      <div className="relative flex flex-row justify-around items-center w-full bg-meadow-300 h-[35vh]">
        <div className="flex flex-col p-12">
          <p className="text-sm lg:text-xl text-white">
            &quot;Wood Carving is true way to enlightenment.&quot;
            
          </p>
          <span className="text-white text-end text-xl font-semibold">- Phupha</span>
        </div>
        <div className="inline-flex justify-center w-screen h-screen max-w-full max-h-full bg-orange-200">
          <p className="text-lg lg:text-4xl self-center font-semibold p-12">Fun is matter !</p>
        </div>
      </div>

      
    </main>
  );
}

export default App;
