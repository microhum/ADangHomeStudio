import { GiWoodBeam } from "react-icons/gi";
import Link from "next/link";
import { Slider } from "@/components/Slides";
import { AnimateFaded } from "@/animate/transition";
import { BsFillLightbulbFill } from "react-icons/bs";
import { useInView, motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRef } from "react";

function App() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px" });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {
    margin: "-100px 0px -100px 0px",
    // once: true,
  });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, {
    margin: "-100px 0px -100px 0px",
    // once: true,
  });

  return (
    <main>
      {/* Introduction */}
      <div className="relative flex flex-row items-center w-full min-w-full bg-cream bg-opacity-60 h-[100vh] content-between">
        <div className="flex flex-col lg:w-1/2 text-shadow lg:text-shadow-sm">
          {/* <img className="relative w-3/5 self-center" src="/images/logoweb.png" /> */}
          <div className="z-10 relative inline-flex ml-10 text-5xl">
            <GiWoodBeam className="hidden lg:flex text-amber-600 h-24 w-24 animate-bounce " />
            <p className="ml-10 text-cyan-400">
              Place where you can do
              <span className="text-amber-600 font-bold"> Wood Carving.</span>
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

      <div ref={ref2} className=" p-10 w-full h-full lg:h-[80vh] bg-green-400">
        <div className="flex flex-col w-full h-full sm:flex-row">
          <div className="flex h-full flex-col p-8 justify-center sm:w-5/12">
            <AnimateFaded className="flex flex-col gap-3" isInView={isInView2}>
              <h1 className="text-4xl lg:text-6xl font-semibold uppercase">
                Wood working For Kids
              </h1>
              <p className="text-2xl font-bold">AGE 7-12</p>
              <Link
                className="group inline-flex items-center gap-3 mt-4 text-2xl lg:text-4xl uppercase font-semibold hover:underline"
                href="/kids"
              >
                Learn More.
                <MdOutlineKeyboardDoubleArrowRight className="group-hover:scale-120 group-hover:translate-x-8 transition-transform" size={50} />
              </Link>
            </AnimateFaded>
          </div>

          <AnimateFaded isInView={isInView2}>
            <Slider />
          </AnimateFaded>
        </div>
      </div>

      <div
        ref={ref3}
        className="flex flex-col sm:flex-row w-full p-10 h-full lg:h-[80vh] bg-green-200"
      >
        <AnimateFaded className="lg:w-3/4 lg:mt-0" isInView={isInView3}>
          <Slider />
        </AnimateFaded>
        <div className="flex flex-col h-full w-full justify-center p-8 sm:w-5/12">
          <AnimateFaded className="flex flex-col gap-3" isInView={isInView3}>
            <h1 className="text-4xl lg:text-6xl font-semibold uppercase">
              WORKSHOPS FOR TEENS & ADULTS{" "}
            </h1>
            <p className="text-2xl font-bold">AGE 12+</p>
            <Link
              className="inline-flex uppercase group items-center gap-3 mt-4 text-2xl lg:text-4xl font-semibold hover:underline"
              href="/adults"
            >
              Learn More.
              <MdOutlineKeyboardDoubleArrowRight className="group-hover:scale-120 group-hover:translate-x-8 transition-transform" size={50} />
            </Link>
          </AnimateFaded>
        </div>
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
