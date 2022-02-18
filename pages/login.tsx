import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import BaseText from "../components/BaseText";
import FadeInMotion from "../components/FadeInMotion";
import FormHeader from "../components/FormHeader";
import MidCenterPlacement from "../components/MidCenterPlacement";
import PrimaryButton from "../components/PrimaryButton";
import { auth } from "../libs/Firebase";

const LoginPage = () => {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <FadeInMotion>
        <MidCenterPlacement>
          {user ? (
            <>
              <FormHeader>Sign Out</FormHeader>
            </>
          ) : (
            <>
              <FormHeader>Login</FormHeader>
              <BaseText> View time that has been submitted</BaseText>
            </>
          )}

          <div className="mt-5">
            {user ? (
              <PrimaryButton onClick={() => signOut(auth)}>
                Sign Out
              </PrimaryButton>
            ) : (
              <PrimaryButton
                onClick={() => {
                  signInWithPopup(auth, new GoogleAuthProvider());
                }}
              >
                Sign in with Google
              </PrimaryButton>
            )}
          </div>
        </MidCenterPlacement>
      </FadeInMotion>
    </div>
  );
};

export default LoginPage;
