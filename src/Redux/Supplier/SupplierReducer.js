import { SupplierActionTypes } from "./SupplierActionTypes";

const initialState = {
  supplier: null,
};

export const SupplierReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //load supplier
    case SupplierActionTypes.LOAD_SUPPLIER:
      return {
        ...state,
        supplier: payload,
      };
    //logout supplier
    case SupplierActionTypes.LOGOUT_SUPPLIER:
      return {
        ...state,
        supplier: payload,
      };
    default:
      return state;
  }
};
