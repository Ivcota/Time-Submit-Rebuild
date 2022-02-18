import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../libs/Firebase";
import { toast } from "react-hot-toast";

const CheckAuth: FC = ({ children }) => {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading !== true) {
      if (!user) {
        toast.error(`You're not authorized`);
        router.push("/login");
      }
    }
  }, [user]);

  return <>{children}</>;
};

export default CheckAuth;
