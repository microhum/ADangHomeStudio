import { GiWoodBeam } from "react-icons/gi";

const LoadingScreen = () => {
  return (
    <div className="fixed flex flex-col z-50 bg-meadow-400 w-full h-screen items-center justify-center top-0 overflow-hidden pointer-events-none">
      <GiWoodBeam className="hidden lg:flex text-amber-600 h-36 w-36 animate-bounce" />
    </div>
  );
};

export default LoadingScreen;
