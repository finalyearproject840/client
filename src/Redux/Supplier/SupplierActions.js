import {
  SupplierActionTypes
} from "./SupplierActionTypes";
import Cookies from "js-cookie";
import axios from "axios";
import {
  SupplierRoutes
} from "../../DefaultValues";

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
export const loadNotificationFunc = () => {
  return (dispatch) => {
    dispatch(loadNotificationStart());
    //for authorization
    const token = Cookies.get("token");
    //config headers
    var config = {
      method: "get",
      url: `${SupplierRoutes.suppllierNotification}`,
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
        console.log(response.data);
        dispatch(loadNotificationSuccess(response.data.data));
      })
      .catch(function (error) {
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
  };
};

//supplier upload product function
export const uploadProductFunc = (
  form,
  setSubmitting,
  resetForm,
  setSubmissionError,
  supplier,
  setSuccess,
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
          setSubmissionError({
            error: false,
          });
          setSuccess({
            title: "Successful",
            msg: "product uploaded",
            show: true,
          });
          console.log(response.data);
          resetForm({});
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "couldn't upload product",
        });
        console.log(error);
      });
  };
};

//supplier upload product function
export const uploadProductImagesFunc = (
  form,
  setSubmitting,
  resetForm,
  setSubmissionError,
  supplier,
  setSuccess,
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
          setSubmissionError({
            error: false,
          });
          setSuccess({
            title: "Successful",
            msg: "product uploaded",
            show: true,
          });
          dispatch(loadProductSuccess(response.data.data));
          console.log(response.data);
          resetForm({});
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "couldn't upload images",
        });
        console.log(error);
      });
  };
};


//supplier delete product image
export const deleteProductImageFunc = (
  product_id,
  data,
  setSubmissionError,
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
        } else {
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
        }
      })
      .catch(function (error) {
        setSubmissionError({
          error: true,
          msg: "couldn't delete the image",
        });
        console.log(error);
      });
  };
};

//supplier edit product image
export const editProductImageFunc = (
  product_id,
  form,
  setSubmissionError,
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
          resetForm({})
          setSubmitting(false);
          getData(product_id);
        } else {
          resetForm({})
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
        }
      })
      .catch(function (error) {
        resetForm({})
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "couldn't edit the image",
        });
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
  setSubmissionError,
  supplier,
  setSuccess,
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
          setSubmissionError({
            error: false,
          });
          setSuccess({
            title: "Successful",
            msg: "product uploaded",
            show: true,
          });
          console.log(response.data);
          resetForm({});
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "couldn't upload product",
        });
        console.log(error);
      });
  };
};

//supplier upload license function
export const supplierUploadLicenseFunc = (
  form,
  setSubmitting,
  resetForm,
  setSubmissionError,
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
          setSubmissionError({
            error: false,
          });
          dispatch(loadSupplier(response.data.data));
          resetForm({});
          handleNavigate();
        } else {
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "couldn't upload images",
        });
        console.log(error);
      });
  };
};

//Edit supplier details
export const updateSupplierFunc = (
  form,
  setSubmitting,
  setSubmissionError,
  setSuccess,
  handleRedirect
) => {
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
          setSubmissionError({
            error: false,
          });
          setSuccess({
            title: "Successful",
            msg: "update successful",
            show: true,
          });
          const { data, token } = response.data;

          //store token and data inside cookies for future autorizations
          Cookies.set("token", token);
          Cookies.set("supplier", JSON.stringify(data));

          dispatch(loadSupplier(response.data.data))
          handleRedirect(response.data.data._id);
        } else {
          setSubmitting(false);
          setSubmissionError({
            error: true,
            msg: response.data.msg,
          });
          console.log(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        setSubmissionError({
          error: true,
          msg: "couldn't upload product",
        });
        console.log(error);
      });
  };
};