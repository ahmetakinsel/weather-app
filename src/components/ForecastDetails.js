import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

const ForecastDetails = (props) => {
  const { forecasts } = props;
  return (
    <div className="forecast-details">
      {forecasts.map((forecast) => (
        <ForecastDetails
          date={forecast.date}
          humidity={forecast.humidity}
          temperature={forecast.temperature}
          min={forecast.temperature.min}
          max={forecast.temperature.max}
          wind={forecast.wind}
          speed={forecast.wind.speed}
          direction={forecast.wind.direction}
        />
      ))}
    </div>
  );
};

LocationDetails.propTypes = {
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
};

export default LocationDetails;
