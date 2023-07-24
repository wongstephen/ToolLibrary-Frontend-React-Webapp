import { useContext, createContext, useReducer } from "react";

const DarkModeContext = createContext();

export const useDarkmode = () => {
  return useContext(DarkModeContext);
};

export const ACTION = {
  TOGGLE_DARKMODE: "TOGGLE_DARKMODE",
};

const initalState = {
  isDark: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.TOGGLE_DARKMODE:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export const DarkmodeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const value = {
    state,
    dispatch,
  };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
