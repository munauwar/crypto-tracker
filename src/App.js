import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import './index.css'

function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="flex flex-col items-center">
            <div className="mt-8 text-2xl">
                <form>
                    <input type="text" placeholder="Search" className="bg-black rounded text-center py-2 text-green-500" onChange={handleChange} />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin 
                        key = {coin.id} 
                        name = {coin.name} 
                        image = {coin.image} 
                        symbol = {coin.symbol} 
                        volume = {coin.total_volume}
                        price = {coin.current_price}
                        priceChange = {coin.price_change_percentage_24h}
                        marketcap = {coin.market_cap}
                    />
                )
            })}
        </div>
    );
}

export default App;
