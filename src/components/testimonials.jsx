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
          <h2>MANAGING ENQUIRIES</h2>
        </div>
        <div className="introduction text-center" data-aos="fade-up">
          <p>Join us for a practical and interactive workshop designed to help Hertfordshire Lodges
approach candidate enquiries with greater confidence and consistency. Through role-play
scenarios, group discussion and shared learning, participants will explore how to ask
effective questions, understand a candidate&#39;s true motivations, address misconceptions and
manage expectations honestly from the outset. The session will help Lodges create a
welcoming and positive experience while ensuring that prospective members are suitable,
fully informed and introduced to Freemasonry in the best way.

</p>
        </div>
      </div>
    </div>
  );
};
