import { LuConstruction } from "react-icons/lu";

const About = () => {
  return (
      <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 w-full h-[100vh]">
        <p className="uppercase text-6xl text-white">Under Construction</p>
        <LuConstruction className="animate-pulse" fill="yellow" size={200}/>
      </div>
  );
};

export default About;
