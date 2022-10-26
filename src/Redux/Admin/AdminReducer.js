import { AdminActionTypes } from "./AdminActionTypes";

const initialState = {
  admin: null,
  suppliers: [],
  users: [],
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
  prescriptions: {
    loading: false,
    data: [],
    error: false,
  },
  helps: {
    loading: false,
    data: [],
    error: false,
  },
  contactMessages: {
    loading: false,
    data: [],
    error: false,
  },
  orders: {
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
    //load all suppliers
    case AdminActionTypes.GET_ALL_SUPPLIERS:
      return {
        ...state,
        suppliers: payload,
      };
    //load all users
    case AdminActionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: payload,
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
    //start load help
    case AdminActionTypes.ADMIN_START_LOAD_HELPS:
      return {
        ...state,
        helps: {
          ...state.helps,
          loading: true,
        },
      };
    // load help success
    case AdminActionTypes.ADMIN_LOAD_HELPS_SUCCESS:
      return {
        ...state,
        helps: {
          ...state.helps,
          loading: false,
          data: payload,
        },
      };
    // load help failed
    case AdminActionTypes.ADMIN_LOAD_HELPS_FAIL:
      return {
        ...state,
        helps: {
          ...state.helps,
          loading: false,
          error: true,
        },
      };

    //start load prescription
    case AdminActionTypes.ADMIN_START_LOAD_PRESCRIPTIONS:
      return {
        ...state,
        prescriptions: {
          ...state.prescriptions,
          loading: true,
        },
      };
    // load prescription success
    case AdminActionTypes.ADMIN_LOAD_PRESCRIPTIONS_SUCCESS:
      return {
        ...state,
        prescriptions: {
          ...state.prescriptions,
          loading: false,
          data: payload,
        },
      };
    // load prescription failed
    case AdminActionTypes.ADMIN_LOAD_PRESCRIPTIONS_FAIL:
      return {
        ...state,
        prescriptions: {
          ...state.prescriptions,
          loading: false,
          error: true,
        },
      };

    //start load contact messages
    case AdminActionTypes.ADMIN_START_LOAD_CONTACT_MESSAGES:
      return {
        ...state,
        contactMessage: {
          ...state.contactMessages,
          loading: true,
        },
      };
    // load help success
    case AdminActionTypes.ADMIN_LOAD_CONTACT_MESSAGES_SUCCESS:
      return {
        ...state,
        contactMessages: {
          ...state.contactMessages,
          loading: false,
          data: payload,
        },
      };
    // load contact messages failed
    case AdminActionTypes.ADMIN_LOAD_CONTACT_MESSAGES_FAIL:
      return {
        ...state,
        contactMessages: {
          ...state.contactMessages,
          loading: false,
          error: true,
        },
      };
    

       //start load orders
    case AdminActionTypes.ADMIN_START_LOAD_ORDERS:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: true,
        },
      };
    // load orders success
    case AdminActionTypes.ADMIN_LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false,
          data: payload,
        },
      };
    // load orders failed
    case AdminActionTypes.ADMIN_LOAD_ORDERS_FAIL:
      return {
        ...state,
        orders: {
          ...state.orders,
          loading: false,
          error: true,
        },
      };
    
      default:
      return state;
  }
};
