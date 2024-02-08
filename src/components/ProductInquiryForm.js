import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import emailjs from "@emailjs/browser";

const EMAIL_LIMIT_KEY = "emailLimit";
const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
  errorMessage: null,
};

const ProductInquiryForm = ({ show, handleClose, showAlert, setShowAlert }) => {
  const [sendLimit, setSendLimit] = useState(null);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const { name, email, message, errorMessage } = formState;

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem(EMAIL_LIMIT_KEY));

    if (value === null) {
      // Store email send limit in localStorage and update the state.
      localStorage.setItem(EMAIL_LIMIT_KEY, JSON.stringify(0));
      setSendLimit(0);
    } else {
      // Set send limit state.
      setSendLimit(value);
    }
  }, []);

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;

    // Return early in case the value of `name` doesn't exists on `formState`.
    if (!(name in formState)) return;

    // Update the corresponding property with its value.
    setFormState((previousState) => ({ ...previousState, [name]: value }));
  };

  const showAlertMessage = (message) => {
    setFormState((previousState) => ({
      ...previousState,
      errorMessage: message,
    }));
    setShowAlert(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateFormData = {
      from_name: name,
      email_id: email,
      message: message,
    };

    if (name === "" || email === "" || message === "") {
      showAlertMessage("من فضلك املئ الحقول");
    } else {
      let emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
      if (emailRegex.test(email)) {
        if (sendLimit < 2) {
          // If less than 2, increase the count and save it
          localStorage.setItem(EMAIL_LIMIT_KEY, sendLimit + 1);
          emailjs
            .send(
              "service_br7pc65",
              "template_d675cby",
              templateFormData,
              "0Vrk_eCV-opU4mZPo"
            )
            .then((result) => {
              showAlertMessage("تم إرسال البريد بنجاح");
              console.log(result.status);

              setTimeout(() => {
                setFormState(INITIAL_FORM_STATE);
                handleClose();
              }, 5000);
            })
            .catch((error) => {
              showAlertMessage("حدث خطأ ما لم يتم إرسال البريد");
              console.log(error);
            });
        } else {
          // If 2 or more, return false
          showAlertMessage(
            "المعذرة لا تستطيع إرسال المزيد من الرسائل ، فقط انتظر إلى يتم الرد عليك"
          );
        }
      } else {
        showAlertMessage("ادخل بريد إلكتروني صالح");
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>أملئ الاستبيان</Modal.Title>
        </Modal.Header>
        {/* Start Alert Box Message */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="position-relative"
          style={{ minHeight: "100px" }}
        >
          <ToastContainer
            position="middle-center"
            className="position-absolute"
            style={{ zIndex: 9999 }}
          >
            <Toast
              className="bg-primary-subtle"
              onClose={() => setShowAlert(false)}
              delay={4000}
              autohide
              show={showAlert}
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">اشعار</strong>
                <small className="text-muted">الأن</small>
              </Toast.Header>
              <Toast.Body>{errorMessage}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        {/* End Alert Box Message */}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">الاسم</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                onChange={handleFormFieldChange}
                required
                autoFocus
              />
              <Form.Label htmlFor="email">البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={handleFormFieldChange}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="message">
                لماذا انت مهتم بهذا المنتج؟ حدثنا عن حاجتك لتوفير المنتج بأفضل
                حلة تليق بك
              </Form.Label>
              <Form.Control
                as="textarea"
                id="message"
                name="message"
                onChange={handleFormFieldChange}
                rows={3}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="m-auto">
          <Button variant="danger" onClick={handleClose}>
            اغلاق
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            إرسال
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Forms Module */}
    </>
  );
};

export default ProductInquiryForm;
