import React from "react";

export const Roadmap = (props) => {
  return (
    <div id="roadmap" className="text-center">
      <div className="container">
        <div className="row justify-content-center mb-6">
          <div className="circle">PREPARE</div>
          <div className="arrow">&gt;</div>
          <div className="circle">COMPLETE</div>
          <div className="arrow">&gt;</div>
          <div className="circle">SUBMIT</div>
        </div>
        <div className="buttons">
          <button className="roadmap-button">SEE THE FORM</button>
          <button className="roadmap-button">SEE AN EXAMPLE</button>
        </div>
      </div>
    </div>
  );
};
