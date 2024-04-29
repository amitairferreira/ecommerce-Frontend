import React, { useState, useEffect } from 'react';
import ProductService, { Product } from '../../services/product.service';
import { Link } from 'react-router-dom';
import "./Products.css";

function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts();
      setProducts(data);
    };
    
    fetchProducts();
  }, []);

  return (
    <>
      {products.map(product => (
        <article className="col-3">
            <img id="products" src={product.image_link} alt={product.name} />
            <div className="product-div">
                <Link to={`/product/details/${product.id}`}>
                  <h4>{product.name}</h4> 
                </Link>
                <p id="subtitle">{product.description}</p>
                <p>Rp {product.discount_price} <span>Rp {product.price}</span></p>
            </div>
        </article>
      ))}
    </>
  );
}

export default ProductsList;