import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import sabara from '../images/sabra.png';
import Fee from '../images/fe.jpeg';
import Nassem from '../images/naseem.jpeg';
import { useState } from "react";


const productsData = [
    {
        id: 1,
        name: 'صبرا',
        price: '50 ريال',
        description: 'نبات صبار صغير مزين بزهور وردية اللون في حوض زجاجي يحتوي على رمل و أحجار ملونة.',
        image: sabara,
        link: '/ProdcutPage/1'
    },
    {
        id: 2,
        name: 'فيّ',
        price: '150 ريال',
        description: 'نبتة الألوفيرا حجم صغير في حوض من الفخار',
        image: Fee,
        link: '/ProdcutPage/2'
    },
    {
        id: 3,
        name: 'نسيم',
        price: '250 ريال',
        description: 'نبتة بونساي حجم صغير في حوض حجري',
        image: Nassem,
        link: '/ProdcutPage/3'
    }
];


function Prodcuts() {
    const [isLiked, setIsLiked] = useState(Array(productsData.length).fill(false));

    const toggleLike = (index) => {
        const newIsLiked = [...isLiked];
        newIsLiked[index] = !newIsLiked[index];
        setIsLiked(newIsLiked);
    };

    return (
        <>
            <Row className="justify-content-around w-75 mx-auto mb-5">
                {productsData.map((product, index) => (
                    <Col key={product.id} className="my-3" sm={12} md={6} lg={4}>
                        <Card className="rounded-3 h-100 p-2">
                            <Link to={product.link} className="text-decoration-none">
                                <Card.Img className="rounded-3" variant="top" src={product.image} />
                            </Link>
                            <Card.Body className="px-0 d-flex flex-column justify-content-between py-3">
                                <div className="d-flex fw-bold justify-content-between">
                                    <Card.Title>{product.name}</Card.Title>
                                    <span>{product.price}</span>
                                </div>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <div className="card-bottom d-flex">
                                    <Link to={product.link} className="btn-card flex-fill" variant="primary">المزيد من
                                        التفاصيل</Link>
                                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className={`like-icon ${isLiked[index] && 'bg-dark'}`}
                                        onClick={() => toggleLike(index)}>
                                        <path id="Vector"
                                            d="M14 3.86245L13.2967 4.53965C13.3879 4.63419 13.4971 4.70938 13.6179 4.76074C13.7388 4.81209 13.8687 4.83856 14 4.83856C14.1313 4.83856 14.2612 4.81209 14.3821 4.76074C14.5029 4.70938 14.6121 4.63419 14.7033 4.53965L14 3.86245ZM10.6478 20.5609C8.67349 19.0046 6.51554 17.4848 4.80298 15.5573C3.12558 13.6664 1.95349 11.4615 1.95349 8.599H0C0 12.071 1.44558 14.7199 3.34307 16.8544C5.2054 18.9512 7.58084 20.6312 9.43795 22.095L10.6478 20.5609ZM1.95349 8.599C1.95349 5.799 3.53581 3.44961 5.69637 2.46114C7.79572 1.50133 10.6166 1.75528 13.2967 4.53965L14.7033 3.18654C11.5256 -0.117461 7.83219 -0.663136 4.88372 0.684771C2.00037 2.00403 0 5.0671 0 8.599H1.95349ZM9.43795 22.095C10.106 22.6211 10.8223 23.1811 11.5477 23.6057C12.2731 24.029 13.1014 24.3741 14 24.3741V22.4206C13.5963 22.4206 13.1222 22.2643 12.5336 21.9192C11.9436 21.5754 11.3328 21.1013 10.6478 20.5609L9.43795 22.095ZM18.562 22.095C20.4192 20.6299 22.7946 18.9525 24.6569 16.8544C26.5544 14.7186 28 12.071 28 8.599H26.0465C26.0465 11.4615 24.8744 13.6664 23.197 15.5573C21.4845 17.4848 19.3265 19.0046 17.3522 20.5609L18.562 22.095ZM28 8.599C28 5.0671 26.0009 2.00403 23.1163 0.684771C20.1678 -0.663136 16.477 -0.117461 13.2967 3.18524L14.7033 4.53965C17.3834 1.75658 20.2043 1.50133 22.3036 2.46114C24.4642 3.44961 26.0465 5.7977 26.0465 8.599H28ZM17.3522 20.5609C16.6672 21.1013 16.0564 21.5754 15.4664 21.9192C14.8778 22.263 14.4037 22.4206 14 22.4206V24.3741C14.8986 24.3741 15.7269 24.029 16.4523 23.6057C17.179 23.1811 17.894 22.6211 18.562 22.095L17.3522 20.5609Z"
                                            fill={isLiked[index] ? "white" : "black"} />
                                    </svg>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Prodcuts;