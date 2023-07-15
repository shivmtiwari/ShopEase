import React,{useContext} from 'react'
import { BsEmojiSunglasses } from "react-icons/bs";
import {Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = () => {
    const { getTotalTimesAdded } = useContext(CartContext);

    return (
        <div className="navContainer">
            <div className='navbar '>
                <div className="logo">
                    <Link to='/'><h1 className=''>Shop<span style={{color:'#FF3F6C'}}>Ease</span></h1></Link>
                </div>
                <ul className='navMenu'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/products'><li>Products</li></NavLink>
                    <li><BsEmojiSunglasses/></li>
                    <NavLink to='/cart' ><AiOutlineShoppingCart/>{getTotalTimesAdded}</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar