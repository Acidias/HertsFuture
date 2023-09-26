import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Testimonials = (props) => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>EVOLVING OUR CRAFT</h2>
        </div>
        <div className="introduction text-center" data-aos="fade-up">
          <p>Lodges are the heartbeat of our province, and we invite your lodge to be a pioneer in the culture shift within our noble fraternity. We present to you, Herts Future, a catalyst to drive improved engagement and greater enjoyment in our Lodges.

This initiative empowers each lodge to reflect, assess, enhance and share the way they operate, encouraging us all to collectively shape the future.
</p>
        </div>
      </div>
    </div>
  );
};
