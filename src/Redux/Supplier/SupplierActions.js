import { SupplierActionTypes } from "./SupplierActionTypes";
import Cookies from "js-cookie";
import axios from "axios";
import { SupplierRoutes } from "../../DefaultValues";
import {
  notifyError,
  notifySuccess,
} from "../../Shared/Components/NotificationToast";

//redux action to load authenticated supplier from browser cookie
const loadSupplier = (payload) => ({
  type: SupplierActionTypes.LOAD_SUPPLIER,
  payload: payload,
});

//action for logout supplier
const logoutSupplier = (payload) => ({
  type: SupplierActionTypes.LOGOUT_SUPPLIER,
  payload: payload,
});

//const supplier load products start
const loadProductStart = () => ({
  type: SupplierActionTypes.SUPPLIER_START_LOAD_PRODUCT,
});
//const supplier load products success
const loadProductSuccess = (payload) => ({
  type: SupplierActionTypes.SUPPLIER_LOAD_PRODUCT_SUCCESS,
  payload: payload,
});
//const supplier load products fail
const loadProductFail = () => ({
  type: SupplierActionTypes.SUPPLIER_LOAD_PRODUCT_FAIL,
});

//const supplier load notification start
const loadNotificationStart = () => ({
  type: SupplierActionTypes.SUPPLIER_START_LOAD_NOTIFICATION,
});
//const supplier load notification success
const loadNotificationSuccess = (payload) => ({
  type: SupplierActionTypes.SUPPLIER_LOAD_NOTIFICATION_SUCCESS,
  payload: payload,
});
//const supplier load notification fail
const loadNotificationFail = () => ({
  type: SupplierActionTypes.SUPPLIER_LOAD_NOTIFICATION_FAIL,
});

//function load notification function
export const loadNotificationFunc = (id) => {
  return (dispatch) => {
    dispatch(loadNotificationStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${SupplierRoutes.suppllierNotification}/${id}`,
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
      url: SupplierRoutes.readNotification,
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
        dispatch(loadNotificationSuccess(response.data.data));
      })
      .catch(function (error) {
        notifyError("Failed Operation");
        console.log(error);
      });
  };
};


//function load products function
export const loadProductFunc = (id) => {
  return (dispatch) => {
    dispatch(loadProductStart());
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${SupplierRoutes.loadProducts}/${id}`,
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

//function load supplier function
export const loadSupplierFunc = () => {
  return (dispatch) => {
    let supplier = null;
    if (Cookies.get("supplier")) {
      supplier = Cookies.get("supplier");
      supplier = JSON.parse(supplier);
    }
    dispatch(loadSupplier(supplier));
  };
};

//function load supplier function
export const logoutSupplierFunc = () => {
  return (dispatch) => {
    Cookies.remove("supplier");
    Cookies.remove("token");
    dispatch(logoutSupplier(null));
    notifySuccess("Supplier logged out!")
  };
};

//supplier upload product function
export const uploadProductFunc = (
  form,
  setSubmitting,
  resetForm,
  supplier,
  handleRedirect
) => {
  return (dispatch) => {
    const formData = new FormData();
    //process images
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }
    //process other form input
    formData.append("name", form.name);
    formData.append("discount", form.discount);
    formData.append("quantity", form.quantity);
    formData.append("price", form.price);
    formData.append("expiry_date", form.expiry_date);
    formData.append("manufactured_date", form.manufactured_date);
    formData.append("category", form.category);
    formData.append("supplier_name", supplier.organisation);
    formData.append("supplier_id", supplier._id);
    formData.append("tags", form.tags);
    formData.append("description", form.description);
    formData.append("usage", form.usage);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.uploadProduct,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: formData,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("medicine uploaded successfully");
          resetForm({});
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        console.log(error);
      });
  };
};

//supplier upload product function
export const uploadProductImagesFunc = (
  form,
  setSubmitting,
  resetForm,
  handleRedirect
) => {
  return (dispatch) => {
    const formData = new FormData();
    //process images
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.uploadProductImages + "/" + form.product_id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: formData,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("Image uploaded successfully");
          dispatch(loadProductSuccess(response.data.data));
          console.log(response.data);
          resetForm({});
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        console.log(error);
      });
  };
};

//supplier delete product image
export const deleteProductImageFunc = (
  product_id,
  data,
  getData
) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.deleteProductImages + "/" + product_id,
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
          getData(product_id);
          notifySuccess("Image deleted successfully");
        } else {
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        notifyError("Opps! something went wrong");
        console.log(error);
      });
  };
};

//supplier edit product image
export const editProductImageFunc = (
  product_id,
  form,
  setSubmitting,
  resetForm,
  getData
) => {
  return (dispatch) => {
    const formData = new FormData();
    //process images
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }
    //process other form input
    formData.append("image_id", form.image_id);
    formData.append("location", form.location);

    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.editProductImage + "/" + product_id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: formData,
    };
    //axios
    setSubmitting(true);
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          resetForm({});
          setSubmitting(false);
          getData(product_id);
          notifySuccess("Image changed successfully");
        } else {
          resetForm({});
          setSubmitting(false);
          notifySuccess("Couldn't change image");
        }
      })
      .catch(function (error) {
        resetForm({});
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        console.log(error);
      });
  };
};

//supplier update product function
export const updateProductFunc = (
  id,
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
      url: SupplierRoutes.updateProduct + "/" + id,
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
          notifySuccess("Product details updated");
          resetForm({});
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        console.log(error);
      });
  };
};

//supplier upload license function
export const supplierUploadLicenseFunc = (
  form,
  setSubmitting,
  resetForm,
  handleNavigate
) => {
  return (dispatch) => {
    const formData = new FormData();
    //process lincense
    for (let i = 0; i < form.license.length; i++) {
      formData.append("license", form.license[i]);
    }
    formData.append("supplier_id", form.supplier_id);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.uploadSupplierLicense,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: formData,
    };
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("License upload successfully");
          dispatch(loadSupplier(response.data.data));
          resetForm({});
          handleNavigate();
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opp! something went wrong");
        console.log(error);
      });
  };
};

//Edit supplier details
export const updateSupplierFunc = (form, setSubmitting, handleRedirect) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.updateSupplierDetails + "/" + form.id,
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
          Cookies.set("supplier", JSON.stringify(data));

          dispatch(loadSupplier(response.data.data));
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          notifyError("response.data.msg");
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        console.log(error);
      });
  };
};

//supplier edit brand logo
export const editBrandLogoFunc = (
  form,
  setSubmitting,
  resetForm,
  handleNavigate
) => {
  return (dispatch) => {
    const formData = new FormData();
    //process images
    for (let i = 0; i < form.images.length; i++) {
      formData.append("images", form.images[i]);
    }
    //process other form input
    formData.append("old_logo", form.old_logo);
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.updateSupplierLogo + "/" + form.supplier_id,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: formData,
    };
    //axios
    setSubmitting(true);
    //axios
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          setSubmitting(false);
          notifySuccess("Brand Logo updated successfully");
          const { data, token } = response.data;
          //store token and data inside cookies for future autorizations
          Cookies.set("token", token);
          Cookies.set("supplier", JSON.stringify(data));
          resetForm();
          dispatch(loadSupplier(data));
          handleNavigate();
        } else {
          setSubmitting(false);
          notifyError("response.data.msg");
          resetForm();
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        resetForm();
        console.log(error);
      });
  };
};

//Edit supplier details
export const supplierHelpFunc = (
  form,
  setSubmitting,
  resetForm,
  supplier,
  handleRedirect
) => {
  return (dispatch) => {
    //for authentication
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "post",
      url: SupplierRoutes.requestHelp + "/" + supplier._id,
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
          notifySuccess("Successful! Your request for help has been sent");
          resetForm();
          handleRedirect();
        } else {
          setSubmitting(false);
          notifyError(response.data.msg);
          resetForm();
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        notifyError("Opps! something went wrong");
        resetForm();
        console.log(error);
      });
  };
};


