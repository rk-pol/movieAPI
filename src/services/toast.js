import { toast } from 'react-toastify';

const showErrorMessage = errMessage =>
  toast.error(errMessage, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: 'Zoom',
  });

export default showErrorMessage;
