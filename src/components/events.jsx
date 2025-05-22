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
Please use the links below to book into a workshop. You can select any workshop
you like, it doesn&#39;t need to be at your lodge&#39;s masonic centre.


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
