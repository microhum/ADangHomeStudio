import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Questrial } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import ContactSideBar from "@/components/ContactSideBar";
import Footer from "@/components/Footer"
const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${questrial.className} cartoon-hero bg-repeat-y bg-center bg-contain`} >
      <Head>
        <title>A.DangHomeStudio</title>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  ); 
}
