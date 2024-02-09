import React from "react";
import { useState } from "react";
import ProductInquiryForm from "./ProductInquiryForm";

const FormLogin=()=>{
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [setStateMessage] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   return(
    
    <>
     <button type="button" class="btn btn-primary" className='sign-link sign-in' data-bs-toggle="modal" data-bs-target="#ModalLogin">
    تسجيل
   </button>
   <div dir='rtl' class="modal fade" id="ModalLogin"  tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">مرحبا بك </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         لايوجد حاليا تسجيل في الموقع اذا كنت مهتم في التسجيل واصل التسجيل
        </div>
        <div class="modal-footer">
          <button type="button" id="btnn" class="btn btn-danger"  data-bs-dismiss="modal">اغلاق</button>
          <button type="button" class="btn btn-primary"  onClick={handleShow}>مواصلة التسجيل</button>
          
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


          
