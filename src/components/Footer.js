import React, { useEffect, useState, useRef } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import logo from '../images/greenLogo.svg';
import '../css/scss/_Footer.scss'; 
import { Link } from 'react-router-dom';

import ProductInquiryForm from './ProductInquiryForm';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Footer = () => {
  const [iconSize, setIconSize] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth > 768 ? 130 : 60);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [setStateMessage] = useState('');

  const [email, setEmail] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  console.log(email)

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const templateFormData = {
      from_name: "unknow",
      email_id: email,
      message: "unknow",
    };

    emailjs.send(
      "service_br7pc65",
      "template_d675cby",
      templateFormData,
      "0Vrk_eCV-opU4mZPo"
    ).then((result) => {
        // setStateMessage('تم إرسال البريد بنجاح');
        // setShowAlert(true);
        console.log(result.status);
        toast.success("تم تسجيلك في النشرة البريدية")
        handleClose();
      })
      .catch((error) => {
        // setStateMessage('حدث خطأ ما لم يتم إرسال البريد');
        // setShowAlert(true);
        console.log('FAILED...', error.text);
        toast.error("حدث خطأ")
      });
  };

  return (
    <footer className="footer">
      <Container>
        <div className="d-flex align-items-center flex-wrap justify-content-around">
          <Col md={2}>
            <img src={logo} alt="Logo" className="icon" style={{ width: `${iconSize}px`, height: `${iconSize}px` }} />
          </Col>

          <Col md={3} className="mb-3 p-2">
            <h5 style={{ color: '#3F5B4D', fontWeight: '700' }}>موقع نبتتي</h5>
            <ul className="list-unstyled">
              <Link className='link d-block' to={`/AboutUs`}> عن نبتتي</Link>
              <Link className='link d-block' to={`/OurProducts`}>منتجاتنا</Link>
            </ul>
          </Col>

          <Col md={3} className="mb-3 p-2">
            <h5 style={{ color: '#3F5B4D', fontWeight: '700' }}>مجتمع نبتتي</h5>
            <ul className="list-unstyled">
              <Link onClick={handleShow} className='link d-block'>اهداء الى صديق</Link>
              <Link onClick={handleShow} className='link d-block'>ارسل هدايا</Link>
            </ul>
          </Col>

          <Col md={4} className="mb-3" style={{ marginTop: '20px', color: '#3F5B4D', fontWeight: '700' }}>

            <Form ref={form} onSubmit={handleInquirySubmit} className="d-flex flex-column align-items-start subscription-form">
              <Form.Group controlId="subscriptionForm" className="mb-0">
                <Form.Label className="mr-2 text-dark">النشرة البريدية</Form.Label>
                <br />
                <Form.Text className="text-muted">كن مطلعًا على آخر الأخبار موقع نبتتي</Form.Text>
                <div className="d-flex">
                  <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="البريد الالكتروني" className="form-control" name="user_email"/>
                  <Button className="button" type='submit' >اشتراك</Button>
                </div>
              </Form.Group>
            </Form>

          </Col>
        </div>
      </Container>

      <ProductInquiryForm
        show={show}
        handleClose={handleClose}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        setStateMessage={setStateMessage}
        onInquirySubmit={handleInquirySubmit}
      />
    </footer>
  );
};

export default Footer;
