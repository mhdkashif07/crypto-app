import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="btn__container show-more">
      <Link to="/cryptocurrencies">{props.text}</Link>
    </div>
  );
};

export default Button;
