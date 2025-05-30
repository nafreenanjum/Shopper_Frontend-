import React, { createContext ,useState } from "react";
import { useEffect } from "react";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
  let cart={};
  for (let index = 0; index < 300+1; index++) {
    cart[index]=0;

    
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const[all_product,setAll_Product]=useState([]);
  const[cartItems,setCartItems]=useState(getDefaultCart());
  useEffect(() => {
    // Fetch all products
    fetch('http://localhost:3001/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:3001/getcart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',

          },
          body:"",

        }).then((response)=>response.json())
        .then((data)=>setCartItems(data));
      }
  
    
    
  }, []);
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const authToken = localStorage.getItem('auth-token');
  
    if (authToken) {
      fetch('http://localhost:3001/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${authToken}`, // ✅ Correct interpolation
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }), // Shortened version is also fine
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Add to cart response:', data);
        })
        .catch((err) => {
          console.error('Error adding to cart:', err);
        });
    } else {
      alert('Please login to add items to cart.');
    }
  };
  
  
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1})) 
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:3001/removefromcart', {
        method: 'POST', // should be string
        headers: {
          Accept: 'application/json', // fixed content type
          'auth-token': `${localStorage.getItem('auth-token')}`, // correct spelling
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId }), // correct body
      })
        .then((response) => response.json()) // lowercase json()
        .then((data) => console.log(data))
        .catch((err) => console.error("Error adding to cart:", err));
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount; // Return after the loop completes
  };

  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item];


      }

    }
    return totalItem;

  }
  
  const contextValue = {getTotalCartItems,getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart };
  

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;








