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

  const filter = async e => {
    e.persist();
    setSelectedFacility(e.target.value);
    const results = await getData();
    const newResults = results.filter(d => d.facilities.indexOf(e.target.value) !== -1);
    setData({ filters: data.filters, results: newResults });
  };

  const clearFilter = async () => {
    setSelectedFacility('');
    const results = await getData();
    setData({ filters: data.filters, results });
  };
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
