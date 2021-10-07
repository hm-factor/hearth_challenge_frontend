import "../App.css";
import React from "react";

export default function HomeDetail(props) {
  let { zip, baths, beds, city, square_feet, state, price, sale_type, 
      property_type, url } = props.home;

  const formatPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  price = formatPrice.format(price);

  return (
    <div className="home-detail">
      <div className="detail-element-header">More Details:</div>
      <div className="detail-element">{property_type}</div>
      <div className="detail-element-price">{price}</div>
      <div className="detail-element-beds-baths">
        <div>{baths} bas</div>
        <div>{beds} bds</div>
      </div>
      <div className="detail-element">{square_feet} sqft</div>
      <div className="detail-element-location">
        {city}, {state} {zip}
      </div>
      <a href={`${url}`} rel="noopener noreferrer" target="_blank">
        {"<"} Click for even more info {">"}
      </a>
      <div className="sale-type">Source: {sale_type}</div>
    </div>
  );
}
