import "./Details.css";
import seta from "./../../assets/images/Vector (20).png";
import ProductsDetails from "../../components/products/ProductsDetails";
import ProductsList from "../../components/products/ProductsList";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  
  function goToShop() {
    window.location.href = "/shop";
  }
  
  return (
    <>  
      <section className="section-wrapper-details">
        <span className="left-contents">
            <a href="/home">Home</a>
            <img src={seta} alt="seta-direita" />
            <a href="/shop">Shop</a>
            <img src={seta} alt="seta-direita" />
            
            <hr className="detailsHr"/>

            <p>{name}</p>
        </span>
      </section>

      <section>
        <ProductsDetails />
      </section>

      <section>
        <h1 className="text-center pt-5 pb-4">Related Products</h1>

        <div className="row pt-5 pb-5 products">
          <ProductsList />

          <div className="text-center pt-4 pb-4">
            <button className="products-button" onClick={goToShop}>Show More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;