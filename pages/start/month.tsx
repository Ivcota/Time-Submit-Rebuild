import React, { useMemo } from "react";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import MidCenterPlacement from "../../components/MidCenterPlacement";
import Select from "react-select";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../libs/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import PrimaryButton from "../../components/PrimaryButton";
import { useFormik } from "formik";
import { useTimeFormStore } from "../../libs/Stores";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const SelectMonthPage = () => {
  const monthsRef = collection(db, "months");
  const q = query(monthsRef, orderBy("order", "desc"));
  const [months, loading, error] = useCollection(q);
  const { setMonth, congregation } = useTimeFormStore();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      month: "",
    },
    onSubmit: ({ month }) => {
      if (congregation !== "") {
        if (month !== "") {
          setMonth(month);
          router.push("/start/last-step");
        } else {
          toast.error("Please select a month.");
        }
      } else {
        toast.error("Please start from the beginning");
        router.push("/start");
      }
    },
  });

  const fluidOptions = useMemo(() => {
    return months?.docs.map((doc) => {
      return {
        value: doc.id,
        label: `${doc.data().month} ${doc.data().year}`,
      };
    });
  }, [months]);

  return (
    <FadeInMotion>
      <form onSubmit={formik.handleSubmit}>
        <MidCenterPlacement>
          <FormHeader> Select Month</FormHeader>
          <div className="mb-4 text-black w-52 md:w-64">
            <Select
              onChange={(e) => formik.setValues({ month: e?.value as string })}
              options={fluidOptions}
            />
          </div>
          <PrimaryButton>Next</PrimaryButton>
        </MidCenterPlacement>
      </form>
    </FadeInMotion>
  );
};

export default SelectMonthPage;
