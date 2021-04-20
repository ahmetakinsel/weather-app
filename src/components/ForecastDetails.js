import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = (props) => {
  const { forecast } = props;
  return (
    <div className="forecast-details">
      <div className="forecast-details-date">{forecast.date}</div>
      <div className="humidity">{forecast.humidity}</div>
      <div className="temperature">{forecast.temperature}</div>
      <div className="min-temperature">{forecast.temperature.min}</div>
      <div className="max-temperature">{forecast.temperature.max}</div>
      <div className="wind">{forecast.wind}</div>
      <div className="wind-speed">{forecast.wind.speed}</div>
      <div className="wind-direction">{forecast.wind.direction}</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
