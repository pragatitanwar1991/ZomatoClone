import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ResContext from "../../context/restaurant/resContext";

const RestaurantItem = ({ restaurant }) => {
  const {
    _id,
    name,
    address,
    contactNumber,
    description,
    cuisine
  } = restaurant;

  const resContext = useContext(ResContext);
  const { setRestaurant } = resContext;

  const onEdit = () => {
    setRestaurant(restaurant);
  };

  return (
    <div id="my-restaurant" className="card   red lighten-2" >
      
      <div className="card-content white-text">
      <div class="card-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxU1riIn4OjT3E5SXKhH10S_gKOJi7N2wlA&usqp=CAU"></img></div>
        <div className="flow-text center">{name}</div>
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {address}, {contactNumber}
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {cuisine}
          </p>
        </blockquote>
        <div className="">
          <div className="activator btn-floating right">
            <i className="material-icons center">vertical_align_top</i>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div className="card-links" style={{ justifyContent: "space-between" }}>
          <Link className=" darken-1 white-text" to={`/res/${_id}`}>
            View Dishes
          </Link>
          <a
            id="add"
            className="btn-flat modal-trigger white-text"
            href="#restaurant"
            style={{ background: "" }}
            onClick={onEdit}
          >
            Edit
            <i className="large material-icons right">mode_edit</i>
          </a>
        </div>
      </div>
      <div className="card-reveal grey lighten-4">
        <span className="card-title" style={{ fontWeight: 500 }}>
          About
          <i className="material-icons right">close</i>
        </span>
        <p className="flow-text" style={{ fontSize: "1.3rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

RestaurantItem.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default RestaurantItem;
