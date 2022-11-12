import styled from "styled-components";

export const QuestionAnsDiv = styled.div`
  width: 90%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 5rem;
  margin-top: 50px;
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const QusestionItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  h2 {
    margin-bottom: 10px;
  }
  p {
    text-align: justify;
    color: gray;
  }
`;
