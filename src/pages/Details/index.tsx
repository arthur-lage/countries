import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container } from "./styles";

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
  };
};

export function Details() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<Country | null>(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const res = await api.get(`/name/${name}`);
      setCountry(res.data[0]);

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div>
        {loading ? (
          <h2>Loading</h2>
        ) : (
          <>
            {country !== null ? (
              <div>
                <img src={country?.flags.png} alt={country?.name.common} />
                <span>{country?.name.common}</span>{" "}
                <span>{country?.name.official}</span>
                <span>{country?.population}</span>
                <span>{country?.region}</span>
                <span>{country?.subregion}</span>
                <span>{country?.tld}</span>
                {/* @ts-ignore */}
                <span>{Object.keys(country?.currencies)}</span>
              </div>
            ) : (
              <h2>Could'nt find country information</h2>
            )}
          </>
        )}
      </div>
    </>
  );
}
