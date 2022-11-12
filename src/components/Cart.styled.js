import styled from "styled-components";
export const DisplayUserAct = styled.div`
  background-color: #fff;

  h3 {
    margin: 20px 15px;
  }
`;

export const UserInfo = styled.div`
  margin: 15px 20px;
`;

export const AddBreak = styled.div`
  width: 95%;
  background-color: #ecf0f1;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  border-radius: 5px;
`;

export const BookReadingDetails = styled.div``;

export const FlexDiv = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  background-color: #ecf0f1;
  border-radius: 5px;
`;

export const CompleteButton = styled.button`
  display: block;
  width: 95%;
  margin: 0 auto;
  background-color: #8e44ad;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
`;
