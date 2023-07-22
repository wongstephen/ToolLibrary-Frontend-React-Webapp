const ACTION = {
  TOGGLE_DARKMODE: "TOGGLE_DARKMODE",
};

const reducer = (state = {}, action) => {
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

export default reducer;
