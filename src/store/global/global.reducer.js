import { GlobalConstant } from "./global.constant";

export const GlobalReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case GlobalConstant.SPINNER_LOADING:
      return {
        ...state,
        loading: action.isOpen,
      };

    default:
      return state;
  }
};
