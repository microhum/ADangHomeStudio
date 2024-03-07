import { FC } from "react";
import { FaDog } from "react-icons/fa";
import { FaD } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="fixed top-0 flex justify-between h-[5vh] w-full p-9 bg-meadow-300 z-50 drop-shadow-lg">
      <div className="relative inline-flex items-center gap-x-8">
        <img src="/images/logoweb.png" alt="Logo" className="relative w-28 rounded-s-xl" />
        {/* <FaDog size={40} color="white" /> */}
        <div className="text-2xl text-white">ADangHomeStudio</div>
      </div>
      <div className="hidden items-center gap-x-8 lg:inline-flex lg:visible">
          <p className="text-xl text-white hover:text-opacity-70 hover:underline">
            Our Works
          </p>
          <p className="text-xl text-white hover:text-opacity-70 hover:underline">
            Pricing
          </p>
          <p className="text-xl text-white hover:text-opacity-70 hover:underline">
            About Us
          </p>
          <p className="text-xl text-white hover:text-opacity-70 hover:underline">
            Contact
          </p>
      </div>
    </nav>
  );
};

export default NavBar;
