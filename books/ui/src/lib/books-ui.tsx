import styled from 'styled-components';
import { Button } from '@acme/ui';

export interface BookProps {
  book: any;
}
const StyledBooksUi = styled.div`
  /* color: pink; */
`;

export function BooksUi() {
  return (
    <StyledBooksUi>
      <h1>Welcome to BooksUi!</h1>
    </StyledBooksUi>
  );
}

export default BooksUi;
