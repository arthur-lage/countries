import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  width: 27.5rem;
  height: 40rem;
  cursor: pointer;
  text-decoration: none;
  background: #fff;
  border-radius: 8px;
  transition: 0.2s ease;

  &:hover {
    background: rgb(233, 233, 233);
  }

  .image {
    width: 20rem;
    height: 15rem;
    border-radius: 4px;
    margin-bottom: 2rem;
  }

  .information {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    padding: 1rem;
    color: #222;
    font-family: "Montserrat", sans-serif;
  }

  .name {
    font-weight: 500;
    font-size: 2.4rem;
    color: #222;
    margin-bottom: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;
