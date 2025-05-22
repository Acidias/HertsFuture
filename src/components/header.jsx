import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Header = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
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
              <div className="text-center mt-[25]" data-aos="fade-up">
                <img src="../img/logo-p3.png" alt="Logo" className="header-logo"/>
              </div>
              <br/>
              {/* Video */}
              <div className="text-center my-[25] mx-auto w-2/3" data-aos="fade-up"> {/* Added `mx-auto` and `w-1/2` here */}
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
