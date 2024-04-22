import Link from "next/link";
import { CustomSlider, Slider } from "@/components/Slides";
import Marquee from "@/components/marquee";
import teens_items from "@/lib/teens_items";

const CustomMarquee = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-1 w-full h-[30vh]">
      <div className="flex flex-col bg-meadow-300 justify-center items-center">
        <p className="text-lg lg:text-4xl text-white">
          4- hr Workshop <span className="underline font-bold">CHOOSE</span>
        </p>
        <Marquee len={3} className="text-white w-full">
          <span className="text-3xl mx-3 font-bold">Wednesday</span>
          <span className="text-3xl mx-3">or</span>
          <span className="text-3xl mx-3 font-bold">Thursday</span>
          <span className="text-3xl mx-3">or</span>
          <span className="text-3xl mx-3 font-bold">Friday</span>
          <span className="text-3xl mx-3">or</span>
        </Marquee>
        <p className="text-4xl text-white">1.30PM - 5.30PM</p>
      </div>
    </div>
  );
};

const Adults = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <div className="relative flex flex-col justify-center bg-cover bg-center bg-[url('/images/teens/teens_preview.jpg')] h-[100vh]">
        <div className="ml-10 z-10">
          <p className="text-5xl text-white font-bold text-shadow-lg stroke-red">
            WORKSHOPS FOR TEENS AND ADULTS
          </p>
          <p className="text-3xl text-white font-semibold">AGE 12+</p>
          <p className="mt-4 text-lg text-meadow-300 text-shadow-sm">
            Get hands-on experience with Functional and Artistic Project
          </p>
        </div>
        <div className="z-0 bg-black opacity-50 absolute h-full w-full"></div>
      </div>

      <div className="relative w-full h-20 bg-green-300 flex items-center justify-center font-bold text-2xl">
        CURRENTLY OFFERING
      </div>

      {/* WOODWHITTING */}
      <div className="relative flex flex-col sm:flex-row w-full lg:h-[80vh]">
        <div className="relative flex h-full flex-col p-8 justify-center sm:w-5/12 bg-green-100">
          <h1 className="text-xl lg:text-6xl font-semibold self-center">
            WOOD WHITTING
          </h1>
          <p className="mt-4 text-lg lg:text-4xl">
            This is Wood carving that you can carve wood.
          </p>
        </div>
        <CustomSlider
          slides={teens_items["whittling"].slides}
          metadata={teens_items["whittling"].metadata}
        />
      </div>
      <CustomMarquee />

      {/* WOOD JEWELRY */}
      
      <div className="relative flex flex-col-reverse sm:flex-row w-full lg:h-[80vh]">
        
        <CustomSlider
          slides={teens_items["carving"].slides}
          metadata={teens_items["carving"].metadata}
        />
        <div className="relative p-8 flex h-full flex-col justify-center sm:w-5/12 bg-green-100">
          <h1 className="text-xl lg:text-6xl font-semibold self-center">
            WOOD JEWELRY
          </h1>
          <p className="mt-4 text-lg lg:text-4xl">
            This is Wood carving that you can carve wood.
          </p>
        </div>
      </div>

      <CustomMarquee />

      {/* WOOD CARVING */}
      <div className="relative flex flex-col sm:flex-row w-full lg:h-[80vh]">
        <div className="relative p-8 flex h-full flex-col justify-center items-center sm:w-5/12 bg-green-100">
          <h1 className="text-xl lg:text-6xl font-semibold">
            WOOD CARVING
          </h1>
          <p className="mt-4 text-lg lg:text-4xl">
            This is Wood carving that you can carve wood.
          </p>
        </div>
        <CustomSlider
          slides={teens_items["carving"].slides}
          metadata={teens_items["carving"].metadata}
        />
      </div>

      <CustomMarquee />
    </div>
  );
};

export default Adults;
