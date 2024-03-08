import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Questrial } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import ContactSideBar from "@/components/ContactSideBar";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={questrial.className}>
      <Head>
        <title>ADangHomeStudio</title>
      </Head>
      <NavBar/>
      <ContactSideBar/>
      <Component {...pageProps} />;
    </main>
  );
}
