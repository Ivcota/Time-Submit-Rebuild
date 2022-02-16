import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import DelayedFadeIn from "../../components/DelayedFadeIn";
import FadeInMotion from "../../components/FadeInMotion";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryInput from "../../components/PrimaryInput";
import FormHeader from "./../../components/FormHeader";

const NamePage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <FadeInMotion>
        <HighCenterPlacement>
          <FormHeader>Enter Your Name</FormHeader>
          <div className="flex flex-col gap-2 md:w-64 ">
            <PrimaryInput placeholder="First Name" type="text" />
            <PrimaryInput placeholder="Last Name" type="text" />
          </div>
        </HighCenterPlacement>
      </FadeInMotion>
      <div className="flex justify-center mt-3">
        <DelayedFadeIn>
          <PrimaryButton onClick={() => router.push("/start/last-step")}>
            Next
          </PrimaryButton>
        </DelayedFadeIn>
      </div>
    </div>
  );
};

export default NamePage;
