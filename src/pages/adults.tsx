import Link from "next/link";
import { Slider } from "@/components/Slides";
import Marquee from "@/components/marquee";

const Adults = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-cover bg-center bg-[url('/images/img_teen.jpg')] h-[100vh]">
        <div className="ml-10 z-10">
          <p className="text-5xl text-white font-bold text-shadow-lg">
            WORKSHOPS FOR TEENS AND ADULTS
          </p>
          <p className="text-3xl text-white font-semibold">AGE 12+</p>
          <p className="text-lg text-meadow-300 text-shadow-sm">
            Get hands-on experience with Functional and Artistic Project
          </p>
        </div>
        <div className="z-0 bg-black opacity-50 absolute h-full w-full"></div>
      </div>

      <div className="w-full h-20 bg-green-300 flex items-center justify-center font-bold text-2xl">
        CURRENTLY OFFERING
      </div>

      {/* WOODWHITTING */}
      <div className="flex flex-col sm:flex-row w-full h-[70vh]">
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <p className="text-xl lg:text-4xl font-semibold self-center">
            WOODWHITTING
          </p>
        </div>
        <Slider />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[50vh]">
        <div className="flex flex-col bg-meadow-300 justify-center items-center">
          <p className="text-lg lg:text-2xl text-white">
            4- hr Workshop <span className="font-bold">CHOOSE</span>
          </p>
          <Marquee className="text-white">
            <span className="text-3xl mx-3 font-bold">Wednesday</span>
            <span className="text-3xl mx-3">or</span>
            <span className="text-3xl mx-3 font-bold">Thursday</span>
            <span className="text-3xl mx-3">or</span>
            <span className="text-3xl mx-3 font-bold">Friday</span>
          </Marquee>
          <p className="text-2xl text-white">1.30PM - 5.30PM</p>
        </div>
        <div className="flex bg-meadow-400">dwa</div>
        <div className="flex bg-meadow-300">dawdaw</div>
      </div>

      {/* WOOD JEWELRY */}
      <div className="flex flex-col-reverse sm:flex-row w-full h-[50vh]">
        <Slider />
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <p className="text-xl lg:text-4xl font-semibold self-center">
            WOOD JEWELRY
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[30vh]">
        <div className="flex flex-col bg-meadow-300 justify-center items-center">
          <p className="text-2xl text-white">
            4- hr Workshop <span className="font-bold">CHOOSE</span>
          </p>
          <Marquee className="text-white">
            <span className="text-3xl mx-3 font-bold">Wednesday</span>
            <span className="text-3xl mx-3">or</span>
            <span className="text-3xl mx-3 font-bold">Thursday</span>
            <span className="text-3xl mx-3">or</span>
            <span className="text-3xl mx-3 font-bold">Friday</span>
          </Marquee>
          <p className="text-2xl text-white">1.30PM - 5.30PM</p>
        </div>
        <div className="flex bg-meadow-400">dwa</div>
        <div className="flex bg-meadow-300">dawdaw</div>
      </div>

      {/* WOOD CARVING */}
      <div className="flex flex-col sm:flex-row w-full h-[50vh]">
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <p className="text-xl lg:text-4xl font-semibold self-center">
            WOOD CARVING
          </p>
        </div>
        <Slider />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[30vh]">
        <div className="flex flex-col bg-meadow-300 justify-center items-center">
          <p className="text-2xl text-white">
            4- hr Workshop <span className="font-bold">CHOOSE</span>
          </p>
          <Marquee className="text-white">
            <span className="text-3xl mx-3 font-bold">Wednesday</span>
            <span className="text-3xl mx-3">or</span>
            <span className="text-3xl mx-3 font-bold">Thursday</span>
            <span className="text-3xl mx-3">or</span>
            <span className="text-3xl mx-3 font-bold">Friday</span>
          </Marquee>
          <p className="text-2xl text-white">1.30PM - 5.30PM</p>
        </div>

        <div className="flex bg-meadow-400">dwa</div>
        <div className="flex bg-meadow-300">dawdaw</div>
      </div>
    </>
  );
};

export default Adults;
