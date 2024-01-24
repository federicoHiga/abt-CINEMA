import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context-api/ShopContext";
import remove_icon from '../Assets/icons8-cross-30.png';

const CartItems = ()=>{

    const {getTotalAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext);

    

    return(
        <div className="cartItems">
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e)=>{
                console.log('(dentro del .map) cartItems[e.id] ', cartItems[e.id])
                if(cartItems[e.id] > 0){
                    console.log('dentro del if cartItmes e.id', )
                    return <div key={e.id}>
                    <div className="cartItems-format cartItems-format-main">
                        <img className="cartIcon-product-icon" src={e.img} alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartItems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className="cartItems-remove-icon" onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart totals</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;