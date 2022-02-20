import React from 'react'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className="flex justify-center">
        <div className="flex flex-row justify-start items-center h-20 border-b-2 border-gray-600">
            <div className="flex items-center pr-6 w-full">
                <img src={image} className="h-8 w-8 mr-3" alt="crypto" />
                <h1 className="text-base w-36">{name}</h1>
                <p>{symbol.toUpperCase()}</p>
            </div>
            <div className="flex text-center">
                <p className="w-24">€{price}</p>
                <p className="w-52">€{volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className="w-20 text-red-500">{priceChange.toFixed(2)}%</p>
                ): (
                    <p className="w-20 text-green-500">{priceChange.toFixed(2)}%</p>
                )}    
                <p className="w-60">
                    Market cap: € {marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin