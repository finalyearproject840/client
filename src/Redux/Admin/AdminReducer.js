import { AdminActionTypes } from "./AdminActionTypes";

const initialState = {
  admin: null,
  suppliers: [],
  products: {
    loading: false,
    data: [],
    error: false,
  },
  categories: {
    loading: false,
    data: [],
  },

  notifications: {
    loading: false,
    data: [],
    error: false,
  },
};

export const AdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //load admin
    case AdminActionTypes.LOAD_ADMIN:
      return {
        ...state,
        admin: payload,
      };
    //logout admin
    case AdminActionTypes.LOGOUT_ADMIN:
      return {
        ...state,
        admin: payload,
      };
    //logout admin
    case AdminActionTypes.GET_ALL_SUPPLIERS:
      return {
        ...state,
        suppliers: payload,
      };

    //verify product
    case AdminActionTypes.VERIFY_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          data: payload,
        },
      };
    //start load product
    case AdminActionTypes.ADMIN_START_LOAD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          loading: true,
        },
      };
    // load product true
    case AdminActionTypes.ADMIN_LOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          data: payload,
        },
      };
    //start load categories
    case AdminActionTypes.ADMIN_START_LOAD_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          loading: true,
        },
      };
    // load categories true
    case AdminActionTypes.ADMIN_LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: {
          loading: false,
          data: payload,
        },
      };
    // load product true
    case AdminActionTypes.ADMIN_LOAD_PRODUCT_FAIL:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: true,
        },
      };
    //start load notification
    case AdminActionTypes.ADMIN_START_LOAD_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          loading: true,
        },
      };
    // load notification success
    case AdminActionTypes.ADMIN_LOAD_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          loading: false,
          data: payload,
        },
      };
    // load notification failed
    case AdminActionTypes.ADMIN_LOAD_NOTIFICATION_FAIL:
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
