import { SupplierActionTypes } from "./SupplierActionTypes";

const initialState = {
  supplier: null,
  products: {
    loading: false,
    data: [],
    error: false,
  },
  notifications: {
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
       //start load notification
    case SupplierActionTypes.SUPPLIER_START_LOAD_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          loading: true,
        },
      };
    // load notification success
    case SupplierActionTypes.SUPPLIER_LOAD_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          loading: false,
          data: payload,
        },
      };
    // load notification failed
    case SupplierActionTypes.SUPPLIER_LOAD_NOTIFICATION_FAIL:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          loading: false,
          error: true,
        },
      };
      
    default:
      return state;
  }
};
