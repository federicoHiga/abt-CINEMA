import React from 'react';
import './Logo.css';
import logo from '../Assets/icons8-carrete-de-película-50.png'
import { Link } from 'react-router-dom';

const Logo = ()=>{
    return (
        <div>
            <Link to='/' style={{display:'flex'}}>
                <img className='logo' src={logo}></img>
                <h1 className='de'>abt-</h1>
                <h1 className='Cine'>CINEMA</h1>
            </Link>
        </div>
    );
}

export default Logo;