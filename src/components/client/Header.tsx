import React from 'react'
import { NavLink } from 'react-router-dom'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='grid grid-col-3 gap-8'>
        <div className='logo'>
            <img src=""/>
        </div>
        <div>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/product"}>Product</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/blog"}>Blog</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><NavLink to={"/cart"}>Cart</NavLink></li>
                <li><NavLink to={"search"}>search</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header