import '../App.css';
import React, { useState } from "react";

export default function SearchElement(props) {
  const [style, setStyle] = useState('off')
  let { address, zip, baths, beds, city, square_feet, state , price} = props.home;

  const handleClick = () => {
    (style === 'off') ? setStyle('on') : setStyle('off')
  }

  const formatPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  price = formatPrice.format(price);

  return (
    <div onClick={()=>handleClick()}>
      {address}
      <div className={`more-info-${style}`}>
        <div>{price}</div>
        <div>{baths} bas</div>
        <div>{beds} bds</div>
        <div>{square_feet} sqft</div>
        <div>{city}, {state} {zip}</div>
      </div>
    </div>
  );
}