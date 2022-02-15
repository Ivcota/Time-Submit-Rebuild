import React, { FC } from "react";

const MidCenterPlacement: FC = ({ children }) => {
  return (
    <div className="mt-[28vh] flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default MidCenterPlacement;
