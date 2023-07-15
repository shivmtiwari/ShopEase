import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, price, description, category, image } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{price}$</p>
        <p>{description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
