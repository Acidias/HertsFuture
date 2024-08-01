import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Events = (props) => {
  const delayInterval = 200;  // Change this value as needed
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div id="incentive" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Events Workshops</h2>
        </div>
        <div className="incentive text-center"  data-aos="fade-up">
          <p>
All workshops have now finished, however you are welcome to watch a recording of our online seminar along with downloading the slides.
</p>
 </div>
<div className="incentive text-center"  data-aos="fade-up">
<p>&nbsp;</p>
<p>
<a href="https://forms.gle/fH1HVGs18yoYVRo4A" className="btn btn-primary">&nbsp;&nbsp;Watch the video&nbsp;&nbsp;</a> &nbsp;&nbsp;&nbsp;
<a href="./docs/Herts-Future-Phase2.pdf" className="btn btn-primary">Download the Slides</a> </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>

      </div>
    </div>
  );
};
