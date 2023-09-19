import React from "react";

export const Events = (props) => {
  return (
    <div id="events" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Events Workshops</h2>
        </div>
        <div className="row justify-content-center">
        {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.location}-${i}`} className="col-xs-6 col-md-3">
                  <img src={d.image}></img>
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
