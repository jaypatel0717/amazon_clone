import React from 'react'
import '../Css/Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img height="180" 
                    className="checkout_ad" 
                    src="https://media-exp1.licdn.com/dms/image/C561BAQHCZ83vKVJVkg/company-background_10000/0?e=2159024400&v=beta&t=6EhQmBBtUy-Sa0neSKmPHus9woro1FRyJQvF8bkqAH4" 
                    alt=""
                />
                { basket?.length === 0  ? (
                    <div className="checkout_emptyCart">
                        <h2>Your Amazon Cart is empty</h2>
                        <p>
                            You have no items in your cart. To buy one or "Add to Cart" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Shopping Cart</h2>
                        { basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            { basket.length > 0 && (
                 <div className="checkout_right">
                     <Subtotal/>
                 </div>
            )}
           
        </div>
    )
}

export default Checkout;
