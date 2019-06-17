import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import './App.scss';

import SearchResults from './components/SearchResults/SearchResults';
import Filter from './components/Filter/Filter';
import { getData } from './data';

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setResults(data);
    };

    // Simulate an API call
    setTimeout(() => {
      fetchData();
    }, 1500);
  }, []);

  return (
    <Container className="App">
      <Filter />
      <SearchResults results={results} />
    </Container>
  );
}

export default App;
