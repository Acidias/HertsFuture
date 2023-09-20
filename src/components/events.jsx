import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Events = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="events" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Events Workshops</h2>
        </div>
        <div className="row justify-content-center" data-aos="fade-up">
        {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.location}-${i}`} className="col-xs-6 col-md-3">
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
