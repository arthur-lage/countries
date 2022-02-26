import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Country } from "../../components/Country";

import ReactLoading from "react-loading";
import { Main } from "./styles";

export function Home() {
  const [countries, setCountries] = useState<any>([]);
  const [loading, setLoading] = useState(false);

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
            <ReactLoading type="bubbles" color="#222" width={80} />
          </div>
        ) : (
          <>
            {/* @ts-ignore */}
            {countries.map((country, key) => (
              <Country props={country} key={key} />
            ))}
          </>
        )}
      </Main>
    </div>
  );
}
