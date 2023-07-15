import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };
  const productDescription = "Your product description goes here...";
const words = productDescription.split(' ');
const first20Words = words.slice(0, 20).join(' ');

console.log(first20Words);


  return (
    <div  className='CardDiv'>
      <div className="image">
      <Link to={`/${product.id}`}><img src={product.image}></img></Link>
      </div>
      <div className="content">
        <div className="title-price">
          <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
          <h3>₹ {product.price}</h3>
        </div>
        <p>{product.description.split(' ').slice(0, 8).join(' ')}......</p>
        <button onClick={handleAddToCart} className='addToCartBtn'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard