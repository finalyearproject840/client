import {
  AdminActionTypes
} from "./AdminActionTypes";

const initialState = {
  admin: null,
  suppliers: [],
};

export const AdminReducer = (state = initialState, {
  type,
  payload
}) => {
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
    default:
      return state;
  }
};