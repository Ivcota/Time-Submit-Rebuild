import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Select from "react-select";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import MidCenterPlacement from "../../components/MidCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";

const FieldServiceGroup: NextPage = () => {
  const options = [{ value: "cYVyI6OyrkToFNQntzh9", label: "Diles Group" }];

  const router = useRouter();

  return (
    <FadeInMotion>
      <MidCenterPlacement>
        <FormHeader> Field Service Group</FormHeader>
        <div className="mb-4 text-black w-52 md:w-64">
          <Select options={options} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
        >
          <PrimaryButton onClick={() => router.push("/start/name")}>
            Next
          </PrimaryButton>
        </motion.div>
      </MidCenterPlacement>
    </FadeInMotion>
  );
};

export default FieldServiceGroup;
