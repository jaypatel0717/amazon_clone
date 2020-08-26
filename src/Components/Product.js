import React from 'react'
import '../Css/Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () =>{
        //add item to cart
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id, 
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });
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
