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
      <QusestionItem>
        <h2>Question 2. State Vs. Props?</h2>
        <p>
          <strong>State :</strong>
          The state is an updatable structure that is used to contain data or
          information about the component and can change over time. The change
          in state can happen as a response to user action or system event. It
          is the heart of the react component which determines the behavior of
          the component and how it will render. A state must be kept as simple
          as possible. It represents the component's local state or information.
          It can only be accessed or modified inside the component or by the
          component directly.
        </p>
        <p>
          <strong>Props :</strong>
          Props are read-only components. It is an object which stores the value
          of attributes of a tag and work similar to the HTML attributes. It
          allows passing data from one component to other components. It is
          similar to function arguments and can be passed to the component the
          same way as arguments passed in a function. Props are immutable so we
          cannot modify the props from inside the component.
        </p>
      </QusestionItem>
      <QusestionItem>
        <h2>Question 3. Uses of useEffect Hook in react?</h2>
        <p>
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers. useEffect accepts two arguments. The
          second argument is optional. The callback function we pass to the
          useEffect hook runs the side effects. React runs it on every render of
          a component by default. However, side effects can be expensive and
          performance-intensive to run on every render. We can control it using
          the dependency array argument we pass to the useEffect hook. In this
          section, we will learn six usages of useEffect hook to run and clean
          up a side effect.
        </p>
      </QusestionItem>
    </QuestionAnsDiv>
  );
}
