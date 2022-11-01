import React from "react";
import { UilShoppingCart, UilHeart, UilSearch } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function StoreProps(item) {
  return (
    <div className="col-4 item">
      <div className="card me-5">
        <div className="card">
          <img className="circle-img" src={item.imgURL} alt="avatar_img" />
          <div className="d-flex icons">
            <Link to={`/productPage/${item._id}`}>
              <p>
                {" "}
                <UilShoppingCart size="50" className="iconBG" />{" "}
              </p>
            </Link>
            <Link to={`/productPage/${item._id}`}>
              <p>
                {" "}
                <UilHeart size="50" className="iconBG" />
              </p>
            </Link>
            <Link to={`/productPage/${item._id}`}>
              <p>
                {" "}
                <UilSearch size="50" className="iconBG" />{" "}
              </p>
            </Link>
          </div>
        </div>

        <div className="card-body removeUnderline">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">{item.description}</p>
          <h5> price : $ {item.price}</h5>
        </div>
      </div>
    </div>
  );
}

StoreProps.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};
export default StoreProps;
