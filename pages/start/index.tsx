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
import { useFormik } from "formik";
import { useTimeFormStore } from "../../libs/Stores";
import { toast } from "react-hot-toast";

const StartFormPage = () => {
  const { setCongregation } = useTimeFormStore();

  const formik = useFormik({
    initialValues: {
      congregation: "",
    },
    onSubmit: ({ congregation }) => {
      if (congregation !== "") {
        setCongregation(congregation);
        router.push("/start/field-service-group");
      } else {
        toast.error("Please select a congregation");
      }
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <MidCenterPlacement>
          <FormHeader>Congregation</FormHeader>
          <div className="mb-4 text-black w-52 md:w-64">
            <Select
              name="congregation"
              onChange={(e) => {
                formik.setValues({
                  congregation: e?.value as string,
                });
              }}
              options={fluidOptionsArray}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", delay: 0.2 }}
          >
            <PrimaryButton>Next</PrimaryButton>
          </motion.div>
        </MidCenterPlacement>
      </form>
    </FadeInMotion>
  );
};

export default StartFormPage;
