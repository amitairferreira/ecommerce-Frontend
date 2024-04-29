import SecondaryFooter from "../../layout/secondary-footer/SecondaryFooter";
import "./Shop.css";
import backgroundShop from "./../../assets/images/Rectangle 1.png";
import seta from "./../../assets/images/Vector (20).png";
import filter from "./../../assets/images/system-uicons_filtering.png";
import grid from "./../../assets/images/ci_grid-big-round.png";
import viewList from "./../../assets/images/bi_view-list.png";
import ProductsList from "../../components/products/ProductsList";

function Shop() {
  return (
    <>
      <section className="image-overlay">
        <img src={backgroundShop} alt="Planta" />
        <div className="overlay-content-shop">
          <h1>Shop</h1>
          <a href="/home" className="overlay-link home">Home</a>
          <img src={seta} alt="seta-direita" className="overlay-img" />
          <a href="/shop" className="overlay-link shop">Shop</a>
        </div>
      </section>   

      <section className="section-wrapper-shop">
        <span className="left-contents">
            <img className="icon-nav" src={filter} alt="Icone de filtro" />
            <h6 className="text-custom">Filter</h6>
            <img className="icon-nav" src={grid} alt="grid-round" />
            <img className="icon-nav" src={viewList} alt="view-list" />
            <hr className="shopHr"/>
            <p>Showing 1–16 of 32 results</p>
        </span>
    
        <span className="right-contents">
            <p className="text-custom social-text">Show </p>
            <input type="number" name="pageSize" id="pageSize" placeholder="16" />
            <p className="text-custom social-text">Short by </p>
            <input type="number" name="shortBy" id="shortBy" placeholder="Default" />
        </span>
      </section>

      <section className="row pt-5 pb-5 products">
        <ProductsList />
            
        <div className="pagination pt-5">
          <button className="products-button"> 1</button>
          <button className="products-button"> 2</button>
          <button className="products-button"> 3</button>
          <button className="products-button"> NEXT</button>
        </div>
      </section>

      <section className="row text-center">
        <SecondaryFooter />
      </section>
    </>
  );
}

export default Shop;