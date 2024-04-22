import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 w-full h-[100vh]">
      <div className="relative flex flex-col items-center h-4/5 w-4/5 bg-meadow-400 rounded-lg">
        <div className="relative text-sm p-8 flex flex-col gap-2 text-white">
          <h1 className="text-xl md:text-2xl mb-5 font-bold">Contact Us</h1>
          <p className="inline-flex items-center group">
            <FaInstagram className="mr-2 group-hover:scale-125 transition-transform" size={25} />
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
          <p className="inline-flex items-center group">
            <FaFacebook className="mr-2 group-hover:scale-125 transition-transform" size={25} />
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
          <p className="inline-flex items-center group">
            <IoIosCall className="mr-2 group-hover:scale-125 transition-transform" size={25} />
            Tel: 0000000000 (Poom)
          </p>
          <p className="inline-flex items-center group">
            <IoIosCall className="mr-2 group-hover:scale-125 transition-transform" size={25} />
            Tel: 0000000000 (Phupha)
          </p>
          <p className="inline-flex items-center group">
            <TiLocation className="mr-2 group-hover:scale-125 transition-transform" size={25} />
            <Link
              href="https://www.google.com/maps?ll=18.828815,98.98823&z=15&t=m&hl=th&gl=TH&mapclient=embed&cid=17937720422366833839"
              target="_blank"
            >
              Location:{" "}
              <span className="underline underline-offset-4">
                2 Mahachok 17 Alley Pa Tan Chiang Mai, Thailand 50300
              </span>
            </Link>
          </p>
        </div>
        <div className="relative flex h-full w-3/5 lg:w-full justify-center items-center">
          <Image
            className="hover:scale-125 hover:rotate-[10deg] transition-transform ease-out"
            src="/images/logo/logo.png"
            width="256"
            height="256"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
