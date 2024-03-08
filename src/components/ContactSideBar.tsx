import { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import useSidebarStore from "@/stores/SideBarStore";
import Image from "next/image";
import Link from "next/link";

const ContactSideBar = () => {
  const { isOpen, toggleSidebar, closeSideBar } = useSidebarStore();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!sidebarRef.current?.contains(event.target)) {
        closeSideBar();
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [sidebarRef]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed h-full w-96 drop-shadow-2xl bg-meadow-300 top-0 z-50 transition-all duration-300 ${
        isOpen ? "left-0" : "-left-96"
      }`}
    >
      <div className="flex flex-col items-center gap-1 mt-20 text-white">
        <button onClick={closeSideBar}>
          <IoCloseCircle className="absolute text-5xl top-5 right-5" />
        </button>
        <h1 className="text-2xl mb-1 font-bold">Contact Us</h1>
        <p className="inline-flex">
          <FaInstagram className="translate-y-1 mr-2" />
          <Link href="https://www.instagram.com/a.danghomestudio/" target="_blank">
            Instagram:{" "}
            <span className="underline underline-offset-4">
              ADangHomeStudio
            </span>
          </Link>
        </p>
        <p className="inline-flex">
          <FaFacebook className="translate-y-1 mr-2" />
          <Link href="https://www.facebook.com/a.danghomestudio" target="_blank">
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
  );
};

export default ContactSideBar;
