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
          <h2>Workshops</h2>
        </div>
        <div className="incentive text-center"  data-aos="fade-up">
          <p>
To complete Herts Future Phase 2, each lodge will send a representative to attend
one of the many workshops across the Province. Anyone from your lodge can join, though
it&#39;s especially useful for Secretaries, Membership Officers, and Masters. And remember,
you&#39;re welcome to bring along as many members as you like, the more, the merrier!


</p>
</div>

        <div className="row justify-content-center">
        {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.location}-${i}`} 
                  className="col-xs-6 col-md-3" 
                  data-aos="fade-up"
                  // data-aos-delay={i * delayInterval}
                >
                  <img src={d.image} className="img-circle" alt={d.location}></img>
                  <div className="event-details">
                    <h4>{d.location}</h4>
                    <p>{d.date}</p>
                    <a href={d.url} className="btn btn-primary">Register</a>
                  </div>
                </div>
             ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
