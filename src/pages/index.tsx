import NavBar from "@/components/NavBar";
import { GiWoodBeam } from "react-icons/gi";
import { Questrial } from "next/font/google";
import ContactSideBar from "@/components/ContactSideBar";
import { GoDotFill } from "react-icons/go";

function App() {
  return (
    <main>

      {/* Introduction */}
      <div className="relative flex flex-row items-center w-full bg-cream h-[100vh] content-between">
        <div className="flex flex-col lg:w-1/2 text-shadow lg:text-shadow-sm">
          {/* <img className="relative w-3/5 self-center" src="/images/logoweb.png" /> */}
          <div className="z-10 relative inline-flex mt-10 ml-10 text-5xl">
            <GiWoodBeam className= "hidden lg:flex text-amber-600 h-24 w-24 animate-bounce" />
            <p className="ml-10 text-white">
              Spark Your Dream On
              <span className="text-amber-600 font-bold"> Wood</span> Carving
            </p>
          </div>
          <button className="z-10 mt-10 self-center text-2xl bg-meadow-400 w-48 h-16 rounded-xl text-white">
            Learn More.
          </button>
        </div>
        <div>
          <video
            className=" z-0 top-0 right-0 w-full h-full absolute object-cover mt-10 lg:h-[80vh] lg:w-2/6  lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:right-14 lg:border-8 border-cyan-400"
            autoPlay
            loop
            muted
          >
            <source src="/videos/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bottom-0 left-0">
          
          <GoDotFill className="absolute h-48 w-48 bottom-0 -translate-y-36 translate-x-24 text-cyan-300"/>
          <GoDotFill className="absolute h-48 w-48 bottom-0 -translate-y-6 translate-x-64 text-cyan-300"/>
          <GoDotFill className="absolute h-96 w-96 bottom-0 translate-y-48 text-cyan-300"/>
        </div>
      </div>

      {/* Target */}
      <div className="relative flex flex-row justify-around items-center w-full bg-meadow-300 h-[50vh]">
        <div className="w-screen h-screen max-w-full max-h-full bg-meadow-400"></div>
        <div className="p-12">
          <p className="text-xl text-white">
            &quot;We are artists that have done a lot of wood sculpting project
            and many of experience.&quot;
            <span className="absolute bottom-28">- Poom</span>
          </p>
        </div>
      </div>
      <div className="relative flex flex-row justify-around items-center w-full bg-meadow-300 h-[50vh]">
        <div className="p-12">
          <p className="text-xl text-white">
            &quot;Wood Carving is true way to enlightenment.&quot;
            <span className="absolute bottom-28">- Phupha</span>
          </p>
        </div>
        <div className="w-screen h-screen max-w-full max-h-full bg-orange-200"></div>
      </div>
    </main>
  );
}

export default App;
