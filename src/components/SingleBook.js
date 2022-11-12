import React from "react";
import { BookCard, BookImg, CardButton } from "./SingleBook.styled";

export default function SingleBook({ book, addBookHandler }) {
  const { name, img, second } = book;
  return (
    <BookCard>
      <BookImg src={img} alt="No Image Found" />
      <h2>{name}</h2>
      <p>Time Required : {second}s</p>
      <CardButton onClick={() => addBookHandler(book)}>Add Book</CardButton>
    </BookCard>
  );
}
