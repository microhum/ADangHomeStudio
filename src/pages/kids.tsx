import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { Slider, CustomSlider } from "@/components/Slides";
import Marquee from "@/components/marquee";
import kids_items from "@/lib/kids_item";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiWoodBeam } from "react-icons/gi";
import { FaBookmark, FaArrowRight } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import { useCallback, useRef } from "react";

const Kids = () => {
  const emailFormat: string =
    "https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&cc=someone@ola.example&bcc=someone.else@example.com&su=SUBJECT&body=BODY";

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    const offset = 250;
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div className="relative flex flex-col justify-center bg-cover bg-[url('/images/img_kids.jpg')] w-full h-[100vh]">
        <div className="ml-10 z-10">
          <p className="text-3xl lg:text-5xl text-white font-bold text-shadow-lg">
            WOODWORKING FOR KIDS
          </p>
          <p className="text-3xl text-white font-semibold">AGE 7 -12 </p>
          <p className="text-lg text-meadow-300 text-shadow-sm">
            Get hands-on experience with Functional and Artistic Project
          </p>
        </div>
        <div className="z-0 bg-black opacity-20 absolute h-full w-full"></div>
      </div>

      <div className="w-full h-20 bg-green-300 flex items-center justify-center font-bold text-2xl">
        CURRENTLY OFFERING
      </div>

      <div className="flex flex-col justify-center items-center py-10 z-20 bg-cream bg-opacity-40">
        <div className="h-full flex flex-col w-10/12">
          {/* <Image
            src="/images/flexible_crop.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          /> */}

          {/* Marquee 1 */}
          <Marquee className="bg-white">
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
              <p className="text-2xl inline-flex lg:text-6xl font-semibold mb-4 items-center">
                <MdAccessTimeFilled className="mr-5" size={60} />
                <span>FLEXIBLE SCHEDULING OPTIONS</span>
              </p>
              <div className="list-disc flex flex-col gap-y-2">
                <li className="text-sm sm:text-xl">Duration: 9 March - 12 May 2024</li>
                <li className="text-sm sm:text-xl">Timing: 2.30hr Class 9.30AM - 12PM </li>
                <li className="text-sm sm:text-xl">Open by Appointment Only</li>
                <li className="text-sm sm:text-xl">from Wednesday - Sunday</li>
                <li className="text-sm sm:text-xl">Ages: 7 - 12 years old.</li>
              </div>
            </div>
          </div>

          {/* Caroussel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5 w-full h-full">
            {kids_items.map((item: any[], idx) => {
              return (
                <CustomSlider key={`item${idx}`} data={item[1]} description={item[0]} scrollTo={scrollTo} />
              );
            })}
          </div>

          {/* Marquee 2 */}
          <Marquee className="bg-white">
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

          <div
            ref={scrollRef}
            className="flex flex-col items-center justify-center w-full h-full bg-meadow-300 "
          >
            <div className="flex flex-col p-8 text-white gap-y-2">
              <p className="inline-flex text-2xl lg:text-6xl font-semibold mb-4 items-center">
                <FaBookmark className="mr-5 sm:scale-80" size={50} />
                <span>BOOKING REQUIREMENTS</span>
              </p>
              <p className="text-rose-400 text-lg lg:text-2xl font-semibold text-shadow-sm">
                *** Please Read Before Booking
              </p>
              <ul className="list-disc flex flex-col gap-y-2">
                <li className="text-sm lg:text-xl">
                  Reserve your least 2 days prior to each class
                </li>
                <li className="text-sm sm:text-xl">Limited to 4 kids per class</li>
                <li className="text-sm sm:text-xl">No walk-ins</li>
                <li className="text-sm sm:text-xl">First-come, first serve basis</li>
                <li className="text-sm sm:text-xl">Ages: 7 - 12 years old.</li>
              </ul>
              <Link
                target="_blank"
                className="mt-5 inline-flex items-center font-semibold text-3xl hover:opacity-80 hover:underline hover:translate-x-10 transition-all"
                href={emailFormat}
              >
                BOOK NOW! <FaArrowRight className="mx-5" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kids;
