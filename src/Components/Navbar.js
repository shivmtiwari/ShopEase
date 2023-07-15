import React, { useContext } from 'react'
import { BsEmojiSunglasses } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {
    const { getTotalTimesAdded } = useContext(CartContext);

    return (
        <div className="navContainer">
            <div className='navbar '>
                <div className="logo">
                    <Link to='/'><h1 className=''>Shop<span style={{ color: '#FF3F6C' }}>Ease</span></h1></Link>
                </div>
                <ul className='navMenu'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    {/* <li><NavLink to='/products'>Products</NavLink></li> */}
                    <li><NavLink to='/login'><BsEmojiSunglasses className='login-icon' /></NavLink></li>
                    <li>
                        <NavLink className='cart' to='/cart' >
                            <AiOutlineShoppingCart className='cart-icon' />
                            <span className='cartNum'>{getTotalTimesAdded()}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar