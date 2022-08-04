import { SupplierActionTypes } from "./SupplierActionTypes";

const initialState = {
  supplier: null,
  products: {
    loading: false,
    data: [],
    error: false,
  },
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
    //start load product
    case SupplierActionTypes.SUPPLIER_START_LOAD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          loading: true,
        },
      };
    // load product true
    case SupplierActionTypes.SUPPLIER_LOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          data: payload,
        },
      };
    // load product true
    case SupplierActionTypes.SUPPLIER_LOAD_PRODUCT_FAIL:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
