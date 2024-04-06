import Link from "next/link";
import { Slider } from "@/components/Slider";
import Marquee from "@/components/marquee";

const Adults = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-[url('/images/img_teen.jpg')] h-[100vh]">
        <div className="ml-10 shadow-xl">
          <p className="text-5xl text-white font-bold">
            WORKSHOPS FOR TEENS AND ADULTS
          </p>
          <p className="text-3xl text-white font-semibold">AGE 12+</p>
          <p className="text-lg text-meadow-300">
            Get hands-on experience with Functional and Artistic Project
          </p>
        </div>
      </div>
      <div className="w-full h-20 bg-green-300 flex items-center justify-center font-bold text-2xl">
        CURRENTLY OFFERING
      </div>

      {/* WOODWHITTING */}
      <div className="flex flex-col sm:flex-row w-full h-[50vh] drop-shadow-2xl">
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <p className="text-4xl font-semibold p-6 self-center">WOODWHITTING</p>
        </div>
        <Slider />
      </div>

      <div className="grid grid-cols-3 w-full h-[30vh]">
        <div className="flex flex-col bg-meadow-300 justify-center items-center">
          <p className="text-2xl text-white p-4">4- hr Workshop <span className="font-bold">CHOOSE</span></p>
          <Marquee>
            <span className="text-xl mx-3 font-bold">Wednesday</span>
            <span className="text-xl mx-3">or</span>
            <span className="text-xl mx-3 font-bold">Thursday</span>
            <span className="text-xl mx-3">or</span>
            <span className="text-xl mx-3 font-bold">Friday</span>
          </Marquee>
          <p className="text-2xl text-white p-4">1.30PM - 5.30PM</p>
        </div>
        <div className="flex bg-meadow-400">dwa</div>
        <div className="flex bg-meadow-300">dawdaw</div>
      </div>

      {/* WOOD JEWELRY */}
      <div className="flex flex-col sm:flex-row w-full h-[50vh] drop-shadow-2xl">
        <Slider />
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <p className="text-4xl font-semibold p-6 self-center">WOOD JEWELRY</p>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full h-[30vh]">
        <div className="flex flex-col bg-meadow-300 justify-center items-center">
          <p className="text-2xl text-white p-4">4- hr Workshop <span className="font-bold">CHOOSE</span></p>
          <Marquee>
            <span className="text-xl mx-3 font-bold">Wednesday</span>
            <span className="text-xl mx-3">or</span>
            <span className="text-xl mx-3 font-bold">Thursday</span>
            <span className="text-xl mx-3">or</span>
            <span className="text-xl mx-3 font-bold">Friday</span>
          </Marquee>
          <p className="text-2xl text-white p-4">1.30PM - 5.30PM</p>
        </div>
        <div className="flex bg-meadow-400">dwa</div>
        <div className="flex bg-meadow-300">dawdaw</div>
      </div>

      {/* WOOD CARVING */}
      <div className="flex flex-col sm:flex-row w-full h-[50vh] drop-shadow-2xl">
        <div className="flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <p className="text-4xl font-semibold p-6 self-center">WOOD CARVING</p>
        </div>
        <Slider />
      </div>

      <div className="grid grid-cols-3 w-full h-[30vh]">
        <div className="flex flex-col bg-meadow-300 justify-center items-center">
          <p className="text-2xl text-white p-4">4- hr Workshop <span className="font-bold">CHOOSE</span></p>
          <Marquee>
            <span className="text-xl mx-3 font-bold">Wednesday</span>
            <span className="text-xl mx-3">or</span>
            <span className="text-xl mx-3 font-bold">Thursday</span>
            <span className="text-xl mx-3">or</span>
            <span className="text-xl mx-3 font-bold">Friday</span>
          </Marquee>
          <p className="text-2xl text-white p-4">1.30PM - 5.30PM</p>
        </div>
        <div className="flex bg-meadow-400">dwa</div>
        <div className="flex bg-meadow-300">dawdaw</div>
      </div>
    </>
  );
};

export default Adults;
