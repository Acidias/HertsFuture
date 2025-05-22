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
          <h2>KEEPING IT SIMPLE</h2>
        </div>
      </div>
        <div className="roadmap text-center"  data-aos="fade-up">
          <p>To complete Herts Future Phase 3, each lodge will send a representative to attend
one of the many workshops across the Province. Anyone from your lodge can join, though
it&#39;s especially useful for Secretaries, Membership Officers, and Masters. And remember,
you&#39;re welcome to bring along as many members as you like, the more, the merrier!</p>
        </div>
     </div>
  );
};
