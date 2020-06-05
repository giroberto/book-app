import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    window
      .fetch('https://desolate-hollows-83265.herokuapp.com/books')
      .then((response) => response.json())
      .then((response) => setBooks(response.books));
  }, []);
  return (
    <div className="m-8 md:mx-64">
      {books.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </div>
  );
}
