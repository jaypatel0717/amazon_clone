import React from 'react'
import '../Css/Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
        
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>${price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p><img height="18" width="18" src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/></p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
