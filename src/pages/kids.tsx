import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { Slider, CustomSlider } from "@/components/Slider";
import Marquee from "@/components/marquee";
import kids_items from "@/lib/kids_item";

const Kids = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center bg-[url('/images/img_kids.jpg')] w-full h-[100vh]">
        <div className="ml-10 shadow-xl">
          <p className="text-3xl lg:text-5xl text-white font-bold">
            WOODWORKING FOR KIDS
          </p>
          <p className="text-3xl text-white font-semibold">AGE 7 -12 </p>
          <p className="text-lg text-meadow-300">
            Get hands-on experience with Functional and Artistic Project
          </p>
        </div>
      </div>

      <div className="w-full h-20 bg-green-300 flex items-center justify-center font-bold text-2xl">
        CURRENTLY OFFERING
      </div>

      <Image
        src="/images/flexible_crop.jpg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />

      {/* Marquee 1 */}
      <Marquee>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
      </Marquee>

      {/* Scheduling */}
      <div className="flex items-center justify-center w-full h-[50vh] bg-meadow-300">
        <div className="flex flex-col p-8 text-white gap-y-2">
          <p className="text-3xl lg:text-6xl font-semibold mb-4">
            FLEXIBLE SCHEDULING OPTIONS
          </p>
          <div className="list-disc flex flex-col gap-y-2">
            <li className="text-xl">Duration: 9 March - 12 May 2024</li>
            <li className="text-xl">Timing: 2.30hr Class 9.30AM - 12PM </li>
            <li className="text-xl">Open by Appointment Only</li>
            <li className="text-xl">from Wednesday - Sunday</li>
            <li className="text-xl">Ages: 7 - 12 years old.</li>
          </div>
        </div>
      </div>

      {/* Caroussel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {kids_items.map((item: any[], idx) => {
          return <CustomSlider key={`item${idx}`} data={item} />;
        })}
      </div>

      {/* Marquee 2 */}
      <Marquee>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
      </Marquee>
      <Marquee>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
        <span className="text-2xl mx-4 font-bold">
          can be redeemed until Sunday 12th May 2024
        </span>
      </Marquee>

      <div className="flex items-center justify-center w-full h-full bg-meadow-300">
        <div className="flex flex-col p-8 text-white gap-y-2">
          <p className="text-3xl lg:text-6xl font-semibold mb-4">
            BOOKING REQUIREMENTS
          </p>
          <ul className="list-disc flex flex-col gap-y-2">
            <li className="text-xl">
              Reserve your least 2 days prior to each class
            </li>
            <li className="text-xl">Limited to 4 kids per class</li>
            <li className="text-xl">No walk-ins</li>
            <li className="text-xl">First-come, first serve basis</li>
            <li className="text-xl">Ages: 7 - 12 years old.</li>
          </ul>
          <Link className="mt-5 underline font-serif text-3xl hover:opacity-80 hover:scale-105 transition-all" href="/">BOOK NOW! -&gt;</Link>
        </div>
      </div>
    </>
  );
};

export default Kids;
