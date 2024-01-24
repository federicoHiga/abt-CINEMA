import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context-api/ShopContext";
import Item from "../Components/Item/Item";
import dropdownIcon from '../Components/Assets/icons8-dropdown-24.png'

const ShopCategory = (props)=>{

    const {all_products} = useContext(ShopContext)

    console.log(all_products[1].id)

    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                Sort by <img src={dropdownIcon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_products.map((item,i)=>{
                    if (props.category === item.category){
                        return <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        img={item.img} 
                        new_price={item.new_price} 
                        old_price={item.old_price}/>
                    } else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadMore">
                Explore more
            </div>
        </div>
    )
}

export default ShopCategory