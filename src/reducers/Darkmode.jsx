import { useContext, createContext, useReducer } from "react";

const DarkmodeContext = createContext();

export const useDarkmode = () => {
  return useContext(DarkmodeContext);
};

export const ACTION = {
  TOGGLE_DARKMODE: "TOGGLE_DARKMODE",
  SET_DARKMODE: "SET_DARKMODE",
  SET_LIGHTMODE: "SET_LIGHTMODE",
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
    case ACTION.SET_DARKMODE:
      return {
        ...state,
        isDark: true,
      };
    case ACTION.SET_LIGHTMODE:
      return {
        ...state,
        isDark: false,
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
    <DarkmodeContext.Provider value={value}>
      {children}
    </DarkmodeContext.Provider>
  );
};
