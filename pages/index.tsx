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
          <h1 className="mb-3 text-3xl font-light">Time Submit</h1>
          <p className="mb-2 font-light">Let’s get your time submitted</p>
          <Link href="/start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
            >
              <a className="hidden px-6 py-3 mt-3 text-white transition-all rounded cursor-pointer md:block w-52 bg-sea-900 hover:bg-sea-800 hover:-translate-y-1">
                Start Now
              </a>
            </motion.div>
          </Link>
        </div>
      </FadeInMotion>

      <Link href="/start">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
          className="fixed px-6 py-3 text-white rounded cursor-pointer bottom-11 right-7 bg-sea-900 md:hidden hover:bg-sea-800"
        >
          Start Now
        </motion.a>
      </Link>
    </div>
  );
};

export default Home;
