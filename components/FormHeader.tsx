import React, { FC } from "react";

const FormHeader: FC = ({ children }) => {
  return <h1 className="mb-3 text-3xl font-light text-white "> {children} </h1>;
};

export default FormHeader;
