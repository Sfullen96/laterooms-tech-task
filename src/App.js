import React from 'react';
import { Container } from 'react-bootstrap';

import './App.scss';

import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <Container className="App">
      <SearchResults />
    </Container>
  );
}

export default App;
