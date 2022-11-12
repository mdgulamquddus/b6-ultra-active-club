import React from "react";
import { QuestionAnsDiv, QusestionItem } from "./QuestionAns.styled";

export default function QuestionAns() {
  return (
    <QuestionAnsDiv>
      <QusestionItem>
        <h2>Question 1. How Does React Works?</h2>
        <p>
          React is a JavaScript library (not a framework) that creates user
          interfaces (UIs) in a predictable and efficient way using declarative
          code. You can use it to help build single page applications and mobile
          apps, or to build complex apps if you utilise it with other libraries.
          What is declarative code? React works in declarative code. To show
          what we mean by declarative code, we want you to imagine the following
          code expressed as an app. What you picture could look like the screen
          below, with a navbar, a header, a filter, and a list. That’s because
          each line of code declares what each element of the app is. Did what
          you picture the app to look like match our app’s screen? So, you’ve
          read the code and learned something fundamental about the design.
          That’s because declarative code describes what we want instead of
          saying how to do it, as you would with imperative code. At its core,
          declarative code is like visiting a restaurant and ordering a meal.
          You tell the waiter what you want, but you don’t go in the kitchen to
          tell the chef how to cook it. Declarative code describes the end
          result, but doesn’t act as a step-by-step guide of how to do it. In
          practice, that means declarative code is lightweight, easier to
          understand and change, and has less bugs.
        </p>
      </QusestionItem>
      <QusestionItem>Q2</QusestionItem>
      <QusestionItem>Q3</QusestionItem>
    </QuestionAnsDiv>
  );
}
