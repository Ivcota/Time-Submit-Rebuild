import React from "react";
import { NextPage } from "next";
import CheckAuth from "../../components/CheckAuth";
import FadeInMotion from "./../../components/FadeInMotion";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import BaseText from "../../components/BaseText";
import FormHeader from "../../components/FormHeader";
import PrimaryButton from "../../components/PrimaryButton";

const DashboardPage: NextPage = () => {
  return (
    <CheckAuth>
      <FadeInMotion>
        <HighCenterPlacement>
          <FormHeader>Dashboard</FormHeader>
          <BaseText>What exactly are you trying to do?</BaseText>
          <div className="my-3">
            <PrimaryButton>Export Time</PrimaryButton>
          </div>
        </HighCenterPlacement>
      </FadeInMotion>
    </CheckAuth>
  );
};

export default DashboardPage;
