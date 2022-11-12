import React, { useEffect, useState } from "react";
import {
  AllBooksDisplay,
  DisplayBook,
  MainStore,
  NavBar,
} from "./BookStore.styled";
import Cart from "./Cart";
import SingleBook from "./SingleBook";

export default function BookStore() {
  const [store, setStore] = useState([]);
  const [cart, setCart] = useState([]);

  const seconds = [
    { id: 1, second: 10 },
    { id: 2, second: 20 },
    { id: 3, second: 30 },
    { id: 4, second: 40 },
    { id: 5, second: 50 },
  ];

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  const addBookHandler = (book) => {
    setCart([...cart, book]);
  };

  return (
    <MainStore>
      <DisplayBook>
        <NavBar>
          <h1>BOOKS-READER-STORE</h1>
        </NavBar>
        <h2>Select Today's Book</h2>
        <AllBooksDisplay>
          {store.map((book) => (
            <SingleBook
              book={book}
              key={book.id}
              addBookHandler={addBookHandler}
            />
          ))}
        </AllBooksDisplay>
      </DisplayBook>
      <Cart seconds={seconds} cart={cart}></Cart>
    </MainStore>
  );
}
