import React, { useState } from "react";
import Logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [setIsNavShowing] = useState(false);
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="Nav Logo" />
            {/* <h3>TivraSoft</h3> */}
          </Link>
          <p>
            Here's to embracing knowledge, forging connections, and embracing
            the boundless opportunities that lie ahead.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/company/tivrasoft/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063453194538"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Page</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          @-2023 Tivra Institute of It Training and Research Center &copy; All
          Right Reserved {"Kshitiz Duwadi"}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
