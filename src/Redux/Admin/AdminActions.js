import { AdminActionTypes } from "./AdminActionTypes";
import Cookies from "js-cookie";
import axios from "axios";
import { AdminRoutes } from "../../DefaultValues";
import {
  notifyError,
  notifySuccess,
  notifyWarning,
} from "../../Shared/Components/NotificationToast";

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
//action for loading all users
const loadAllUsers = (payload) => ({
  type: AdminActionTypes.GET_ALL_USERS,
  payload: payload,
});

//verify Product
const VerifyProduct = (payload) => ({
  type: AdminActionTypes.VERIFY_PRODUCT,
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

//const admin load categories start
const loadCategoryStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_CATEGORY,
});
//const admin load categories success
const loadCategorySuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_CATEGORY_SUCCESS,
  payload: payload,
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

//const admin load help start
const loadHelpStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_HELPS,
});
//const admin load help success
const loadHelpSuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_HELPS_SUCCESS,
  payload: payload,
});
//const admin load help fail
const loadHelpFail = () => ({
  type: AdminActionTypes.ADMIN_LOAD_HELPS_FAIL,
});

//const admin load contact messages start
const loadContactMessagesStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_CONTACT_MESSAGES,
});
//const admin load contact messages success
const loadContactMessagesSuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_CONTACT_MESSAGES_SUCCESS,
  payload: payload,
});
//const admin load contacts messages fail
const loadContactMessagesFail = () => ({
  type: AdminActionTypes.ADMIN_LOAD_CONTACT_MESSAGES_FAIL,
});

//const admin load prescription start
const loadPrescriptionsStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_PRESCRIPTIONS,
});
//const admin load prescription success
const loadPrescriptionsSuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_PRESCRIPTIONS_SUCCESS,
  payload: payload,
});
//const admin prescription fail
const loadPrescriptionsFail = () => ({
  type: AdminActionTypes.ADMIN_LOAD_PRESCRIPTIONS_FAIL,
});

//const admin load orders start
const loadOrdersStart = () => ({
  type: AdminActionTypes.ADMIN_START_LOAD_ORDERS,
});
//const admin load orders success
const loadOrdersSuccess = (payload) => ({
  type: AdminActionTypes.ADMIN_LOAD_ORDERS_SUCCESS,
  payload: payload,
});
//const admin orders fail
const loadOrdersFail = () => ({
  type: AdminActionTypes.ADMIN_LOAD_ORDERS_FAIL,
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
        dispatch(loadNotificationSuccess(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//function load help function
export const loadHelpFunc = () => {
  return (dispatch) => {
    dispatch(loadHelpStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.adminHelps}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadHelpSuccess(response.data.data));
        } else {
          dispatch(loadHelpFail());
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadHelpFail());
      });
  };
};
//notification read function
export const readHelpFunc = (id) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.readHelp,
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
        notifySuccess("Marked as read");
        dispatch(loadHelpSuccess(response.data.data));
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
    notifyWarning("You are logged out");
    dispatch(logoutAdmin(null));
  };
};

//Edit admin details
export const updateAdminFunc = (form, setSubmitting, handleRedirect) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: AdminRoutes.updateAdminDetails + "/" + form.id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: form,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("Profile info update successfully");
          const { data, token } = response.data;

          //store token and data inside cookies for future autorizations
          Cookies.set("token", token);
          Cookies.set("admin", JSON.stringify(data));

          dispatch(loadAdmin(response.data.data));
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          notifyError("response.data.msg");
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};
//change admin password
export const changePassword = (form, setSubmitting, resetForm) => {
  return () => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: AdminRoutes.changePassword + "/" + form.id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: form,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("Password successfully updated");
          resetForm({});
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
          resetForm({});
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Oops! something went wrong");
        resetForm({});
        console.log(error);
      });
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
        Authorization: `Bearer ${token}`,
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
        verify: options.verify,
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadAllSuppliers(response.data.data));
          if (options.verify) {
            notifySuccess("Supplier has been verified successfully");
          } else {
            notifySuccess("Supplier has be  unverified successfully");
          }
          if (options.singlePage !== undefined) {
            options.getSupplier();
          }
        } else {
          notifySuccess("Oops! error occurred");
        }
      })
      .catch(function (error) {
        notifyError("Something went wrong");
        console.log(error);
      });
  };
};
//supplier trust function
export const trustSupplierFunc = (options) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.trustSupplier,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: options.id,
        trust: options.trust,
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadAllSuppliers(response.data.data));
          if (options.trust) {
            notifySuccess("Supplier has been set as trusted");
          } else {
            notifySuccess("Supplier has been set as untrusted");
          }
          if (options.singlePage !== undefined) {
            options.getSupplier();
          }
        } else {
          notifySuccess("Oops! error occurred");
        }
      })
      .catch(function (error) {
        notifyError("Something went wrong");
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
        verify: options.verify,
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.success) {
          if (options.verify) {
            notifySuccess("Product verified successfully");
          } else {
            notifySuccess("Product unverified successfully");
          }
          if (options.singlePage !== undefined) {
            options.getProduct();
          }
          dispatch(VerifyProduct(response.data.data));
        }
      })
      .catch(function (error) {
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};
//change product attribute
export const changeProductAttribute = (options) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.changeAttribute + "/" + options.id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: options,
    };
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadProductSuccess(response.data.data));
          notifySuccess("Product changed successfully");
        } else {
          notifyError("Oops! something went wrong");
        }
      })
      .catch(function (error) {
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};

//supplier suspension function
export const suspendSupplierFunc = (options) => {
  console.log(options);
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
        suspend: options.suspend,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch(loadAllSuppliers(response.data.data));
        if (options.suspend) {
          notifySuccess("Supplier suspended successfully");
        } else {
          notifySuccess("Supplier unsuspend successfully");
        }
      })
      .catch(function (error) {
        notifyError("Something went wrong");
        console.log(error);
      });
  };
};
//admin delete product
export const deleteProductFunc = (data, handleRedirect) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");

    //config headers
    var config = {
      method: "delete",
      url: AdminRoutes.deleteProduct + "/" + data._id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          notifySuccess("Product deleted successfully");
          handleRedirect();
        } else {
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};
//function load categories function
export const loadCategoriesFunc = () => {
  return (dispatch) => {
    dispatch(loadCategoryStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.loadCategories}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          console.log(response.data.data);
          dispatch(loadCategorySuccess(response.data.data));
        } else {
          dispatch(loadCategorySuccess([]));
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadCategorySuccess([]));
      });
  };
};
//supplier delete product
export const deleteCategoryFunc = (data) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "delete",
      url: AdminRoutes.deleteCategory + "/" + data.id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          notifySuccess("Category deleted successfully");
          dispatch(loadCategoriesFunc());
        } else {
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};
//admin add category
export const addCategoryFunc = (
  form,
  setSubmitting,
  resetForm,
  handleRedirect
) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: AdminRoutes.addCategory,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: form,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("category added successfully");
          resetForm();
          handleRedirect();
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};
//admin edit category
export const editCategoryFunc = (
  form,
  setSubmitting,
  resetForm,
  handleRedirect
) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "put",
      url: AdminRoutes.editCategory + "/" + form.id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: form,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("category updated successfully");
          resetForm();
          handleRedirect();
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};

//function load users function
export const loadAllUsersFunc = () => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "get",
      url: AdminRoutes.getUsers,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch(loadAllUsers(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
//user verification function
export const verifyUserFunc = (options) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.verifyUser,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: options.id,
        verify: options.verify,
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadAllUsers(response.data.data));
          if (options.verify) {
            notifySuccess("user has been verified successfully");
          } else {
            notifySuccess("user has be  unverified successfully");
          }
        } else {
          notifyError("Something went wrong");
        }
      })
      .catch(function (error) {
        notifyError("Something went wrong");
        console.log(error);
      });
  };
};
//user suspension function
export const suspendUserFunc = (options) => {
  console.log(options);
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.suspendUser,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        id: options.id,
        suspend: options.suspend,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch(loadAllUsers(response.data.data));
        if (options.suspend) {
          notifySuccess("user suspended successfully");
        } else {
          notifySuccess("user unsuspend successfully");
        }
      })
      .catch(function (error) {
        notifyError("Something went wrong");
        console.log(error);
      });
  };
};

//admin delete user
export const deleteUserFunc = (data, handleRedirect) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "delete",
      url: AdminRoutes.deleteUser + "/" + data._id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          notifySuccess("User deleted successfully");
          handleRedirect();
        } else {
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};

//function load prescription function
export const loadPrescriptionsFunc = () => {
  return (dispatch) => {
    dispatch(loadPrescriptionsStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.loadPrescriptions}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadPrescriptionsSuccess(response.data.data));
        } else {
          dispatch(loadPrescriptionsFail());
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadPrescriptionsFail());
      });
  };
};
//admin add category
export const respondToPrescription = (form, setSubmitting, handleRedirect) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: AdminRoutes.respondPrescription + "/" + form.id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: form,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("Recommendation sent successfully");
          handleRedirect();
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Oops! something went wrong");
        console.log(error);
      });
  };
};

//function load help function
export const loadContactMessagesFunc = () => {
  return (dispatch) => {
    dispatch(loadContactMessagesStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.contactMessages}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadContactMessagesSuccess(response.data.data));
        } else {
          dispatch(loadContactMessagesFail());
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadContactMessagesFail());
      });
  };
};
//contact messages read function
export const readContactMessageFunc = (id) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    var config = {
      method: "post",
      url: AdminRoutes.readContactMessage,
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
        dispatch(loadContactMessagesSuccess(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//function load orders function
export const loadOrdersFunc = () => {
  return (dispatch) => {
    dispatch(loadOrdersStart());
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${AdminRoutes.allOrders}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          dispatch(loadOrdersSuccess(response.data.data));
        } else {
          dispatch(loadOrdersFail());
        }
      })
      .catch(function (error) {
        console.log("error", error);
        dispatch(loadProductFail());
      });
  };
};
//function set order as delivered
export const setDeliveryStatusFunc = (id) => {
  return (dispatch) => {
    const token = Cookies.get("token");
    let admin = Cookies.get("admin");
    admin = JSON.parse(admin);
    //config headers
    var config = {
      method: "post",
      url: `${AdminRoutes.changeDeliveryStatus}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        data: JSON.stringify({
          payload: {
            deliveryStatus: "delivered",
            delivered_On: new Date().toString(),
          },
        }),
      },
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          console.log(response.data.data);
          dispatch(loadOrdersSuccess(response.data.data));
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
};
