import React, { useState, useEffect } from 'react';
import ProductService, { Product } from '../../services/product.service';
import { useParams } from 'react-router-dom';
import "./Products.css";

function ProductsList() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts(1, 2, 'ASC', categoryId);
      setProducts(data);
    };
    
    fetchProducts();
  }, [categoryId]);

  return (
    <>
      {products.map(product => (
        <article className="col-3 product-container">
          
            <img id="products" src={product.image_link} alt={product.name} />
            <div className="product-div">
              <h4>{product.name}</h4> 
              <p id="subtitle">{product.description}</p>
              <p>Rp {product.discount_price} <span>Rp {product.price}</span></p>
            </div>
            {product.discount_percent && (
              <div className="circle-tag"><p>{product.discount_percent}%</p></div>
            )}

            {product.is_new && (
              <div className="circle-tag isNew"><p>New</p></div>
            )}
            <div className="hover-overlay">
              <a href={`/product/details/${product.id}/category/${product.category_id}?name=${product.name}`} className="product-link">
                <button className="see-details-btn">See Details</button>
              </a>
            </div>
        </article>        
      ))}
    </>
  );
}

export default ProductsList;