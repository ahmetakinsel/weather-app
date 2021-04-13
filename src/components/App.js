import React from 'react';
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from './LocationDetails';
import ForecastSummary from './ForecastSummary';
import { location } from "../data/forecast.json";

function App() {
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummary />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
