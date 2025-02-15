import React from "react";
import "./Body.css";
import img1 from "./img1.avif";
import img2 from "./img2.avif";

function Body() {
  return (
    <div>
      <div className="image1-div">
        <img className="img1" src={img1} alt="Image" />
        <div className="data">
          <h1>Let us find your <strong style={{color:"rgb(189, 23, 63)"}}>Forever Food.</strong></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
          <div className="button-div">
          <button style={{backgroundColor:"rgb(189, 23, 63)",color:"white"}}>Search Now</button>
          <button>Know More</button>
          </div>
        </div>
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
