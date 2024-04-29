import Categories from "../../components/categories/Categories";
import ProductsList from "../../components/products/ProductsList";
import SecondaryFooter from "../../layout/secondary-footer/SecondaryFooter";
import backgroundHome from "./../../assets/images/scandinavian-interior-mockup-wall-decal-background 1.png";
import "./Home.css";

function Home() {
  function goToShop() {
    window.location.href = "/shop";
  }

  return (
    <>
      <section className="image-overlay">
        <img src={backgroundHome} alt="Planta" />
        <div className="overlay-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </section>

      <section className="row text-center category">
        <h3 className="pt-5 pb-5">Browse The Range</h3>

        <Categories />
      </section>

      <section className="row products">
        <h1 className="pt-5 pb-4">Our Products</h1>

        <ProductsList />

        <div className="text-center pt-4 pb-4">
          <button className="products-button" onClick={goToShop}>Show More</button>
        </div>
      </section>

      <section className="row">
        <SecondaryFooter />
      </section>
    </>
  );
}

export default Home;