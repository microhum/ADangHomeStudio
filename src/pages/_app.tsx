import "@/styles/globals.css";
import "@/styles/embla.css";
import type { AppProps } from "next/app";
import { Questrial } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main
      className={`${questrial.className} cartoon-hero bg-repeat-y bg-center bg-contain`}
    >
      <Head>
        <title>A.DangHomeStudio</title>
      </Head>
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
