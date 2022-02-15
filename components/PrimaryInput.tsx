import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const PrimaryInput: FC<InputProps> = ({
  value,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="px-3 py-2 transition-all duration-300 rounded shadow-xl outline-none focus:ring ring-blue-400"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default PrimaryInput;
