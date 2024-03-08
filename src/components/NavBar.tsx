import Link from "next/link";
import { FaBookmark } from "react-icons/fa";
import useSidebarStore from "@/stores/SideBarStore";
import Image from "next/image";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const [IsToggle, setIsToggle] = useState(false);
  return (
    <nav className="fixed flex flex-col top-0 z-40 w-full max-h-[10vh]">
      <div className="relative flex justify-around h-[10vh] w-full p-9 bg-meadow-300 z-40 drop-shadow-lg rounded-b-xl">
        <div className="relative inline-flex items-center gap-x-8">
          <Image
            src="/images/logoweb.png"
            alt="Logo"
            width={110}
            height={110}
            className="relative rounded-s-xl"
          />
          {/* <FaDog size={40} color="white" /> */}
          <div className="text-sm sm:text-lg lg:text-2xl text-white">
            A. Dang Home Studio.
          </div>
        </div>
        <ul className="hidden items-center gap-x-2 lg:inline-flex">
          <li className="text-xl text-white hover:translate-y-2 hover:text-opacity-70 hover:underline transition duration-500 px-2 py-5">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="text-xl text-white hover:translate-y-2 hover:text-opacity-70 hover:underline transition duration-500 px-2 py-5">
            <Link href={`/works`}>Our Works</Link>
          </li>
          <li className="text-xl text-white hover:translate-y-2 hover:text-opacity-70 hover:underline transition duration-500 px-2 py-5">
            <Link href={`/pricing`}>Pricing</Link>
          </li>
          <li className="text-xl text-white hover:translate-y-2 hover:text-opacity-70 hover:underline transition duration-500 px-2 py-5">
            <Link href={`/about`}>About Us</Link>
          </li>
          <li className="text-xl text-white hover:translate-y-2 hover:text-opacity-70 hover:underline transition duration-500 px-2 py-5">
            <button onClick={toggleSidebar}>Contact</button>
          </li>
          <li className="inline-flex gap-x-2 text-2xl text-amber-300 group hover:scale-110 hover:underline transition-all duration-300 px-2 py-5 font-bold">
            <FaBookmark className="translate-y-1 text-amber-300 transition-all" />
            <Link href={`/workshop/booking`}>Book Now !</Link>
          </li>
        </ul>
        {/* Dropdown */}
        <button
          onClick={() => setIsToggle((IsToggle) => !IsToggle)}
          className="flex ml-16 self-center lg:hidden"
        >
          <IoMdArrowDropdownCircle className=" text-white text-6xl" />
        </button>
      </div>

      <div className={`${IsToggle ? "top-0" : "-top-[480px] z-0"} lg:hidden opacity-95  transition-all duration-200 relative self-end flex-col bg-meadow-400 rounded-md p-4 w-2/5 h-full`}>
        <ul className="items-center gap-x-2">
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/works`}>Our Works</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/pricing`}>Pricing</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <Link href={`/about`}>About Us</Link>
          </li>
          <li className="text-xl text-white px-2 py-5">
            <button onClick={toggleSidebar}>Contact</button>
          </li>
          <li className="inline-flex gap-x-2 text-xl text-white px-2 py-5 group font-semibold">
            <Link href={`/workshop/booking`}>Booking</Link>
            <FaBookmark className="translate-y-1 text-white-300" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
