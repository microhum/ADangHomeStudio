import { FC } from "react";

interface AnimateFadedProps {
  children: React.ReactNode;
  isInView: boolean;
  duration?: number
}

const AnimateFaded: FC<AnimateFadedProps> = ({ isInView, children, duration=1500}) => {
  return (
    <div
      className={`relative w-full transition-all ease-in duration-[${duration}ms] ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export { AnimateFaded };
