import React from "react";

export const InputText = ({
  placeholder,
  type,
  name,
  onChange,
  required,
  pattern,
}) => {
  return (
    <input
      className="w-full p-3 text-sm font-light transition-all ease-in-out bg-gray-800 text-light-gray focus:text-white"
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      required={required ? true : false}
    ></input>
  );
};
