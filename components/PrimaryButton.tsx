import React, { FC } from "react";

interface ButtonInput extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton: FC<ButtonInput> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 text-white transition-all rounded cursor-pointer bg-sea-500 hover:bg-sea-500 dark:text-white w-52 dark:bg-sea-900 dark:hover:bg-sea-800 hover:-translate-y-1"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
