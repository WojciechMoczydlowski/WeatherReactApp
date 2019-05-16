import React from "react";

import backgroundImg from "./img/sky.jpg";

import SearchPanel from "./components/SearchPanel";
import WeatherListing from "./scenes/WeatherListing/WeatherListing";

const MainPage = props => {
  return (
    <div>
      <SearchPanel />
      <WeatherListing />
    </div>
  );
};

export default MainPage;
