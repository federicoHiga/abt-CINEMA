import React, { useState, useContext } from "react";
import './Navbar.css' 
import Logo from "./Logo";
import cart from "../Assets/icons8-cart-64.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context-api/ShopContext";


const Navbar = () =>{

    const {getTotalCartItems,menu,setMenu} = useContext(ShopContext);

    return(
        <div className="navbar" style={{display:'flex'}}>
            <li style={{listStyle: 'none'}} onClick={()=>{setMenu("")}}> 
              <Logo /> 
            </li>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("movies")}}><Link to='/movies'>Movies</Link>{menu==="movies"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("series")}}><Link to='/series'>Series</Link>{menu==="series"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("merch")}}><Link to='/merch'>Merch</Link>{menu==="merch"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart}/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar