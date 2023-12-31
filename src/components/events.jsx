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
        Sign up to attend a seminar, this will enable you to find out more about the lodge profile form and give you a chance to ask questions. All are welcome to attend either in person or virtually, and we recommend at least one member of each lodge attends one session.</p><br/><br/>       
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
