import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeProps(props) {
  return (
    <div className="col-3 card me-5 text-center" key={props.id}>
      <img className="card-img-top home-img" src={props.img} alt="card "></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={"/store/"}>
          <p className="btn btn-primary">{props.btn}</p>
        </Link>
      </div>
    </div>
  );
}
HomeProps.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default HomeProps;
