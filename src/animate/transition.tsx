import { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";
interface AnimateFadedProps {
  children: React.ReactNode;
  isInView: boolean;
  duration?: number;
  className?: string;
}

const variant = {
  pageInitial: {
    opacity: 1,
  },
  pageAnimate: {
    opacity: 0,
  },
};
const AnimateFaded: FC<AnimateFadedProps> = ({
  isInView,
  children,
  className,
  duration = 10000,
}) => {
  return (
    <motion.div
      key="animation-on-state"
      animate={isInView ? "pageInitial" : "pageAnimate"}
      variants={variant}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className={`relative w-full transition-all ease-in`}
    >
      {children}
    </motion.div>
  );
};

export { AnimateFaded };
