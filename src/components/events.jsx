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
We have a variety of online and in-person workshops for you to attend. These will give you
all the information needed to complete the form. Anybody can attend these events, but we
ask that you register with us before attending. </p>
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
