import React, { FC } from "react";

const HighCenterPlacement: FC = ({ children }) => {
  return <div className="flex flex-col items-center mt-32">{children}</div>;
};

export default HighCenterPlacement;
