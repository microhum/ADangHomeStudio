import { FC } from "react";
import { FaDog } from "react-icons/fa";
import { FaD } from "react-icons/fa6";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import useSidebarStore from "@/stores/SideBarStore";

const NavBar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)
  return (
    <nav className="fixed top-0 flex justify-around h-[10vh] w-full p-9 bg-meadow-300 z-40 drop-shadow-lg rounded-b-xl">
      <div className="relative inline-flex items-center gap-x-8">
        <img
          src="/images/logoweb.png"
          alt="Logo"
          className="relative w-28 rounded-s-xl"
        />
        {/* <FaDog size={40} color="white" /> */}
        <div className="text-sm sm:text-lg lg:text-2xl text-white">ADangHomeStudio</div>
      </div>
      <ul className="hidden items-center gap-x-2 lg:inline-flex lg:visible">
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
        <li className="inline-flex gap-x-2 text-2xl text-amber-300 hover:translate-y-2 hover:text-opacity-70 hover:underline transition duration-500 px-2 py-5 font-bold">
          <FaBookmark className="translate-y-1 text-amber-300"/>
          <Link href={`/booking`}>Book Now !</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
