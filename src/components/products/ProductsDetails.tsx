import { useState, useEffect } from "react";
import ProductService, { Product } from "../../services/product.service";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  
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
      <div className="row pt-4">
        <article className="col-1">
            <img src={product.image_link} alt="" />
        </article>
        <article className="col-4">
            <img src={product.other_image_link} alt="" />
        </article>
        <article className="col-7">
          <h1>{product.name}</h1>
          <h3>Rs. {product.price}</h3>

          <img src="./assets/images/Group 88.png" alt="" />
          |
          <p>5 Customer Review</p>

          <p>{product.description}</p>
          
          <p>Size</p>
          <small>L</small>
          <small>XL</small>
          <small>XS</small>

          <p>Color</p>
            {/* cores  */}

          <input type="number" name="" id="" />
          <button>Add To Cart</button>
          <button>+ Compare</button>

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
                <img src="./assets/images/akar-icons_facebook-fill.png" alt="" />
                <img src="./assets/images/akar-icons_linkedin-box-fill.png" alt="" />
                <img src="./assets/images/ant-design_twitter-circle-filled.png" alt="" />
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