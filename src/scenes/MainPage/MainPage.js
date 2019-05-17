import React from "react";

import SearchPanel from "./components/SearchPanel";
import Footer from "./components/Footer";
import Background from "./components/Background";
import WeatherListing from "./scenes/WeatherListing/WeatherListing";

const MainPage = props => {
  return (
    <div>
      <SearchPanel />
      <Background/>
      <WeatherListing />
      {/* <Footer/> */}
    </div>
  );
};

export default MainPage;
