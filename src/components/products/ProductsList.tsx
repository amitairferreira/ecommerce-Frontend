import React, { useState, useEffect } from 'react';
import ProductService, { Product } from '../../services/product.service';
import { Link, useParams } from 'react-router-dom';
import "./Products.css";

function ProductsList() {
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts(1, 10, 'ASC', id);
      setProducts(data);
    };
    
    fetchProducts();
  }, [null]);

  return (
    <>
      {products.map(product => (
        <article className="col-3">
          <a href={`/product/details/${product.id}`}>
            <img id="products" src={product.image_link} alt={product.name} />
            <div className="product-div">
              <h4>{product.name}</h4> 
              <p id="subtitle">{product.description}</p>
              <p>Rp {product.discount_price} <span>Rp {product.price}</span></p>
            </div>
          </a>
        </article>
      ))}
    </>
  );
}

export default ProductsList;