import { NextPage } from "next";
import React from "react";
import toast from "react-hot-toast";
import DelayedFadeIn from "../../components/DelayedFadeIn";
import FadeInMotion from "../../components/FadeInMotion";
import FormHeader from "../../components/FormHeader";
import HighCenterPlacement from "../../components/HighCenterPlacement";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryInput from "../../components/PrimaryInput";
import { useFormik } from "formik";
import { useTimeFormStore } from "../../libs/Stores";
import { useRouter } from "next/router";

const LastStepPage: NextPage = () => {
  const router = useRouter();

  const {
    firstName,
    setHours,
    setPlacements,
    setVideos,
    setReturnVisits,
    setBibleStudies,
    setComments,
  } = useTimeFormStore();

  interface IFormik {
    hours: number | null;
    placements: number | null;
    videos: number | null;
    returnVisits: number | null;
    bibleStudies: number | null;
    comments: string | null;
  }

  const formik = useFormik<IFormik>({
    initialValues: {
      hours: null,
      placements: null,
      videos: null,
      returnVisits: null,
      bibleStudies: null,
      comments: null,
    },
    onSubmit: ({
      bibleStudies,
      hours,
      placements,
      returnVisits,
      videos,
      comments,
    }) => {
      if (firstName !== "") {
        setBibleStudies(bibleStudies as number);
        setPlacements(placements as number);
        setHours(hours as number);
        setReturnVisits(returnVisits as number);
        setVideos(videos as number);
        setComments(comments);

        router.push("/start/success");
      } else {
        toast.error("Please restart");
        router.push("/start");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FadeInMotion>
          <HighCenterPlacement>
            <FormHeader> Almost Done...</FormHeader>
            <div className="flex flex-col gap-2 mt-1 mb-4 md:w-64">
              <PrimaryInput
                required={true}
                onChange={formik.handleChange}
                name="hours"
                type="number"
                placeholder="Hours"
              />
              <PrimaryInput
                required={true}
                name="placements"
                type="number"
                placeholder="Placements"
                onChange={formik.handleChange}
              />
              <PrimaryInput
                required={true}
                name="videos"
                type="number"
                placeholder="Videos"
                onChange={formik.handleChange}
              />
              <PrimaryInput
                name="returnVisits"
                required={true}
                type="number"
                placeholder="Return Visits"
                onChange={formik.handleChange}
              />
              <PrimaryInput
                name="bibleStudies"
                required={true}
                type="number"
                placeholder="Bible Studies"
                onChange={formik.handleChange}
              />
              <PrimaryInput
                name="comments"
                required={true}
                type="text"
                placeholder="Comments"
                onChange={formik.handleChange}
              />
            </div>
            <DelayedFadeIn>
              <PrimaryButton>Submit</PrimaryButton>
            </DelayedFadeIn>
          </HighCenterPlacement>
        </FadeInMotion>
      </form>
    </div>
  );
};

export default LastStepPage;
