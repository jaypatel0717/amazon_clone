import React from 'react'
import '../Css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const deleteFromCart = () => {
        //delete item from cart
        dispatch({
            type: "REMOVE_FORM_BASKET",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <strong>${price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p><img height="18" width="18" src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/></p>
                        ))
                    }
                </div>
                <button onClick={deleteFromCart}>Delete</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
