import React, { createContext, useState, useEffect } from "react";
import all_products from "../Components/Assets/allProducts";
import { search } from "../Fake-api/api";

export const ShopContext = createContext(null);



const ShopContextProvider = (props) =>{

  /**
   * get generla al db
   */

  //   const [all_products, setAll_products] = useState([]);

  //   const endPoint = '/all_products'

  //   useEffect(()=>{
  //     search(endPoint, setAll_products).catch(()=>{
  //     })
  // }, [])

  console.log('all_products(get): ',all_products)

  /**
   * state del navBar para la activacion de sus items
   */

  const [menu, setMenu] = useState();

  /**
   * 
   * deja el cart en 0 listo para usar
   *este getDefaultCart usa .lenght, el cual nmo es compatible con un objeto json*/

  const getDefaultCart = ()=>{ 

    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

// const getDefaultCart = () => {
//   let cart = {};

//   // Get the product IDs from the JSON object
//   const productIds = Object.keys(all_products);
//   console.log(productIds)

//   // Iterate through the product IDs
//   for (const productId in productIds) {
//     // Use JSON.stringify to ensure valid property names
//     cart[JSON.stringify(productId)] = 1;
//   }

//   return cart;
// };



    const [cartItems, setCartItems] = useState(getDefaultCart());

    console.log('cartItems: ',cartItems)

    const addToCart = (itemId) => {
      const id = parseInt(itemId, 10);
      setCartItems((prev) => ({
        ...prev,
        [id]: prev[id] + 1,
      }));
    };

    // const addToCart = (itemId) =>{
    //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    //     // console.log('esto es itemId',itemId) 
    // }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    /**
     * 
     * Por alguna razon este getTotalAmount no me funciona. Nunca entra al if, el 'item' del (cons item in cartItems) da siempre 0 y jamas entra.
     */
    // const getTotalAmount = ()=>{
    //     let totalAmount = 0;
    //     console.log('total = ', totalAmount);
    //     for (const item in cartItems)
    //     {console.log('item = ',item);
    //         if(cartItems[item]>0)
    //         {
    //             console.log('total dentro del if',totalAmount);
    //             let itemInfo = all_products.find((product)=>product.id===Number(item));
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //             console.log('total dentro del if 2',totalAmount);
    //         }
    //         return totalAmount;
    //     }
    // }



/**
 * 
 * getTotalAmount2:
    Se utiliza Object.entries(cartItems) para obtener un array de pares clave-valor del objeto cartItems.
    Se aplica .map a este array para procesar cada par clave-valor:
    Si la cantidad (quantity) es mayor que 0, se busca el producto correspondiente en all_products y se devuelve un objeto con la información del producto y la cantidad.
    Si la cantidad es 0, se devuelve null para excluirlo del cálculo.
    Se usa .reduce para iterar sobre los itemInfo válidos y sumar el importe total.
 */

    const getTotalAmount = () => {
        let totalAmount = 0;
    
        const itemInfos = Object.entries(cartItems).map(([item, quantity]) => {
          if (quantity > 0) {
            const product = all_products.find((product) => product.id === Number(item));
            return { ...product, quantity };
          }
          return null; // Exclude items with zero quantity
        });
    
        totalAmount = itemInfos.reduce((total, itemInfo) => {
          if (itemInfo) {
            return total + itemInfo.new_price * itemInfo.quantity;
          }
          return total;
        }, 0);
    
        return totalAmount;
      };
    

      const getTotalCartItems = ()=>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
      }


    const contextValue = {menu,setMenu,all_products,cartItems,addToCart,removeFromCart,getTotalAmount,getTotalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

