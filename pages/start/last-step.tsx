import React from "react";
import { NextPage } from "next";
import FadeInMotion from "../../components/FadeInMotion";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import FormHeader from "../../components/FormHeader";
import PrimaryInput from "../../components/PrimaryInput";
import PrimaryButton from "../../components/PrimaryButton";
import DelayedFadeIn from "../../components/DelayedFadeIn";
import toast from "react-hot-toast";

const LastStepPage: NextPage = () => {
  return (
    <div>
      <FadeInMotion>
        <HighCenterPlacement>
          <FormHeader> Almost Done...</FormHeader>
          <div className="flex flex-col gap-2 mt-1 mb-4">
            <PrimaryInput placeholder="Hours" />
            <PrimaryInput placeholder="Placements" />
            <PrimaryInput placeholder="Videos" />
            <PrimaryInput placeholder="Return Visits" />
            <PrimaryInput placeholder="Bible Studies" />
          </div>
          <DelayedFadeIn>
            <PrimaryButton onClick={() => toast.success("Done")}>
              Submit
            </PrimaryButton>
          </DelayedFadeIn>
        </HighCenterPlacement>
      </FadeInMotion>
    </div>
  );
};

export default LastStepPage;
