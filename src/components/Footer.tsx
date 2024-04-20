import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-full bg-green-300">
      <div className="flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:justify-around">
        <div className="flex mt-10">
          {/* Google Map Frame */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.3113399295335!2d98.98564941052886!3d18.82881955961258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b2a1955fd99%3A0xf8ef95af9f71ecaf!2sA.%20Dang%20Home%20Studio!5e0!3m2!1sth!2sth!4v1712290915901!5m2!1sth!2sth"
            width="250"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col h-full p-6">
          <div className="flex text-zinc-700 text-lg sm:text-lg lg:text-4xl font-bold font-serif">
            Our studio is open by appointment only
          </div>
          <div className="flex text-cyan-500 text-lg  sm:text-lg lg:text-4xl font-bold font-serif">
            Wednesday-Sunday
          </div>
          <div className="flex mt-10 text-zinc-700 text-sm lg:text-lg font-bold">
            2 Mahachok 17 Alley
          </div>
          <div className="flex text-zinc-700 text-sm lg:text-lg font-bold">
            Pa Tan Chiang Mai, Thailand 50300
          </div>
        </div>

        {/* <div className="flex flex-col gap-1 text-black">
            <h1 className="text-2xl mb-1 font-serif font-bold">Contact Us</h1>
            <p className="inline-flex">
              <FaInstagram className="translate-y-1 mr-2" />
              <Link
                href="https://www.instagram.com/a.danghomestudio/"
                target="_blank"
              >
                Instagram:{" "}
                <span className="underline underline-offset-4">
                  ADangHomeStudio
                </span>
              </Link>
            </p>
            <p className="inline-flex">
              <FaFacebook className="translate-y-1 mr-2" />
              <Link
                href="https://www.facebook.com/a.danghomestudio"
                target="_blank"
              >
                Facebook:{" "}
                <span className="underline underline-offset-4">
                  ADangHomeStudio
                </span>
              </Link>
            </p>
            <p className="inline-flex">
              <IoIosCall className="translate-y-1 mr-2" />
              Tel: 0000000000 (Poom)
            </p>
            <p className="inline-flex">
              <IoIosCall className="translate-y-1 mr-2" />
              Tel: 0000000000 (Phupha)
            </p>
          
          </div> */}
      </div>

      <div className="text-[0.6rem] md:text-sm font-bold uppercase py-6 self-center">
      A. Dang Home Studio © 2024 All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
