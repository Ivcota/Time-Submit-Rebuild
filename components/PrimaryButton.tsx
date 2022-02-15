import React, { FC } from "react";

interface ButtonInput extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton: FC<ButtonInput> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 text-white transition-all rounded cursor-pointer w-52 bg-sea-900 hover:bg-sea-800 hover:-translate-y-1"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
