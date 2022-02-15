import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Select from "react-select";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import MidCenterPlacement from "../../components/MidCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";
import { useRouter } from "next/router";

const StartFormPage = () => {
  const options = [{ value: "casa-grande-west", label: "Casa Grande West" }];

  const router = useRouter();

  return (
    <FadeInMotion>
      <MidCenterPlacement>
        <FormHeader>Congregation</FormHeader>
        <div className="mb-4 text-black w-52">
          <Select options={options} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
        >
          <PrimaryButton
            onClick={() => router.push("/start/field-service-group")}
          >
            Next
          </PrimaryButton>
        </motion.div>
      </MidCenterPlacement>
    </FadeInMotion>
  );
};

export default StartFormPage;
