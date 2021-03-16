  
import {
    faStar,
    faStarHalfAlt as halfStar,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faStar as noStar } from "@fortawesome/free-regular-svg-icons";
  
  import React from "react";
  
  const Rating = ({ rating, color = "#00A799" , reviews , superhost}) => {
    return (
      <div>
        <span style={{ color: color }}>
          {rating >= 1 ? (
            <FontAwesomeIcon icon={faStar} />
          ) : rating >= 0.5 ? (
            <FontAwesomeIcon icon={halfStar} />
          ) : (
            <FontAwesomeIcon icon={noStar} />
          )}
        </span>
        <span style={{ color: color }}>
          {rating >= 2 ? (
            <FontAwesomeIcon icon={faStar} />
          ) : rating >= 1.5 ? (
            <FontAwesomeIcon icon={halfStar} />
          ) : (
            <FontAwesomeIcon icon={noStar} />
          )}
        </span>
        <span style={{ color: color }}>
          {rating >= 3 ? (
            <FontAwesomeIcon icon={faStar} />
          ) : rating >= 2.5 ? (
            <FontAwesomeIcon icon={halfStar} />
          ) : (
            <FontAwesomeIcon icon={noStar} />
          )}
        </span>
        <span style={{ color: color }}>
          {rating >= 4 ? (
            <FontAwesomeIcon icon={faStar} />
          ) : rating >= 3.5 ? (
            <FontAwesomeIcon icon={halfStar} />
          ) : (
            <FontAwesomeIcon icon={noStar} />
          )}
        </span>
        <span style={{ color: color }}>
          {rating >= 5 ? (
            <FontAwesomeIcon icon={faStar} />
          ) : rating >= 4.5 ? (
            <FontAwesomeIcon icon={halfStar} />
          ) : (
            <FontAwesomeIcon icon={noStar} />
          )}
        </span>
        <span> {reviews && reviews} {" "} <strong> {superhost}</strong></span> 
      </div>
    );
  };
  
  export default Rating;