import { setDoc } from "@firebase/firestore";
import { doc } from "firebase/firestore";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import MidCenterPlacement from "../../components/MidCenterPlacement";
import { db } from "../../libs/Firebase";
import { useTimeFormStore } from "../../libs/Stores";
import { useRouter } from "next/router";
import BaseText from "../../components/BaseText";

const SuccessPage = () => {
  const {
    firstName,
    lastName,
    congregation,
    fieldServiceGroup,
    month,
    hours,
    placements,
    videos,
    returnVisits,
    bibleStudies,
    comments,
  } = useTimeFormStore();

  const router = useRouter();

  const sendDoc = async () => {
    toast.promise(
      setDoc(
        doc(
          db,
          "submitted-time",
          `${firstName}-${lastName} ${month} ${fieldServiceGroup} `
        ),
        {
          firstName,
          lastName,
          month,
          hours,
          placements,
          videos,
          fieldServiceGroup,
          congregation,
          bibleStudies,
          returnVisits,
          comments,
        }
      ),
      {
        loading: "Turning your time in...",
        error: <b>Could not send.</b>,
        success: <b>Time has been submitted!</b>,
      },
      {
        style: {
          fontWeight: "normal",
        },
      }
    );
  };

  useEffect(() => {
    if (hours === 0) {
      console.log(hours);
      router.push("/");
    } else {
      sendDoc();
    }
  }, []);

  return (
    <div>
      <FadeInMotion>
        <MidCenterPlacement>
          <FormHeader> Success </FormHeader>
          <BaseText>Thank you {firstName}! </BaseText>
          <BaseText>Your time has been submitted </BaseText>
        </MidCenterPlacement>
      </FadeInMotion>
    </div>
  );
};

export default SuccessPage;
