import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.pays} />
    <figcaption>
      <blockquote>{props.lieu}</blockquote>
      <cite>{props.pays}</cite>
    </figcaption>
  </figure>
);

export default Travel;