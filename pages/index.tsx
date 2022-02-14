import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import FadeInMotion from "../components/FadeInMotion";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="">
      <FadeInMotion>
        <div className="text-center text-white mt-[28vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-light">Time Submit</h1>
          <p className="font-light">Let’s get your time submitted</p>
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
            >
              <a className="   md:block hidden  mt-3 bg-sea-900 text-white py-3 px-6 rounded hover:bg-sea-800 cursor-pointer transition-all hover:-translate-y-1">
                Start Now
              </a>
            </motion.div>
          </Link>
        </div>
      </FadeInMotion>

      <Link href="/">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
          className="fixed bottom-11 right-7 bg-sea-900 text-white py-3 px-6 rounded md:hidden hover:bg-sea-800 cursor-pointer"
        >
          Start Now
        </motion.a>
      </Link>
    </div>
  );
};

export default Home;
