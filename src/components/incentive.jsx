import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Incentive = (props) => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="incentive">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>How does it work?</h2>
        </div>
        <div className="incentive text-center"  data-aos="fade-up">
          <p>
           It all starts with a lodge profile, once completed, Lodges will be given a page on the new Provincial website in 2024. They will also be included on the UGLE and Provincial ‘new candidate placement’ list. Lodges who provide a quality profile of the very highest standard will be given a Provincial Certificate of Excellence.</p> 
        </div>
      </div>
    </div>
  );
};
