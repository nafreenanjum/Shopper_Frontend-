import React from 'react';
import './CartItems.css';
import { useContext } from 'react';
import { ShopContext } from '../../CONTENT/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import StripeCheckoutButton from '../StripeCheckoutButton';


export default function CartItems() {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs {e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>Rs {e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => removeFromCart(e.id)}
                                    alt="Remove"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Explicitly return null when condition is not met
            })}
            <div className='cartitems-down'>
  <div className="cartitem-total">
    <h1>cart Totals</h1>
    <div>
      <div className="cartitems-total-items">
        <p>Subtotals</p>
        <p>Rs{getTotalCartAmount()}</p>
      </div>
      <hr/>
      <div className='cartitems-total-items'>
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <hr/>
      <div className='cartitems-total-items'>
        <h3>Total</h3>
        <h3>Rs{getTotalCartAmount()}</h3>
      </div>
    </div>

    {/* ✅ Stripe Button */}
    <StripeCheckoutButton cartTotal={getTotalCartAmount()} />

  </div>

                <div className='cartitems-promocode'>
                    <p>If you have a promo code ,Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='promocode'/>
                        <button>Submits</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

