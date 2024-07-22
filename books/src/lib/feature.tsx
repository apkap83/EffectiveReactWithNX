import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import { link } from 'fs';

const StyledFeature = styled.div`
  /* color: pink; */
`;

export function BooksFeature() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);
  return (
    <StyledFeature>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Added ${book.title}`)} />
    </StyledFeature>
  );
}

export default BooksFeature;
