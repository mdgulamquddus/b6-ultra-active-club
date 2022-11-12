import styled from "styled-components";

export const MainStore = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const DisplayBook = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;

  h2 {
    margin: 30px 0;
    color: #2c3e50;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  color: #9b59b6;
  h1 {
    margin-left: 10px;
  }
  svg {
    font-size: 40px;
  }
`;

export const AllBooksDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
  }
`;
