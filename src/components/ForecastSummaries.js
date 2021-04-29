import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/App.css";

const ForecastSummaries = (props) => {
  const { forecasts, onForecastSelect } = props;
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon.toString()}
          temperature={forecast.temperature}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf.isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
