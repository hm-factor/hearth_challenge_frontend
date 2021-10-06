import React, { useState } from "react";

export default function SearchElement(props) {
  const { address, zip, baths, beds, city, square_feet, state } = props.home;

  return (
    <div className="more-info">
      {address}
    </div>
  )
}