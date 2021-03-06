import { collection, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Select from "react-select";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import MidCenterPlacement from "../../components/MidCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";
import { db } from "../../libs/Firebase";
import { useTimeFormStore } from "../../libs/Stores";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";

const FieldServiceGroup: NextPage = () => {
  const router = useRouter();
  const { congregation, setFieldServiceGroup } = useTimeFormStore();
  const fieldServiceGroupsRef = collection(db, "field-service-groups");

  // Make this dynamic
  const q = query(
    fieldServiceGroupsRef,
    where("congregation", "==", congregation)
  );
  const [fieldServiceGroups, loading, error] = useCollection(q);

  const fluidOptions = useMemo(() => {
    return fieldServiceGroups?.docs.map((doc) => {
      return {
        value: doc.id,
        label: doc.data().name,
      };
    });
  }, [fieldServiceGroups]);

  useEffect(() => {
    if (congregation === "") {
      toast.error("Congregation not selected");
      router.push("/start");
    }
  }, [congregation]);

  const formik = useFormik({
    initialValues: {
      fieldServiceGroup: "",
    },
    onSubmit: ({ fieldServiceGroup }) => {
      if (fieldServiceGroup !== "") {
        setFieldServiceGroup(fieldServiceGroup);
        router.push("/start/name");
      } else {
        toast.error("Select a field service group");
      }
    },
  });

  return (
    <FadeInMotion>
      <form onSubmit={formik.handleSubmit}>
        <MidCenterPlacement>
          <FormHeader> Field Service Group</FormHeader>
          <div className="mb-4 text-black w-52 md:w-64">
            <Select
              onChange={(e) =>
                formik.setValues({ fieldServiceGroup: e?.value as string })
              }
              options={fluidOptions}
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

export default FieldServiceGroup;
