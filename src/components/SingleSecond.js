import React from "react";
import { SecondButton } from "./SingleSecond.styled";

export default function SingleSecond({ second, addBreakSecond }) {
  return (
    <SecondButton onClick={() => addBreakSecond(second)}>
      {second.second}s
    </SecondButton>
  );
}
