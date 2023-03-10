import React, { useEffect, useState } from "react";
import SingleSecond from "./SingleSecond";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddBreak,
  BookReadingDetails,
  CompleteButton,
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
    totalSeconds = totalSeconds + second.second;
  }

  const addBreakSecond = (e) => {
    localStorage.setItem("second", e.second);
    setSecondValue(e.second);
  };

  const notify = () => toast.success("You Completed Todays Reading");

  return (
    <DisplayUserAct>
      <UserInfo>
        <h2>Md Gulam Quddus</h2>
        <p>Rome, Italy</p>
        <div>
          <p>5 Books Reading</p>
        </div>
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
          <span> {secondValue ? secondValue : "0"} seconds</span>
        </FlexDiv>
      </BookReadingDetails>
      <CompleteButton onClick={notify}>Activity Completed</CompleteButton>
      <ToastContainer />
    </DisplayUserAct>
  );
}
