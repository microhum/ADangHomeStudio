import sliderData from "@/lib/Items";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { SliderProps } from "@/props/sliderprops";
import GmailFormat from "@/utils/gmailFormat";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden peer flex h-full object-cover w-full items-center justify-center bg-meadow-400"
      ref={emblaRef}
    >
      <div className="flex object-cover">
        {sliderData?.map((item: any) => {
          return (
            <div className="embla__slide relative h-full w-full" key={item.id}>
              <Image
                className="w-full h-full object-cover"
                width={512}
                height={512}
                src={item.url}
                alt=""
              />
              <div className="absolute top-0 left-0">ID: {item.id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CustomSlider = (props: SliderProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div onClick={props.scrollTo} className="relative h-full w-full group">
      <div
        className="overflow-hidden peer h-full w-full bg-meadow-400 transition-[filter] duration-500"
        ref={emblaRef}
      >
        <div className="flex">
          {/* Map Item */}
          {props.slides?.map((item: any) => (
            <div
              className={`embla__slide relative flex justify-center items-center lg:h-full w-full`}
              key={item.id}
            >
              {item.url?.map((url: string, idx: number) => (
                <Image
                  key={idx}
                  className="relative w-full h-full lg:group-hover:blur-[2px] object-cover"
                  width={1024}
                  height={1024}
                  src={url}
                  alt=""
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Description */}
      {props.metadata ? (
        <div className="z-10 absolute p-10 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-none pointer-events-none opacity-80 lg:opacity-0 lg:group-hover:opacity-100 text-shadow-sm transition-all">
          <div>
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {props.metadata.title}
            </h1>
            <div className="flex justify-between">
              <p className="text-sm underline md:text-xl text-white font-semibold">
                {props.metadata.price} Bath
              </p>
              <p className="text-sm underline md:text-xl text-white font-semibold">
                Date: {props.metadata.date}
              </p>
            </div>
            <ul className="list-disc mt-5">
              {props.metadata.text?.map((text: string, idx: number) => (
                <li key={idx} className="md:text-2xl text-white font-medium">
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-14 self-center"></p>
        </div>
      ) : (
        ""
      )}

      {props.scrollTo ? (
        <button
          onClick={props.scrollTo}
          className="hidden lg:flex absolute opacity-60 lg:opacity-0 peer/button lg:peer-hover:opacity-100 md:text-xl top-3/4 left-1/2 transform -translate-x-1/2 z-10 font-semibold px-6 py-4 hover:opacity-50 transition-all bg-white rounded-lg"
        >
          Requirements
        </button>
      ) : (
        <div className="absolute lg:opacity-0 peer/button lg:peer-hover:opacity-100 hover:opacity-100 top-[57%] lg:top-3/4 left-1/2 transform -translate-x-1/2 z-10 mt-5 h-1/6 w-full flex flex-col items-center gap-x-5 p-3 transition-all">
          <p className="relative text-sm md:text-lg py-1 px-20 text-black bg-white rounded-xl">
            BOOK NOW !
          </p>
          <div className="relative flex gap-x-5 py-2 items-center ">
            <Link target="_blank" href={GmailFormat({})}>
              <BiLogoGmail
                className="fill-white hover:fill-white transition-all"
                size={35}
              />
            </Link>
            <p className="text-white md:text-2xl text-shadow">OR</p>
            <div className="inline-flex gap-x-3">
              <Link
                target="_blank"
                href="https://www.facebook.com/a.danghomestudio"
              >
                <FaFacebook
                  className="fill-white hover:fill-white transition-all"
                  size={30}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/a.danghomestudio/"
              >
                <FaInstagram
                  className="fill-white hover:fill-white transition-all"
                  size={30}
                />
              </Link>
              <Link target="_blank" href="#">
                <IoIosCall
                  className="fill-white hover:fill-white transition-all"
                  size={30}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Slider, CustomSlider };
