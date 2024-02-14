import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";

export const handleInquirySubmit = (templateFormData) => {
                        emailjs
                            .send(process.env.SERVER_ID, process.env.TEMPLATE_ID, templateFormData, process.env.PUBLIC_KEY)
                            .then((result) => {
                                toast.success('تم إرسال البريد بنجاح');
                                console.log(result.status);
                            })
                            .catch((error) => {
                                toast.error('حدث خطأ ');
                                console.error('خطأ أثناء إرسال البريد:', error);
                            });
                    };
                    