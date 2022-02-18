import React from "react";
import { NextPage } from "next";
import CheckAuth from "../../components/CheckAuth";
import FadeInMotion from "./../../components/FadeInMotion";

const DashboardPage: NextPage = () => {
  return (
    <CheckAuth>
      <FadeInMotion>
        <h1>Hello</h1>
      </FadeInMotion>
    </CheckAuth>
  );
};

export default DashboardPage;
