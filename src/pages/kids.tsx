import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Slider, CustomSlider } from "@/components/Slider";
import kids_items from "@/lib/kids_item";

const Kids = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center bg-[url('/images/img_kids.jpg')] w-full h-[100vh]">
        <div className="ml-10 shadow-xl">
          <p className="text-3xl lg:text-5xl text-white font-bold">WOODWORKING FOR KIDS</p>
          <p className="text-3xl text-white font-semibold">AGE 7 -12 </p>
          <p className="text-lg text-meadow-300">
            Get hands-on experience with Functional and Artistic Project
          </p>
        </div>
      </div>
      <div className="w-full h-20 bg-green-300 flex items-center justify-center font-bold text-2xl">
        CURRENTLY OFFERING
      </div>
      <Image
        src="/images/flexible_crop.jpg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />

      {/* Scheduling */}
      <div className="flex items-center justify-center w-full h-[50vh] bg-meadow-300">
        <div className="flex flex-col p-8 text-white gap-y-2">
          <p className="text-3xl lg:text-5xl font-semibold mb-4">FLEXIBLE SCHEDULING OPTIONS</p>
          <p className="text-xl">Duration: 9 March - 12 May 2024</p>
          <p className="text-xl">Timing: 2.30hr Class 9.30AM - 12PM </p>
          <p className="text-xl">Open by Appointment Only</p>
          <p className="text-xl">from Wednesday - Sunday</p>
          <p className="text-xl">Ages: 7 - 12 years old.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {kids_items.map((item: any[]) => {
          return <CustomSlider data={item}/>
        })}
        
      </div>
      
    </>
  );
};

export default Kids;
