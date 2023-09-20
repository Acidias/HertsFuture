import React from "react";

export const Roadmap = (props) => {
  return (
    <div id="roadmap" className="text-center">
        <br/><br/>
      <div className="container">
        <div className="roadmap text-center">
          <h2>LODGE PROFILE</h2>
        </div>
      </div>
        <br/><br/>
        <div className="roadmap text-center">
          <p>
Each lodge is required to fill in a profile form, this not only provides vital information for the province, but empowers you to reflect on your lodge health. The simple three step process is below:</p>
        </div>
      <br/><br/>
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
