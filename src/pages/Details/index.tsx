import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import {
  Main,
  Container,
  CountryInformation,
  BorderCountries,
  Image,
  Text,
  CountryName,
  CountryInformationContent,
  Left,
  Right,
  BackLink,
} from "./styles";
import ReactLoading from "react-loading";
import { BsArrowLeft } from "react-icons/bs";
import { useTheme } from "styled-components";

type Country = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  currencies: string;
  languages: any;
  tld: string;
  flags: {
    png: string;
    svg: string;
  };
};

export function Details() {
  const [loading, setLoading] = useState(false);
  const [borderCountries, setBorderCountries] = useState<any>([]);
  const [country, setCountry] = useState<Country | null>(null);
  const { name } = useParams();

  const theme = useTheme();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const res = await api.get(`/name/${name}`);
      setCountry(res.data[0]);

      if (res.data[0].borders) {
        res.data[0].borders.forEach(async (code: string) => {
          const borderCountriesRes = await api.get(`/alpha/${code}`);
          let newBorderCountriesArray = [
            ...borderCountries,
            borderCountriesRes.data[0].name.common,
          ];
          setBorderCountries(newBorderCountriesArray);
        });
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <Main>
        {loading ? (
          <div className="loading">
            <h2>Loading data</h2>
            <br />
            <ReactLoading
              type="bubbles"
              // @ts-ignore
              color={theme?.body === "#fff" ? "#222" : "#fff"}
              className="loadingIcon"
              width={80}
            />
          </div>
        ) : (
          <Container>
            <BackLink to="/">
              <BsArrowLeft
                //@ts-ignore
                color={theme?.body === "#fff" ? "#222" : "#fff"}
                size={24}
              />
              <span>Back</span>
            </BackLink>
            {country !== null ? (
              <CountryInformation>
                <Image>
                  <img src={country?.flags.svg} alt={country?.name.common} />
                </Image>
                <Text>
                  <CountryName>
                    <span>{country?.name.common}</span>{" "}
                  </CountryName>
                  <CountryInformationContent>
                    <Left>
                      <span>
                        <b>Native Name: </b>
                        {country?.name.official}
                      </span>
                      <span>
                        <b>Population: </b>
                        {country?.population}
                      </span>
                      <span>
                        <b>Region: </b>
                        {country?.region}
                      </span>
                      <span>
                        <b>Subregion: </b>
                        {country?.subregion}
                      </span>
                      <span>
                        <b>Capital: </b>
                        {country?.capital}
                      </span>
                    </Left>
                    <Right>
                      <span>
                        <b>Top Level Domain: </b>
                        {country?.tld}
                      </span>
                      {/* @ts-ignore */}
                      <span>
                        <b>Currencies: </b>
                        {Object.keys(country?.currencies).join(", ")}
                      </span>
                      <span>
                        <b>Languages: </b> Portuguese
                      </span>
                    </Right>
                  </CountryInformationContent>
                  <BorderCountries>
                    {borderCountries.length > 0 && (
                      <>
                        <span>Border Countries: </span>
                        {borderCountries.map((country: string, key: number) => {
                          <span key={key}>{country}</span>;
                        })}
                      </>
                    )}
                  </BorderCountries>
                </Text>
              </CountryInformation>
            ) : (
              <h2>Could'nt find country information</h2>
            )}
          </Container>
        )}
      </Main>
    </>
  );
}
