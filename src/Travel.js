import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.country} {props.distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;