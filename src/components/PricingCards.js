import React from 'react'
import './PricingCardsStyle.css'
import PriceCardData from '../components/PriceCardData'


const PricingCards = () => {
    const pricecards = PriceCardData.map((data, index) => {
        return (
            <div className='card-holder'>
                <h2>{data.plan}</h2>
                <hr></hr>
                <h1>{data.price}</h1>
                <p>{`-- ${data.time}--`}</p>
                <p>{`-- ${data.design}--`}</p>
                <p>{`-- ${data.pages}--`}</p>
            </div>
        )
    })
    return (
        <div className='pricecard'>
            <div className='container'>
                {pricecards}
            </div>
        </div>
    )
}

export default PricingCards