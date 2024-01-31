import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/gallery/gallery6.jpg";

export const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h2>Tivra Institute of IT Training and Research Center</h2>
          <h1>Powerful Digital Tech Solution</h1>
          <p>
          Excitement abounds as 1st step into a world of limitless possibilities! #TivraJoy
          </p>
          <Link to="/plans" className="btn lg">
            Learn More
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} className="header-img" alt="headerimg"/>
          </div>
        </div>
      </div>
    </header>
  );
};
