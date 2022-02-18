import React from "react";
import BaseText from "../components/BaseText";
import FadeInMotion from "../components/FadeInMotion";
import FormHeader from "../components/FormHeader";
import MidCenterPlacement from "../components/MidCenterPlacement";
import PrimaryButton from "../components/PrimaryButton";

const LoginPage = () => {
  return (
    <div>
      <FadeInMotion>
        <MidCenterPlacement>
          <FormHeader>Login</FormHeader>
          <BaseText> View time that has been submitted</BaseText>
          <div className="mt-5">
            <PrimaryButton>Sign in with Google</PrimaryButton>
          </div>
        </MidCenterPlacement>
      </FadeInMotion>
    </div>
  );
};

export default LoginPage;
