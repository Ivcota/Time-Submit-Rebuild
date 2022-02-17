import { useFormik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import DelayedFadeIn from "../../components/DelayedFadeIn";
import FadeInMotion from "../../components/FadeInMotion";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryInput from "../../components/PrimaryInput";
import { useTimeFormStore } from "../../libs/Stores";
import FormHeader from "./../../components/FormHeader";

const NamePage: NextPage = () => {
  const router = useRouter();
  const { setFirstName, setLastName, congregation } = useTimeFormStore();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: ({ firstName, lastName }) => {
      if (congregation !== "") {
        if (firstName !== "" && lastName !== "") {
          setFirstName(firstName);
          setLastName(lastName);
          router.push("/start/month");
        } else {
          toast.error("Please enter your name.");
        }
      } else {
        toast.error("Please start from the beginning");
        router.push("/start");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FadeInMotion>
          <HighCenterPlacement>
            <FormHeader>Enter Your Name</FormHeader>
            <div className="flex flex-col gap-2 md:w-64 ">
              <PrimaryInput
                onChange={formik.handleChange}
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <PrimaryInput
                onChange={formik.handleChange}
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </HighCenterPlacement>
        </FadeInMotion>
        <div className="flex justify-center mt-3">
          <DelayedFadeIn>
            <PrimaryButton>Next</PrimaryButton>
          </DelayedFadeIn>
        </div>
      </form>
    </div>
  );
};

export default NamePage;
