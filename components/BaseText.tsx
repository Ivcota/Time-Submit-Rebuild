import React, { FC } from "react";

const BaseText: FC = ({ children }) => {
  return <p className="text-black dark:text-white">{children}</p>;
};

export default BaseText;
