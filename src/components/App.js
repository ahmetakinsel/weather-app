import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecasts from "../requests/getForecast";
import "../styles/App.css";
import SearchForm from "./SearchForm";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );
  useEffect(() => {
    getForecasts(setSelectedDate, setForecasts, setLocation);
  }, []);
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  };
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
