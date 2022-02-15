import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInMotion from "../../components/FadeInMotion";
import PrimaryInput from "../../components/PrimaryInput";
import PrimaryButton from "../../components/PrimaryButton";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import FormHeader from "./../../components/FormHeader";

const NamePage: NextPage = () => {
  return (
    <div>
      <FadeInMotion>
        <HighCenterPlacement>
          <FormHeader>Enter Your Name</FormHeader>
          <div className="flex flex-col gap-2 ">
            <PrimaryInput placeholder="First Name" type="text" />
            <PrimaryInput placeholder="Last Name" type="text" />
          </div>
        </HighCenterPlacement>
      </FadeInMotion>
      <div className="flex justify-center mt-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
        >
          <PrimaryButton>Next</PrimaryButton>
        </motion.div>
      </div>
    </div>
  );
};

export default NamePage;
