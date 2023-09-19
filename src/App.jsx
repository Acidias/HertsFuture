import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Testimonials } from "./components/testimonials";
import { Events } from "./components/events";
import { WebsiteLinks } from "./components/websitelinks";
import { Roadmap } from "./components/roadmap";
import { Incentive } from "./components/incentive";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Testimonials data={landingPageData.Testimonials} />
      <Roadmap data={landingPageData.Roadmap} />
      <Incentive data={landingPageData.Testimonials} />

      <Events data={landingPageData.Events} />
      <WebsiteLinks data={landingPageData.Links} />


    </div>
  );
};

export default App;
