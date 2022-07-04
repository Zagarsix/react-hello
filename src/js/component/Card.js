import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt={props.imgLabel} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div class="card-footer">
          <a href={props.buttonURL} className="btn btn-primary">
            {props.buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  imgLabel: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;
