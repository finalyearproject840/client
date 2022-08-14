import { toast } from 'react-toastify';

//success
export const notifySuccess = (msg) => toast.success(msg);
//warning
export const notifyError = (msg) => toast.error(msg);
//warning
export const notifyWarning = (msg) => toast.warning(msg);