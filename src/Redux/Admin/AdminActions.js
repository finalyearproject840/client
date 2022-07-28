import { AdminActionTypes } from "./AdminActionTypes";
import Cookies from "js-cookie";
import axios from "axios";
import { AdminRoutes } from "../../DefaultValues";

//redux action to load authenticated admin from browser cookie
const loadAdmin = (payload) => ({
  type: AdminActionTypes.LOAD_ADMIN,
  payload: payload,
});

//action for logout admin
const logoutAdmin = (payload) => ({
  type: AdminActionTypes.LOGOUT_ADMIN,
  payload: payload,
});

//action for loading all suppliers
const loadAllSuppliers = (payload) => ({
  type: AdminActionTypes.GET_ALL_SUPPLIERS,
  payload: payload,
});
//verify supplier
const VerifySupplier = (payload) => ({
  type: AdminActionTypes.VERIFY_SUPPLIER,
  payload: payload,
});

//function load admin function
export const loadAdminFunc = () => {
  return (dispatch) => {
    let admin = null;
    if (Cookies.get("admin")) {
      admin = Cookies.get("admin");
      admin = JSON.parse(admin);
    }
    //console.log(admin);
    dispatch(loadAdmin(admin));
  };
};
//function load admin function
export const logoutAdminFunc = () => {
  return (dispatch) => {
    Cookies.remove("admin");
    Cookies.remove("token");
    //console.log(admin);
    dispatch(logoutAdmin(null));
  };
};
//function load admin function
export const loadAllSuppliersFunc = () => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "get",
      url: AdminRoutes.getSuppliers,
      headers: { Authorization: `Bearer ${token}` },
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch(loadAllSuppliers(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
//supplier verification function
export const VerifySupplierFunc = (options) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.verifySupplier,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: { id: options.id, verify: options.verify },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch(loadAllSuppliers(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//supplier suspension function
export const suspendSupplierFunc = (options) => {
  console.log(options)
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.suspendSupplier,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: { id: options.id, suspend: options.suspend },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch(loadAllSuppliers(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
