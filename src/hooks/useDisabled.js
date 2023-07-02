import { useState } from "react";

const useDisabled = (defaultValue) => {
  const [disabled, setDisabled] = useState(defaultValue);

  function disabledValue(value) {
    setDisabled(value);
  }
  return [disabled, disabledValue];
};

export default useDisabled;
