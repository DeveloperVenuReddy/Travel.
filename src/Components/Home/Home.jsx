import React from 'react';
import video from '../../assets/video.mp4';
import "./home.css";

const Home = () => {
  return (
    <section className='home'>
      <div className="overLay"></div>
      <video src={video} muted autoPlay loop typeof='video/mp4'></video>
      <div className="homeContent container">
        <div className="textDiv">
          <spam className="smallText">
            Our Packages
          </spam>
          <h1 className="homeTitle">
            Search your holiday
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home;
