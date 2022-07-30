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

export const baseUrl = "http://localhost:5000/api/pharmacy"
export const AdminRoutes = {
  getSuppliers:`${baseUrl}/admin/all/suppliers`,
  verifySupplier:`${baseUrl}/admin/verify/supplier`,
  suspendSupplier:`${baseUrl}/admin/suspend/supplier`,
}

export const SupplierRoutes = {
  uploadProduct:`${baseUrl}/supplier/upload/product`,
}