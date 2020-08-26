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
            <div className="home_row">
                <Product 
                    id="1"
                    title="Canon USA Ivy CLIQ Mint Green, 3884C001"
                    price={59.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71N4YC3039L._AC_SX679_.jpg"
                />
                <Product 
                    id="2"
                    title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call and Alexa Voice Control - Industry Leading Active Noise Cancellation – Black"
                    price={348.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51IdLe-%2B6kL._AC_SX679_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="3"
                    title="Wireless Earbuds, Monster Clarity 101 AirLinks Bluetooth Earbuds 5.0"
                    price={79.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61uDz-8ICEL._AC_SX679_.jpg"
                />
                <Product 
                    id="4"
                    title="HP Pavilion Gaming 15-Inch Laptop, Intel Core i5-9300H, NVIDIA"
                    price={848.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/810gynDZHzL._AC_SX679_.jpg"
                />
                 <Product 
                    id="5"
                    title="HP OMEN X 2S 2019 15-in Gaming Laptop with Secondary Touchscreen Display, Intel i7-9750H, NVIDIA RTX"
                    price={1999.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/715-zfPfltL._AC_SX679_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="6"
                    title="Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI"
                    price={228.87}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Y90KTb5VL._AC_.jpg"
                />
            </div>
        </div>
    );
}

export default Home
