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
      className="w-full p-4 font-light text-white transition ease-in-out bg-transparent bg-gray-700 border-none focus:bg-gray-600 focus:border-none focus:outline-none "
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      required={required ? true : false}
    ></input>
  );
};
