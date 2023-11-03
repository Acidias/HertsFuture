import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Events = (props) => {
  const delayInterval = 200;  // Change this value as needed
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div id="events" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Events Workshops</h2>
        </div>
        <div className="events text-center"  data-aos="fade-up">
          <p>
        All events workshops have now taken place, but you can catch up on a seminar by watching it online. Please complete the form and you will be provided a link to watch the seminar online.</p><br/><br/>  
</div>

        <div className="row justify-content-center">
        {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.location}-${i}`} 
                  className="text-center" 
                  data-aos="fade-up"
                  // data-aos-delay={i * delayInterval}
                >
                  <div className="text-center">
                    <a href={d.url} className="btn btn-primary">{d.location}</a>
                  </div><br/>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
