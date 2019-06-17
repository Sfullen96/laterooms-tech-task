import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import './App.scss';

import SearchResults from './components/SearchResults/SearchResults';
import Filter from './components/Filter/Filter';
import { getData, getFilters } from './data';

function App() {
  const [data, setData] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const results = await getData();
      const filters = await getFilters();
      setData({ results, filters });
    };

    // Simulate an API call
    setTimeout(() => {
      fetchData();
    }, 1500);
  }, []);

  const filter = async e => {};

  const clearFilter = async () => {};

  return (
    <Container className="App">
      <Filter
        facilities={data.filters}
        filter={filter}
        selectedFilter={selectedFacility}
        clearFilter={clearFilter}
      />
      <SearchResults results={data.results} />
    </Container>
  );
}

export default App;
