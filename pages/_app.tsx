import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../libs/Stores";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { isDark } = useDarkMode();

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="h-screen bg-sea-200 dark:bg-sea-700">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Toaster />
    </div>
  );
}

export default MyApp;
