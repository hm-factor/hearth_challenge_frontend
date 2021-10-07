import '../App.css';
import React from "react";

export default function SearchElement(props) {
  let {address} = props;

  return (
    <div>
      {address}
    </div>
  );
}