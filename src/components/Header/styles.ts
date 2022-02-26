import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  width: 100vw;
  padding: 3rem 8rem;
  background: #fff;
  transition: 0.2s ease;

  .title {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    font-weight: 700;
  }

  .title a {
    color: #222;
    text-decoration: none;
  }

  body.dark .title a {
    color: #fff;
  }

  .themeWrapper {
    border-radius: 50rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 8rem;
    cursor: pointer;
    position: relative;
    transition: 0.2s ease;
    background: #ffffff;
  }

  .themeWrapper.dark {
    background: #1f0d38;
  }

  .themeToggler {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: 0.2s ease;
    position: absolute;
    left: 0;
  }

  .themeToggler.dark {
    left: 45%;
  }
`;
