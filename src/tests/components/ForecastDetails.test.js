import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    wind : {
        speed: 13,
        direction: "s"
    }
  };
  it(" renders the remainder of the information received", () => {
      const { asFragment } = render(
          <ForecastDetails
          date={validProps.date}
          temperature={validProps.forecast.temperature}
          min={validProps.temperature.min}
          max={validProps.temperature.max}
          wind={validProps.forecast.wind}
          speed={validProps.forecast.wind.speed}
          direction={validProps.forecast.wind.direction}
          />
      );
      expect().
  })
});

