import styled from "styled-components";

export const HomeContainer = styled.main`
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;

    @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`