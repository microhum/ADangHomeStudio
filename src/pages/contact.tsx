import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const Contact = () => {
  return (
      <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 w-full h-[100vh]">
        <div className="relative flex flex-col h-4/5 w-4/5 bg-meadow-400">
          <div className="flex flex-col items-center gap-1 mt-20 text-white">
            <h1 className="text-2xl mb-1 font-bold">Contact Us</h1>
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
            <Image
              className="mt-24"
              src="/images/logo.png"
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
