import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="dark">
      <div className="bg-sea-700 h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
