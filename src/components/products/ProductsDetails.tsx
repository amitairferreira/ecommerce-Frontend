import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService, { Product } from "../../services/product.service";
import star from "./../../assets/images/Group 88.png"
import facebook from "./../../assets/images/akar-icons_facebook-fill.png";
import linkedin from "./../../assets/images/akar-icons_linkedin-box-fill.png";
import twitter from "./../../assets/images/ant-design_twitter-circle-filled.png";

function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  
  useEffect(() => {

    const fetchProduct = async () => {
      const data = await ProductService.getProduct(id!);
      setProduct(data);
    };
    
    fetchProduct();
  }, [id]);

  if (!product)
    return <div>Loading...</div>

  return(
    <>
      <div className="row pt-4 details">
        <article className="col-1">
          <img src={product.image_link} alt="imageDetails" />
        </article>
        <article className="col-4">
          <img src={product.other_image_link} alt="imageDetails" />
        </article>
        <article className="col-7">
          <h1>{product.name}</h1>
          <h3>Rs. {product.price}</h3>

          <img src={star} alt="imageDetails" />
          <hr className="separatorDetails" />

          <p>5 Customer Review</p>

          <p className="description">{product.description}</p>
          
          <p className="size">Size</p>
          <button id="size">L</button>
          <button id="size">XL</button>
          <button id="size">XS</button>

          <p className="description color-p">Color</p>

          <div className="row divColor">
            <div className="col-1 color color1"></div>
            <div className="col-1 color color2"></div>
            <div className="col-1 color color3"></div>
          </div>

          <div className="number-input">
            <button className="minus-btn" onClick={handleDecrement}>-</button>
            <input type="text" className="quantity" value={quantity} readOnly />
            <button className="plus-btn" onClick={handleIncrement}>+</button>
          </div>

          <button id="button">Add To Cart</button>
          <button id="button">+ Compare</button>

          <hr />

          <article className="row">
            <div className="col-1">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div className="col-4">
              <p>: SS001</p>
              <p>: Sofas</p>
              <p>: Sofa, Chair, Home, Shop</p>
              <p>: 
                <img src={facebook} alt="Facebook" />
                <img src={linkedin} alt="Linkedin" />
                <img src={twitter} alt="Twitter" />
              </p>
            </div>
          </article>
        </article>
      </div>

      <hr />

      <section className="pt-4 pb-5 text-center">
        <h3>Description <span>Additional Information</span></h3>

        <p>{product.large_description}</p>
      </section>
    </>
  );
}

export default ProductsDetails;