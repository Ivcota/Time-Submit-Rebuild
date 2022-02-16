import React from "react";
import { NextPage } from "next";
import FadeInMotion from "../../components/FadeInMotion";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import FormHeader from "../../components/FormHeader";
import PrimaryInput from "../../components/PrimaryInput";
import PrimaryButton from "../../components/PrimaryButton";

const LastStepPage: NextPage = () => {
  return (
    <div>
      <FadeInMotion>
        <HighCenterPlacement>
          <FormHeader> Almost Done </FormHeader>
          <div className="flex flex-col gap-2 mb-3">
            <PrimaryInput placeholder="Hours" />
            <PrimaryInput placeholder="Placements" />
            <PrimaryInput placeholder="Videos" />
            <PrimaryInput placeholder="Return Visits" />
            <PrimaryInput placeholder="Bible Studies" />
          </div>
          <PrimaryButton>Submit</PrimaryButton>
        </HighCenterPlacement>
      </FadeInMotion>
    </div>
  );
};

export default LastStepPage;
