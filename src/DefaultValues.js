export const colors = {
  voilet: "#8338ec",
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
//export const baseUrl = "http://pharmacybackend.gidcharityfoundation.org/api/pharmacy"

//local url
export const baseUrl = "http://localhost:5000/api/pharmacy"
export const AdminRoutes = {
  adminLogin:`${baseUrl}/admin/login`,
  adminSignup:`${baseUrl}/admin/signup`,
  getSuppliers:`${baseUrl}/admin/all/suppliers`,
  verifySupplier:`${baseUrl}/admin/verify/supplier`,
  suspendSupplier:`${baseUrl}/admin/suspend/supplier`,
  adminNotification:`${baseUrl}/admin/all/notifications`,
  loadProducts:`${baseUrl}/admin/all/products`,
  verifyProduct:`${baseUrl}/admin/verify/product`,
  readNotification:`${baseUrl}/admin/read/notification`,
  updateAdminDetails:`${baseUrl}/admin/update/details`,
  loadProduct:`${baseUrl}/admin/product`,
  deleteProduct:`${baseUrl}/admin/delete/product`,
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

  supplierNotification:`${baseUrl}/supplier/all/notifications`,
  readNotification:`${baseUrl}/supplier/read/notification`,

  uploadSupplierLicense:`${baseUrl}/supplier/upload/license`,
  updateSupplierDetails:`${baseUrl}/supplier/update/details`,
  updateSupplierLogo:`${baseUrl}/supplier/edit/brandlogo`,
  requestHelp:`${baseUrl}/supplier/request/help`
}