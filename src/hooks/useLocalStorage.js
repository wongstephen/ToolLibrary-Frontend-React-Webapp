import -  React, { useState, useEffect } from "react";
   
function getLocalStorageValue(key, initalValue) {
  const localStorageValue = JSON.parse(localStorage.getItem(key));
  if (localStorageValue) return localStorageValue;
  if (localStorageValue instanceof Function) return initalValue();
  return initalValue;
}
export default function useLocalStorage(initialValue) {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(initialValue);
  });
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
