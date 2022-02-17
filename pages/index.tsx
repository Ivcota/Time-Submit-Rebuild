import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import FadeInMotion from "../components/FadeInMotion";
import PrimaryButton from "../components/PrimaryButton";

const Home: NextPage = () => {
  return (
    <div className="">
      <FadeInMotion>
        <div className="text-center dark:text-white mt-[28vh] flex flex-col justify-center items-center">
          <h1 className="mb-3 text-3xl font-bold dark:font-light">
            Time Submit
          </h1>
          <p className="mb-4 dark:font-light">Let’s get your time submitted</p>
          <div className="hidden md:block">
            <Link href="/start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", delay: 0.2 }}
              >
                <PrimaryButton>Start Now</PrimaryButton>
              </motion.div>
            </Link>
          </div>
        </div>
      </FadeInMotion>

      <Link href="/start">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
          className="fixed px-6 py-3 text-white rounded cursor-pointer bottom-11 right-7 bg-sea-500 hover:bg-sea-500 dark:bg-sea-900 md:hidden dark:hover:bg-sea-800"
        >
          Start Now
        </motion.a>
      </Link>
    </div>
  );
};

export default Home;
