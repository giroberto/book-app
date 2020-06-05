import React from 'react';
import { Router } from '@reach/router';
import BookCard from '../components/BookCard';
import BookList from './BookList';

function Rt(): React.FC {
  return (
      <Router>
        <BookList path="/" />
        <BookCard path="/test" />
      </Router>
  );
}

export default Rt;
