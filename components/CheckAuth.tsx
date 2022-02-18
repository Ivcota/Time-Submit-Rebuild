import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../libs/Firebase";
import { toast } from "react-hot-toast";
import { signOut } from "firebase/auth";

const CheckAuth: FC = ({ children }) => {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading !== true) {
      if (!user) {
        toast.error(`You are signed out`);
        router.push("/login");
      }
      if (user?.email !== "ivcotad@gmail.com") {
        signOut(auth);
      }
    }
  }, [user]);

  return <>{children}</>;
};

export default CheckAuth;
