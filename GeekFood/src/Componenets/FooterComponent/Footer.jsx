import React from "react";
import "./footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>logoipsum</p>
      </div>
      <div className="footer-text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
      </div>
      <div className="footer-nav">
        <ul className="footer-list">
          <li>About</li>
          <li>Career</li>
          <li>History</li>
          <li>Serice</li>
          <li>Project</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
