import { GiWoodBeam } from "react-icons/gi";
import Link from "next/link";
import { Slider } from "@/components/Slider";

function App() {
  return (
    <main>
      {/* Introduction */}
      <div className="relative flex flex-row items-center w-full min-w-full bg-cream bg-opacity-60 h-[100vh] content-between">
        <div className="flex flex-col lg:w-1/2 text-shadow lg:text-shadow-sm">
          {/* <img className="relative w-3/5 self-center" src="/images/logoweb.png" /> */}
          <div className="z-10 relative inline-flex ml-10 text-5xl">
            <GiWoodBeam className="hidden lg:flex text-amber-600 h-24 w-24 animate-bounce" />
            <p className="ml-10 text-white">
              Spark Your Dream On
              <span className="text-amber-600 font-bold"> Wood</span> Carving.
            </p>
          </div>
          <button className="z-10 mt-10 self-center text-2xl w-48 h-16 rounded-xl text-white bg-cyan-400 transition-all duration-1000">
            <Link
              className="w-full h-full flex items-center justify-center"
              href="/workshop/booking"
            >
              Book Now !
            </Link>
          </button>
        </div>
        <div>
          <video
            className=" z-0 top-0 right-0 w-full h-full absolute object-cover lg:h-[80vh] lg:w-2/6 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:right-14 lg:border-8 border-cyan-400"
            autoPlay
            loop
            muted
          >
            <source src="/videos/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row w-full h-[50vh] drop-shadow-2xl">
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-meadow-300">
          <p className="text-4xl font-semibold p-6">Woodworking For Kids AGE 7-12 YEARS OLD.</p>
          <Link className="text-2xl font-semibold underline px-6" href="/kids">
            Learn More.
          </Link>
        </div>
          <Slider />
      </div>

      <div className="flex flex-col sm:flex-row w-full h-[50vh]">
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-meadow-300">
          <p className="text-4xl font-semibold p-6">WORKSHOPS FOR TEENS & ADULTS AGE 12+</p>
          <Link className="text-2xl font-semibold underline px-6" href="/adults">
            Learn More.
          </Link>
        </div>
          <Slider />
      </div>
      {/* Image Preview */}
      {/* <div className="relative grid grid-cols-1 w-full max-h-full h-[80vh] bg-amber-300">
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
        <div className="bg-[url('/images/Image_preview1.jpg')] bg-no-repeat bg-cover bg-center bg-fixed w-full h-[40vh]" />
        <div className="bg-[url('/images/Image_preview2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed object-cover w-full h-[40vh]" />
      </div> */}
    </main>
  );
}

export default App;
