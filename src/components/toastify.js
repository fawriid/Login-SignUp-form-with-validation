import { toast } from "react-toastify";

export const note = (text, type) => {
    if (type === 'success') {
        toast.success(text, {
            autoClose:3000
        })
    }
    else {
        toast.error(text, {
            autoClose:500
        });
    }
}