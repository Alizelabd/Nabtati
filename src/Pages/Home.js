import { Container } from "react-bootstrap";
import searchIcon from "../images/search 1.svg";
import Footer from "../components/Footer";
import UserReviewPage from "../components/UserReviewPage";
import FamousPlant from "../components/FamousPlant";
import Prodcuts from "../components/Products";
import Header from "../components/Header";
import AnimatedPage from "../components/AnimatedPage";
import { Reveal } from "../components/Reveal";

function Home() {
  return (
    <>
      <div className="main-hero border-bottom-rad pb-3">
        <Header />
        <Container className="text-center position-relative">
          <Reveal>
            <div className="search-div">
              <input type="search" placeholder="البحث" />
              <img className="search-icon" src={searchIcon} alt="search-icon" />
            </div>
          </Reveal>
          <div className="text-hero mt-5">
            <Reveal>
              <div className="title my-3">
                <h1>مرحباً بك في </h1>
                <span>نبتتي</span>
              </div>
            </Reveal>
            <Reveal>
              <p>
                المكان المثالي لاكتشاف عالم النباتات <span>وجمالها!</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </div>
      <div className="famous-plants">
        <Container className=" position-relative">
          <div className="caption text-center pt-3 mt-5">
            <h2 className="text-title fw-bold">
              <Reveal>
                تَعرّف على النباتات وميزاتها من خلال القصص الممتعة!{" "}
              </Reveal>
            </h2>
          </div>
        </Container>
        <FamousPlant />
      </div>
      <Reveal>
        <div className="caption text-center py-4">
          <h2 className="text-title fw-bold">منتجاتنا</h2>
          <p className="descrp">نقدم في نبتتي أفضل النباتات الداخلية</p>
        </div>
      </Reveal>
      <Container>
        <Prodcuts />
      </Container>
      <Container className="review-container py-4">
        <h2 className="text-title fw-bold">تجارب عملاءَنا</h2>
        <UserReviewPage />
      </Container>
      <Footer />
    </>
  );
}
export default Home;
