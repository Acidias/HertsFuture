import React from "react";

export const Roadmap = (props) => {
  return (
    <div id="roadmap" className="text-center">
        <br/>
        <div className="roadmap text-center">
          <h2>LODGE PROFILE</h2>
        </div>
        <div className="roadmap text-center">
          <p>
           It all starts with a lodge profile, once completed, Lodges will be given a page on the new Provincial website in 2024. They will also be included on the UGLE and Provincial ‘new candidate placement’ list. Lodges who provide a quality profile of the very highest standard will be given a Provincial Certificate of Excellence.</p>
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
