import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Testimonials } from "./components/testimonials";
import { Events } from "./components/events";
import { WebsiteLinks } from "./components/websitelinks";
import { Roadmap } from "./components/roadmap";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';


import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  AOS.refresh()

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Testimonials data={landingPageData.Testimonials} />
      <Roadmap data={landingPageData.Roadmap} />
      <Events data={landingPageData.Events} />
      <WebsiteLinks data={landingPageData.Links} />

    </div>
  );
};

export default App;
