import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div  className='CardDiv'>
      <div className="image">
        <img src={product.image}></img>
      </div>
      <div className="content">
        <div className="title-price">
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
        </div>
        <p>{product.description}</p>
        <button onClick={handleAddToCart} className='addToCartBtn'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard