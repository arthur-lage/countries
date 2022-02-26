import styled from "styled-components";

export const Main = styled.div`
  background: ${(props) => props.theme.body};
  min-height: 100vh;
  width: 100vw;
  padding: 4rem 8rem;

  .loading {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.text};
    font-size: 2.2rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .loading h2 {
    margin-bottom: 2rem;
  }

  .loadingIcon {
    color: ${(props) => props.theme.text};
  }
`;

export const CountryList = styled.div`
  margin-top: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
