import React from "react";
import "./notFound.css";
import { CgDanger } from "react-icons/cg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound">
        <h1 className="text" >TivraSoft</h1>
        <h2><CgDanger/>Page Not Found</h2>
        <Link to="/" className='btn'>
          Get back to  home page
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
