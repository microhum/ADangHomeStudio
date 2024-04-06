import "@/styles/globals.css";
import "@/styles/embla.css";
import type { AppProps } from "next/app";
import { Questrial } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/loading";
import { useState } from "react";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  handleClick();
  return (
    <main
      className={`${questrial.className} text-zinc-700 cartoon-hero bg-repeat-y bg-center bg-contain`}
    >
      <Head>
        <title>A.DangHomeStudio</title>
      </Head>
      {/* Loading Screen */}
      <motion.div
        key="animation-on-state"
        animate={loading ? 'pageInitial' : 'pageAnimate'}
        variants={{
          pageInitial: {
            opacity: 1,
          },
          pageAnimate: {
            opacity: 0,
          },
        }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <LoadingScreen />
      </motion.div>
      {/* {loading ? <LoadingScreen /> : ""} */}
      <NavBar />
      {/* Page Transition */}
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
            scale: 1.0001,
          },
          pageAnimate: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </main>
  );
}
