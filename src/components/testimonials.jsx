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
          <h2>GROW YOUR LODGE</h2>
        </div>
        <div className="introduction text-center" data-aos="fade-up">
          <p>Join us for an interactive Herts Future Workshop where Freemasons from across
Hertfordshire will come together to crack the code on attracting new members. With practical
advice, lively round-table discussions, and plenty of lightbulb moments, you&#39;ll leave with
fresh ideas tailored to your lodge and a renewed sense of purpose. Featuring insights from
the new UGLE brand and how to look after your candidates, this 90-minute session is your
springboard to a stronger, more vibrant lodge. Let&#39;s build the future of Freemasonry in
Hertfordshire together.

</p>
        </div>
      </div>
    </div>
  );
};
