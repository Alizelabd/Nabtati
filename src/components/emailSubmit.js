// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import emailjs from "@emailjs/browser";
// import toast from 'react-hot-toast';

// const EMAIL_LIMIT_KEY = "emailLimit";
// const INITIAL_FORM_STATE = {
//     name: "",
//     email: "",
//     message: "",
//     errorMessage: null,
// };

//     const [sendLimit, setSendLimit] = useState(null);
//     const [formState, setFormState] = useState(INITIAL_FORM_STATE);
//     const { name, email, message } = formState;

//     useEffect(() => {
//         const value = JSON.parse(localStorage.getItem(EMAIL_LIMIT_KEY));

//         if (value === null) {
//             // Store email send limit in localStorage and update the state.
//             localStorage.setItem(EMAIL_LIMIT_KEY, JSON.stringify(0));
//             setSendLimit(0);
//         } else {
//             // Set send limit state.
//             setSendLimit(value);
//         }
//     }, []);

//     const handleFormFieldChange = (event) => {
//         const { name, value } = event.target;

//         // Return early in case the value of `name` doesn't exists on `formState`.
//         if (!(name in formState)) return;

//         // Update the corresponding property with its value.
//         setFormState((previousState) => ({ ...previousState, [name]: value }));
//     };
//     const sendEmail = (e) => {
//         e.preventDefault();

//         const templateFormData = {
//             from_name: name,
//             email_id: email,
//             message: message,
//         };

//         if (name === "" || email === "" || message === "") {
//             toast.error('املئ الحقول من فضلك')
//         } else {
//             let emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
//             if (emailRegex.test(email)) {
//                 if (sendLimit < 2) {
//                     // If less than 2, increase the count and save it
//                     emailjs
//                         .send(
//                             "service_4b5yn4v",
//                             "template_uykwfy4",
//                             templateFormData,
//                             "ODy0NGK6EYA9e1gfI"
//                         )
//                         .then((result) => {
//                             toast.success("تم إرسال البريد بنجاح");
//                             console.log(result.status);
//                             localStorage.setItem(EMAIL_LIMIT_KEY, sendLimit + 1);
//                             setTimeout(() => {
//                                 setFormState(INITIAL_FORM_STATE);
//                                 handleClose();
//                             }, 5000);
//                         })
//                         .catch((error) => {
//                             toast.error("حدث خطأ ما لم يتم إرسال البريد");
//                             console.log(error);
//                         });
//                 } else {
//                     // If 2 or more, return false
//                     toast.error(
//                         "المعذرة لا تستطيع إرسال المزيد من الرسائل ، فقط انتظر إلى يتم الرد عليك"
//                     );
//                 }
//             } else {
//                 toast.error("ادخل بريد إلكتروني صالح");
//             }
//         }
//     };