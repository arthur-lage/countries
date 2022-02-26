import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.body};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackLink = styled(Link)`
  margin-top: 15rem;
  margin-left: 8rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 4px;
  width: max-content;
  background: ${(props) => props.theme.header};
  text-decoration: none;
  transition: all.2s ease;

  &:hover {
    filter: brightness(0.85);
  }

  span {
    margin-left: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.text};
  }
`;

export const CountryInformation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  margin-left: 8rem;
`;

export const BorderCountries = styled.div`
    margin-top: 2rem;
    font-size: 1.8rem;
`;

export const Image = styled.div`
  width: 50rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const Text = styled.div`
  margin-left: 8rem;
  color: ${(props) => props.theme.text};
  display: flex;
  font-family: "Montserrat", sans-serif;
  flex-direction: column;
`;

export const CountryName = styled.div`
  color: ${(props) => props.theme.text};
  margin-bottom: 3rem;
  font-size: 3.6rem;
  font-weight: 700;
`;

export const CountryInformationContent = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.8rem;
  }

  b {
    font-weight: 500;
  }
`;

export const Right = styled.div`
  display: flex;
  margin-left: 4rem;
  flex-direction: column;

  span {
    font-size: 1.8rem;
  }

  b {
    font-weight: 500;
  }
`;
