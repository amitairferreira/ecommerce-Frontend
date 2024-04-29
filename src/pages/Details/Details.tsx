import "./Details.css";
import seta from "./../../assets/images/Vector (20).png";
import ProductsDetails from "../../components/products/ProductsDetails";
import ProductsList from "../../components/products/ProductsList";

function Details() {
  return (
    <>  
      <section className="section-wrapper">
        <span className="left-contents">
            <a href="./home">Home</a>
            <img src={seta} alt="seta-direita" />
            <a href="./home">Shop</a>
            <img src={seta} alt="seta-direita" />
            |
            <p>Asgard Sofa</p>
        </span>
      </section>

      <section>
        <ProductsDetails />
      </section>

      <section>
        <h1 className="text-center pt-5 pb-4">Related Products</h1>

        <div className="row">
          <ProductsList />
        </div>
      </section>
    </>
  );
}

export default Details;