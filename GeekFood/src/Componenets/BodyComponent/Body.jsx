import React from "react";
import "./Body.css";
import img1 from "./img1.avif";
import img2 from "./img2.avif";

function Body() {
  return (
    <div>
      <div className="image1-div">
        <img className="img1" src={img1} alt="Image" />
      </div>
      <div className="detail-div">
        <div className="image2-div">
          <img className="img2" src={img2} alt="Image" />
        </div>
        <div className="text-div">
          <div className="text">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
          <p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
        <button className="touch-button">Get In Touch</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
