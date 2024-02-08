import { Container } from "react-bootstrap";
import Prodcuts from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";
function OurProducts() {
  return (
    <>
      <AnimatedPage>
        <Header />
        <div className="caption text-center py-4">
          <h2 className="fw-bold">منتجاتنا</h2>
          <p className="descrp">نقدم في نبتتي أفضل النباتات الداخلية</p>
        </div>
        <Container className="py-4">
          <Prodcuts />
        </Container>
        <Footer />
      </AnimatedPage>
    </>
  );
}
export default OurProducts;
