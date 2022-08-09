import { SupplierActionTypes } from "./SupplierActionTypes";
import Cookies from "js-cookie";
import axios from "axios";
import { SupplierRoutes } from "../../DefaultValues";

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
//action for upload product
const uploadProduct = (payload) => ({
  type: SupplierActionTypes.LOGOUT_SUPPLIER,
  payload: payload,
});
//action for upload additional product images
const uploadProductImages = (payload) => ({
  type: SupplierActionTypes.SUPPLIER_UPLOAD_ADDITIONAL_IMAGES,
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
        console.log("error",error);
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
      url: SupplierRoutes.uploadProductImages+"/"+form.product_id,
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
      url: SupplierRoutes.deleteProductImages+"/"+ product_id,
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
      url: SupplierRoutes.updateProduct + "/"+id,
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
