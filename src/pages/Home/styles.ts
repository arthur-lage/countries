import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  background: ${(props) => props.theme.body};
  height: 100vh;
  width: 100vw;
  padding: 4rem 8rem;
  margin-top: 10rem;

  .loading {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: #222;
    font-size: 2.2rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .loading h2 {
    margin-bottom: 2rem;
  }
`;
