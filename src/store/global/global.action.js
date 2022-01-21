export const GlobalAction = {
  spinnerLoading(isOpen) {
    return {
      type: "SPINNER_LOADING",
      isOpen,
    };
  },
};
