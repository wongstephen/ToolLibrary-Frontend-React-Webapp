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
      className="block w-full px-3 py-3 m-0 text-base font-normal text-gray-700 ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding ransition focus:text-gray-700 transisiton-all focus:outline-none"
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      required={required ? true : false}
    ></input>
  );
};
