import React from "react";

export const Header = (props) => {

  if(!props.data){
    return <p>Loading...</p>; // Display a loading message or a spinner
  }

  const url = props.data.url;


  return (
    <header id="header">
      <div className="intro blue-bg-hertsD">
          <div className="container">
            <div className="row justify-content-center">
              
              {/* Logo */}
              <div className="text-center mt-[25]">
                <img src="../img/Logo-white.png" alt="Logo" className="header-logo"/>
              </div>
              <br/>
              {/* Video */}
              <div className="text-center my-[25] mx-auto w-2/3"> {/* Added `mx-auto` and `w-1/2` here */}
                <div className="header-video aspect-video">
                  <iframe 
                    width={"100%"}
                    height={"100%"}
                    src={url}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                <br/>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </header>
  );
};
