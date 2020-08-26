import React from 'react'
import '../Css/Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmI5MDQwZjEt/ZmI5MDQwZjEt-ZmMxNGZiOTQt-w3000._CB429000162_.jpg" 
                alt=""
            />
            <Product 
                id="1234"
                title="Canon USA Ivy CLIQ Mint Green, 3884C001"
                price={59.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71N4YC3039L._AC_SX679_.jpg"
            />
        </div>
    )
}

export default Home
