import React, { useEffect, useState } from "react";
import SingleSecond from "./SingleSecond";
import {
  AddBreak,
  BookReadingDetails,
  DisplayUserAct,
  FlexDiv,
  UserInfo,
} from "./Cart.styled";

export default function Cart({ seconds, cart }) {
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    const getSeconds = localStorage.getItem("second");
    setSecondValue(getSeconds);
  }, []);
  let totalSeconds = 0;

  for (const second of cart) {
    totalSeconds = totalSeconds + second.price;
  }

  const addBreakSecond = (e) => {
    localStorage.setItem("second", e.second);
    setSecondValue(e.second);
  };

  return (
    <DisplayUserAct>
      <UserInfo>
        <h2>Md Gulam Quddus</h2>
        <p>Rome, Italy</p>
      </UserInfo>
      <h3>Add Break</h3>
      <AddBreak>
        {seconds.map((second) => (
          <SingleSecond
            second={second}
            key={second.id}
            addBreakSecond={addBreakSecond}
          />
        ))}
      </AddBreak>
      <BookReadingDetails>
        <h3>Book Reading Details</h3>
        <FlexDiv>
          <h3>Reading Times</h3>
          <span>{totalSeconds} seconds</span>
        </FlexDiv>
        <FlexDiv>
          <h3>Break Time</h3>
          <span>{secondValue} seconds</span>
        </FlexDiv>
      </BookReadingDetails>
    </DisplayUserAct>
  );
}
