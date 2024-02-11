import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";

export const handleInquirySubmit = (templateFormData) => {
    emailjs
        .send(process.env.SERVER_ID, process.env.TEMPLATE_ID, templateFormData, process.env.PUBLIC_KEY)
        .then((result) => {
            toast.success('تم إرسال البريد بنجاح');
            // setShowAlert(true);
            console.log(result.status);
            handleClose();
        })
        .catch((error) => {
            toast.error('حدث خطأ ما لم يتم إرسال البريد');
            // setShowAlert(true);
            console.log(error);
        });
};