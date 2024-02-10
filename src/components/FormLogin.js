import React from "react";
import { useState } from "react";
import ProductInquiryForm from "./ProductInquiryForm";

const FormLogin = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [setStateMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <button type="button" className='sign-link sign-in' data-bs-toggle="modal" data-bs-target="#ModalLogin">
        تسجيل
      </button>
      <div dir='rtl' className="modal fade" id="ModalLogin" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">مرحبا بك </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              لايتوفر حالياً التسجيل في الموقع إذا كنت مهتم في أحدى النباتات ارسل لنا طلبك
            </div>
            <div className="modal-footer">
              <div className="m-auto">
                <button type="button" id="btnn" className="btn btn-danger mx-2" data-bs-dismiss="modal">اغلاق</button>
                <button type="button" className="btn btn-success mx-2" data-bs-dismiss="modal" onClick={handleShow}>أنا مهتم</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductInquiryForm
        show={show}
        handleClose={handleClose}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        setStateMessage={setStateMessage}

      />
    </>

  )
}

export default FormLogin;



