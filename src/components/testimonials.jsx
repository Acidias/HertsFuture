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
          <h2>Evolving Our Craft - Phase 2</h2>
        </div>
        <div className="introduction text-center" data-aos="fade-up">
          <p>Herts Future is designed with three primary goals in mind: to encourage lodges to pause, discuss, assess, and plan their activities; to reintegrate fun into Freemasonry; and to attract new members. By achieving these objectives, Herts Future aims to breathe new life into the craft, ensuring it remains vibrant and appealing to both current and prospective members.

</p>
        </div>
      </div>
    </div>
  );
};
