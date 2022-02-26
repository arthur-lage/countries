import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Country } from "../../components/Country";

import ReactLoading from "react-loading";
import { Main, CountryList } from "./styles";
import { useTheme } from "styled-components";

export function Home() {
  const [countries, setCountries] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const theme = useTheme()

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await api.get("/all");

      setCountries(res.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
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
          <CountryList>
            {/* @ts-ignore */}
            {countries.map((country, key) => (
              <Country props={country} key={key} />
            ))}
          </CountryList>
        )}
      </Main>
    </div>
  );
}
