import React from "react";

export default function CountryFlag(props) {
  let source = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.country}.svg`;
  return <img className="mt-4 rounded" alt={props.country} src={source} />;
}
