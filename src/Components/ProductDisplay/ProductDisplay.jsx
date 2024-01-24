import React, { useContext } from "react";
import './ProductDisplay.css';
import star from '../Assets/star.png'
import star_dull_icon from '../Assets/star_null_icon.png'
import { ShopContext } from "../../Context-api/ShopContext";

const ProductDisplay = (props)=>{

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    console.log('producto desde productDisplay', product)

    return(
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-img">
                    <img className="productDisplay-main-img" src={product.img} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-price-old">${product.old_price}</div>
                    <div className="productDisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-description">
                    <ul><span>Gender: </span>{product.gender}</ul>
                    <ul><span>Language:</span> {product.language}</ul>
                    <ul><span>Format:</span> {product.format}</ul>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productDisplay-right-category"></p>
            </div>
        </div>
    )
}

export default ProductDisplay;