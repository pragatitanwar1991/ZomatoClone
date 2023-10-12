import React from "react";
import PropTypes from "prop-types";

const DishCardItem = ({ dish }) => {
  const { name, price, type } = dish;
  return (
    
    <div className="card red lighten-1">
      <div>
        <img  src="https://sbp-p-sundries.smilebox.com/Designs/001962/sm_tile.jpg "></img>
      </div>
      <div className="card-content white-text">
        <span className="card-title">{name}</span>
        <blockquote style={{ fontSize: "1.2rem" }}>
          <p>
            Price:{" "}
            <span className="amber-text text-lighten-1">Rs. {price}</span>
          </p>
          <p>{type}</p>
        </blockquote>
      </div>
    </div>
  );
};

DishCardItem.propTypes = {
  dish: PropTypes.object.isRequired
};

export default DishCardItem;
