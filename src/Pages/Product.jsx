import React, { useContext } from "react";
import { ShopContext } from "../Context-api/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = ()=>{

    const {all_products}= useContext(ShopContext);
    const {productId} = useParams(); //captura el value de la parte dinamica de la url del navegador, en el path q asignamos en App con las routes (en este caso productId) 
    const product = all_products.find((product)=> product.id === Number(productId)); //hace el filtro para matchear la url actual con el id de la lista
    // console.log('product: ',all_products[1].category)
    return(
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product