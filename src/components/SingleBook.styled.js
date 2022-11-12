import styled from "styled-components";
export const BookCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  position: relative;

  p {
    margin: 50px 0;
  }
`;

export const BookImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardButton = styled.button`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #8e44ad;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
`;
