import React, { useContext } from 'react';
import './Footer.css'
import Logo from '../Navbar/Logo'
import { ShopContext } from "../../Context-api/ShopContext";

const Footer = ()=>{

    const {setMenu} = useContext(ShopContext);

    return(
        <div className='footer'>
            <li style={{listStyle: 'none'}} onClick={()=>{setMenu("")}}> 
              <Logo /> 
            </li>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src='https://img.icons8.com/?size=26&id=48841&format=png' alt='instagram' />
                </div>
                <div className="footer-icons-container">
                    <img src='https://img.icons8.com/?size=32&id=16249&format=png' alt='email' />
                </div>
                <div className="footer-icons-container">
                    <img src='https://img.icons8.com/?size=30&id=62855&format=png' alt='whatsapp' />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved</p> 
            </div>
        </div>
    )
}

export default Footer