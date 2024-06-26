import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { Slider, CustomSlider } from "@/components/Slides";
import { MyCalendar } from "@/components/calendar";
import Marquee from "@/components/marquee";
import kids_items from "@/lib/kids_item";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiWoodBeam } from "react-icons/gi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaBookmark, FaArrowRight } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFileContract } from "react-icons/fa6";
import { useCallback, useRef } from "react";
import GmailFormat from "@/utils/gmailFormat";
import { SliderProps } from "@/props/sliderprops";

const Kids = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    const offset = 180;
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div className="relative flex flex-col justify-center bg-cover bg-[url('/images/kids/kids_preview.jpg')] w-full h-[100vh]">
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
        <div className="h-full flex flex-col w-full lg:w-10/12">
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
                <li className="text-sm sm:text-xl">
                  Duration: 9 March - 12 May 2024
                </li>
                <li className="text-sm sm:text-xl">
                  Timing: 2.30hr Class 9.30AM - 12PM{" "}
                </li>
                <li className="text-sm sm:text-xl">Open by Appointment Only</li>
                <li className="text-sm sm:text-xl">from Wednesday - Sunday</li>
                <li className="text-sm sm:text-xl">Ages: 7 - 12 years old.</li>
              </div>
            </div>
          </div>

          {/* Caroussel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5 w-full h-full">
            {kids_items.map((item, idx) => {
              return (
                <div key={`item${idx}`} className="h-[50vh]">
                  <CustomSlider
                    key={`item${idx}`}
                    slides={item.slides}
                    metadata={item.metadata}
                    scrollTo={scrollTo}
                  />
                </div>
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
              <p className="text-rose-400 text-sm sm:text-xl font-semibold text-shadow-sm">
                *** Please Read Before Booking
              </p>
              <ul className="list-disc flex flex-col gap-y-2">
                <li className="text-sm lg:text-xl">
                  Reserve your least 2 days prior to each class
                </li>
                <li className="text-sm sm:text-xl">
                  Limited to 4 kids per class
                </li>
                <li className="text-sm sm:text-xl">No walk-ins</li>
                <li className="text-sm sm:text-xl">
                  First-come, first serve basis
                </li>
                <li className="text-sm sm:text-xl">Ages: 7 - 12 years old.</li>
              </ul>
              <MyCalendar />
              <div className="relative mt-5 h-full w-full flex flex-col items-center gap-x-5 p-3 rounded-lg">
                <p className="text-sm md:text-lg py-1 px-20 text-black bg-white rounded-xl">
                  BOOK NOW !
                </p>

                <div className="flex gap-x-5 p-4 items-center ">
                  <Link target="_blank" href={GmailFormat({})}>
                    <BiLogoGmail
                      className="hover:fill-slate-300 transition-all"
                      size={35}
                    />
                  </Link>

                  {/* <Link href={emailFormat} className="md:text-3xl">
                    Send Us Email
                  </Link> */}
                  <p className="md:text-2xl">OR</p>
                  <div className="inline-flex gap-x-3">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/a.danghomestudio"
                    >
                      <FaFacebook
                        className="hover:fill-slate-300 transition-all"
                        size={30}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/a.danghomestudio/"
                    >
                      <FaInstagram
                        className="hover:fill-slate-300 transition-all"
                        size={30}
                      />
                    </Link>
                    <Link target="_blank" href="#">
                      <IoIosCall
                        className="hover:fill-slate-300 transition-all"
                        size={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kids;
