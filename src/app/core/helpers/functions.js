import { toast } from 'react-hot-toast';

export function handlerError(error) {
  toast.error(error.response.data);
};
