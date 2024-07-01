import React, { useEffect } from "react";
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
          <h2>Action Plan</h2>
        </div>
      </div>
        <div className="roadmap text-center"  data-aos="fade-up">
          <p>Each lodge is now required to create an action plan. Using the previous lodge profile, this action plan will enable each lodge to assign individual tasks. We are doing this process once again in three simple steps.</p>
        </div>
      <br/><br/>
      <div className="container" >
<div className="circles mb-6">
  <div>
  <div className="circle-month" data-aos="fade-up">JULY</div>
  <div className="circle" data-aos="fade-up">PREPARE</div>
  </div>
  <div className="arrow">&gt;</div>
  <div>
  <div className="circle-month" data-aos="fade-up">AUG</div>
  <div className="circle" data-aos="fade-up">COMPLETE</div>
  </div>
  <div className="arrow">&gt;</div>
  <div>
  <div className="circle-month" data-aos="fade-up">SEPT</div>
  <div className="circle" data-aos="fade-up">SUBMIT</div>
  </div>
</div>

        <div className="text-center">
          <a href="https://forms.gle/xxycEHCLVYyNNxNX9" className="btn btn-primary">Lodge Action Plan</a>
          <br/>
        </div>
      </div>
    </div>
  );
};
