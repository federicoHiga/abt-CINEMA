import React from "react";
import './Offers.css'

const Offers = ()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src="https://tiendadetazas.com/wp-content/uploads/2021/06/photoroom_20210616_131743.png" alt="discount product"/>
            </div>
        </div>
    )
}

export default Offers