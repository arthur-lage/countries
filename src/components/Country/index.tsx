import React from "react";
import { Container } from "./styles";

type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
};

type CountryProps = {
  props: Country;
};

export function Country({ props }: CountryProps) {
  return (
    <Container to={`/details/${props.name.common}`}>
      <img className={"image"} src={props.flags.png} alt={props.name.common} />

      <div className={"information"}>
        <span className={"name"}>{props.name.common}</span>
        <span className={"population"}>Population: {props.population}</span>
        <span className={"region"}>Region: {props.region}</span>
        <span className={"capital"}>Capital: {props.capital}</span>
      </div>
    </Container>
  );
}
