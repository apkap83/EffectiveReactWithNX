import styled from 'styled-components';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@acme/ui';
import { BooksFeature } from '@acme/feature';
// import NxWelcome from './nx-welcome';

export function App() {
  let navigate = useNavigate();
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/stores">Stores</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      {/* <NxWelcome title="bookstore" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <Routes>
        <Route path="/" element={<BooksFeature />} />
        <Route path="/books" element={<BooksFeature />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
