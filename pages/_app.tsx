import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../libs/Stores";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { isDark, restoreIsDark } = useDarkMode();

  useEffect(() => {
    restoreIsDark();
  }, []);

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="min-h-screen bg-sea-50 dark:bg-sea-700">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Toaster />
    </div>
  );
}

export default MyApp;
