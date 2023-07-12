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
      className="w-full p-4 font-light text-black transition ease-in-out bg-transparent border-2 border-gray-200 rounded-md focus:outline-theme-yellow"
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      required={required ? true : false}
    ></input>
  );
};
