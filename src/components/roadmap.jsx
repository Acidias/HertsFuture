import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Roadmap = (props) => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="roadmap" className="text-center">
        <br/>
      <div className="container">
        <div className="roadmap text-center section-title" data-aos="fade-up">
          <h2>LODGE PROFILE</h2>
        </div>
      </div>
        <div className="roadmap text-center"  data-aos="fade-up">
          <p>
Each lodge is required to fill in a profile form, this not only provides vital information for the province, but empowers you to reflect on your lodge health. The simple three step process is below:</p>
        </div>
      <br/><br/>
      <div className="container" >
        <div className="circles mb-6">
          <div className="circle" data-aos="fade-up">PREPARE</div>
          <div className="arrow">&gt;</div>
          <div className="circle" data-aos="fade-up">COMPLETE</div>
          <div className="arrow">&gt;</div>
          <div className="circle" data-aos="fade-up">SUBMIT</div>
        </div>
        <div className="buttons">
          <a href="https://forms.gle/xxycEHCLVYyNNxNX9" className="btn btn-primary">Lodge Profile Form</a>
          <br/><br/>
          <a href="https://forms.gle/xxycEHCLVYyNNxNX9" className="btn btn-primary">See An Example</a>
        </div>
      </div>
    </div>
  );
};
