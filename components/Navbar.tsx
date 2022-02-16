import Link from "next/link";
import React, { useState } from "react";
import { useDarkMode } from "../libs/Stores";
import NavLink from "./NavLink";
import { AnimationProps, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkSwitch } = useDarkMode();

  const switchIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        {/* Menue Items */}
        <motion.div
          initial={{ display: "none" }}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: {
              opacity: 0,
              y: "-15%",
              transitionEnd: {
                display: "none",
              },
            },
            open: {
              opacity: 1,
              y: 0,
              display: "block",
            },
          }}
          transition={{
            bounce: true,
            ease: "easeInOut",
            duration: 0.8,
          }}
          className="fixed z-10 w-screen h-full bg-opacity-90 bg-slate-50 dark:bg-black dark:bg-opacity-80"
        >
          <div>
            <svg
              onClick={() => switchIsOpen()}
              className="absolute opacity-100 dark:fill-white top-4 right-4"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              viewBox="0 0 24 24"
            >
              <path d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-4.793 9.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
            </svg>
          </div>
          <div className="z-10 flex flex-col items-center justify-center h-full gap-4 ">
            <NavLink switchIsOpen={switchIsOpen} href="/">
              Home
            </NavLink>
            <NavLink switchIsOpen={switchIsOpen} href="/">
              Login
            </NavLink>

            <button
              onClick={isDarkSwitch}
              className="text-2xl font-bold text-black underline dark:text-white decoration-green-900 dark:decoration-sea-300"
            >
              Switch Theme
            </button>
          </div>
        </motion.div>

        <div className="flex justify-between px-3 py-4 -z-10">
          <Link href="/">
            <a className="text-2xl dark:font-light dark:text-white">
              Time Submit
            </a>
          </Link>

          <div
            onClick={() => switchIsOpen()}
            className="cursor-pointer dark:fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
