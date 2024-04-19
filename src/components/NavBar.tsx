import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import useSidebarStore from "@/stores/SideBarStore";
import Image from "next/image";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useEffect, useState } from "react";

const NavBar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const [IsToggle, setIsToggle] = useState(false);

  // Background color changing on scroll
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed flex flex-col top-0 z-30 w-full max-h-[10vh]">
      <div
        className={`relative flex justify-between transition-all duration-200 ${
          showBackground ? "bg-green-300" : ""
        } h-[10vh] w-full p-9 z-40`}
      >
        <div className="relative flex items-center">
          <Link href="/">
            <Image
              src="/images/logo_text.png"
              alt="Logo"
              width={200}
              height={200}
              className="relative rounded-s-xl hover:opacity-70 transition-all"
            />
          </Link>
          {/* <FaDog size={40} color="white" /> */}
        </div>
        <ul className="hidden items-center gap-x-12 lg:inline-flex">
          <li className="text-lg text-zinc-600 hover:text-opacity-70 hover:underline transition duration-200 px-2 py-5">
            <Link href={`/kids`}>Classes for Kids</Link>
          </li>
          <li className="text-lg text-zinc-600 hover:text-opacity-70 hover:underline transition duration-200 px-2 py-5">
            <Link href={`/adults`}>Workshop for Teens and Adults</Link>
          </li>
          <li className="text-lg text-zinc-600 hover:text-opacity-70 hover:underline transition duration-200 px-2 py-5">
            <Link href={`/about`}>About Us</Link>
          </li>
          <li className="text-lg bg-zinc-900 rounded-lg text-white hover:opacity-80 hover:scale-105 hover:underline transition ease-out duration-200 px-5 py-3">
            <Link href={`/contact`}>Get in touch</Link>
          </li>
          {/* <li className="inline-flex gap-x-2 text-2xl text-amber-300 group hover:scale-110 hover:underline transition-all duration-300 px-2 py-5 font-bold">
            <FaBookmark className="translate-y-1 text-amber-300 transition-all" />
            <Link href={`/workshop/booking`}>Book Now !</Link>
          </li> */}
        </ul>
        {/* Dropdown */}
        <button
          onClick={() => setIsToggle((IsToggle) => !IsToggle)}
          className={`flex ml-16 self-center lg:hidden transition-transform duration-700 ease-out ${IsToggle ? "rotate-180" : "rotate-0"}`}
        >
          <IoMdArrowDropdownCircle className=" text-white text-6xl" />
        </button>
      </div>

      <div
        className={`lg:hidden ease-out transition-all duration-700 relative self-end flex-col bg-meadow-400 rounded-md p-4 w-2/5 h-full ${
          IsToggle ? "top-0 opacity-95" : "-top-[600px] opacity-0 z-0"
        } `}
      >
        <ul className="items-center gap-x-2">
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/kids`}>Classes for Kids</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/adults`}>Classes for Teens & Adults</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/about`}>About Us</Link>
          </li>
          {/* <li className="text-xl text-white px-2 py-5">
            <button onClick={toggleSidebar}>Contact</button>
          </li>
          <li className="inline-flex gap-x-2 text-xl text-white px-2 py-5 group font-semibold">
            <Link href={`/workshop/booking`}>Booking</Link>
            <FaBookmark className="translate-y-1 text-white-300" />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
