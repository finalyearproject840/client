import {
  AdminActionTypes
} from "./AdminActionTypes";
import Cookies from "js-cookie";
import axios from "axios";
import {
  AdminRoutes
} from "../../DefaultValues";

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

//verify Product
const VerifyProduct = (payload) => ({
  type: AdminActionTypes.VERIFY_PRODUCT,
  payload: payload,
});
//read notification
const readNotification = (payload) => ({
  type: AdminActionTypes.READ_NOTIFICATION,
  payload: payload,
});



//const admin load products start
const loadProductStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_PRODUCT,
});
//const admin load products success
const loadProductSuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_PRODUCT_SUCCESS,
  payload: payload,
});
//const admin load products fail
const loadProductFail = () => ({
  type: AdminActionTypes.ADMIN_LOAD_PRODUCT_FAIL,
});

//function load products function
export const loadProductFunc = () => {
  return (dispatch) => {
    dispatch(loadProductStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.loadProducts}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadProductSuccess(response.data.data));
        } else {
          dispatch(loadProductFail());
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadProductFail());
      });
  };
};


//const admin load notification start
const loadNotificationStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_NOTIFICATION,
});
//const admin load notification success
const loadNotificationSuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_NOTIFICATION_SUCCESS,
  payload: payload,
});
//const admin load notification fail
const loadNotificationFail = () => ({
  type: AdminActionTypes.ADMIN_LOAD_NOTIFICATION_FAIL,
});


//function load notification function
export const loadNotificationFunc = () => {
  return (dispatch) => {
    dispatch(loadNotificationStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.adminNotification}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadNotificationSuccess(response.data.data));
        } else {
          dispatch(loadNotificationFail());
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadNotificationFail());
      });
  };
};

//notification read function
export const readNotificationFunc = (id) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.readNotification,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: id,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch(loadNotificationSuccess(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


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
      headers: {
        Authorization: `Bearer ${token}`
      },
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
      data: {
        id: options.id,
        verify: options.verify
      },
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

//product verification function
export const VerifyProductFunc = (options) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.verifyProduct,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: options.id,
        verify: options.verify
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          dispatch(VerifyProduct(response.data.data));
        }
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
      data: {
        id: options.id,
        suspend: options.suspend
      },
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