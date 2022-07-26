export const colors = {
  violet: "#8338ec",
  white: "#fff",
  light: "#e7ecef",
  blue: "#3B44F6",
  red: "#ef233c",
  deedRed: "#d90429",
  green: "#38b000",
  muted: "#9999a1",
  dark: "#212529",
  black: "#000",
  pink: "#ff4d6d",
  ligthBlue: "#48cae4",
  ash: "#adb5bd",
  gold:"#fdc500"
};

export const fontSize = {
  sm: "0.8rem",
  n: "1rem",
  l: "1.2rem",
  xl: "1.5rem",
  xxl: "3rem",
};
export const spacing = {
  sm: "0.5rem",
  n: "1rem",
  l: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
};

export const fonts = {
  roboto: "Roboto",
  barlow: "Barlow",
  righteous: "Righteous",
};
//live url
//export const baseUrl = "https://pharmacybackend.gidcharityfoundation.org/api/pharmacy"
//live url
export const baseUrl = "https://pharmaplatbackend.onrender.com/api/pharmacy"

//local url
//export const baseUrl = "http://localhost:5000/api/pharmacy"
export const AdminRoutes = {
  adminLogin:`${baseUrl}/admin/login`,
  adminSignup:`${baseUrl}/admin/signup`,
  getSuppliers:`${baseUrl}/admin/all/suppliers`,
  getUsers:`${baseUrl}/admin/all/users`,
  verifySupplier:`${baseUrl}/admin/verify/supplier`,
  trustSupplier:`${baseUrl}/admin/trust/supplier`,
  verifyUser:`${baseUrl}/admin/verify/user`,
  suspendSupplier:`${baseUrl}/admin/suspend/supplier`,
  suspendUser:`${baseUrl}/admin/suspend/user`,
  adminNotification:`${baseUrl}/admin/all/notifications`,
  adminHelps:`${baseUrl}/admin/all/helps`,
  adminSingleHelp:`${baseUrl}/admin/single/help`,
  loadProducts:`${baseUrl}/admin/all/products`,
  verifyProduct:`${baseUrl}/admin/verify/product`,
  readNotification:`${baseUrl}/admin/read/notification`,
  readHelp:`${baseUrl}/admin/read/help`,
  updateAdminDetails:`${baseUrl}/admin/update/details`,
  loadProduct:`${baseUrl}/admin/product`,
  deleteProduct:`${baseUrl}/admin/delete/product`,
  loadCategories:`${baseUrl}/admin/all/categories`,
  deleteCategory:`${baseUrl}/admin/delete/category`,
  addCategory:`${baseUrl}/admin/add/category`,
  editCategory:`${baseUrl}/admin/edit/category`,
  loadCategory:`${baseUrl}/admin/category`,
  changeAttribute:`${baseUrl}/admin/edit/product/attribute`,
  loadUser:`${baseUrl}/admin/user`,
  loadSupplier:`${baseUrl}/admin/supplier`,
  deleteUser:`${baseUrl}/admin/delete/user`,
  loadPrescriptions:`${baseUrl}/admin/all/prescriptions`,
  respondPrescription:`${baseUrl}/admin/respond/prescription`,
  changePassword:`${baseUrl}/admin/change/password`,
  contactMessages:`${baseUrl}/admin/contact/messages`,
  readContactMessage:`${baseUrl}/admin/read/contact/message`,
  contactMessage:`${baseUrl}/admin/single/message`,
  allOrders:`${baseUrl}/admin/all/orders`,
  singleOrder:`${baseUrl}/admin/single/order`,
  supplierOrders:`${baseUrl}/admin/supplier/orders`,
  userOrders: `${baseUrl}/admin/user/orders`,
  changeDeliveryStatus:`${baseUrl}/admin/change/order/status`
}

export const SupplierRoutes = {
  supplierLogin:`${baseUrl}/supplier/login`,
  supplierSignup:`${baseUrl}/supplier/signup`,
  uploadProduct:`${baseUrl}/supplier/upload/product`,
  loadProducts:`${baseUrl}/supplier/products`,
  loadProduct:`${baseUrl}/supplier/product`,
  updateProduct:`${baseUrl}/supplier/update/product`,
  uploadProductImages:`${baseUrl}/supplier/upload/product/images`,
  deleteProductImages:`${baseUrl}/supplier/delete/product/image`,
  editProductImage:`${baseUrl}/supplier/edit/product/image`,
  deleteProduct:`${baseUrl}/supplier/delete/product`,
  getSubscribers:`${baseUrl}/supplier/all/subscribers`,
  getSubscriber:`${baseUrl}/supplier/user`,

  supplierNotification:`${baseUrl}/supplier/all/notifications`,
  readNotification:`${baseUrl}/supplier/read/notification`,

  uploadSupplierLicense:`${baseUrl}/supplier/upload/license`,
  updateSupplierDetails:`${baseUrl}/supplier/update/details`,
  addSupplierDetails:`${baseUrl}/supplier/add/details`,
  updateSupplierLogo:`${baseUrl}/supplier/edit/brandlogo`,
  requestHelp:`${baseUrl}/supplier/request/help`,
  loginWithGoogle:`${baseUrl}/supplier/google/login`,
  loadCategories:`${baseUrl}/supplier/all/categories`,
  loadProductOffers:`${baseUrl}/supplier/get/offers/product`,
  changePassword:`${baseUrl}/supplier/change/password`,
  
}

export const googleClientID = "357744610420-4g70eaul38cqa4pq0ai2qt80bt84gcda.apps.googleusercontent.com" ;