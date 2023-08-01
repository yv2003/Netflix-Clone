
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* <h1>lets build netflix clone frontend </h1> */}
      {/*navabar */}
      {/*banner */}
      <Nav/>
      <Banner/>
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies} />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentries"
        fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
