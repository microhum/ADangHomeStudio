import { FC, HTMLAttributes } from "react";

interface AnimateFadedProps {
  children: React.ReactNode;
  isInView: boolean;
  duration?: number
  className?: string;
}

const AnimateFaded: FC<AnimateFadedProps> = ({ isInView, children, className, duration=1500}) => {
  return (
    <div
      className={`relative w-full transition-all ease-in duration-[${duration}ms] ${
        isInView ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export { AnimateFaded };
