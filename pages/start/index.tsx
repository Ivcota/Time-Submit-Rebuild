import { collection } from "firebase/firestore";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import Select from "react-select";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import MidCenterPlacement from "../../components/MidCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";
import { db } from "../../libs/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const StartFormPage = () => {
  const congregationsRef = collection(db, "congregations");
  const [data, loading, error] = useCollection(congregationsRef);

  const fluidOptionsArray = useMemo(() => {
    return data?.docs.map((congregation) => {
      return {
        value: congregation.id,
        label: congregation.data().name,
      };
    });
  }, [data]);

  const router = useRouter();

  useEffect(() => console.log(data?.docs), [data]);

  return (
    <FadeInMotion>
      <MidCenterPlacement>
        <FormHeader>Congregation</FormHeader>
        <div className="mb-4 text-black w-52 md:w-64">
          <Select options={fluidOptionsArray} />
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
