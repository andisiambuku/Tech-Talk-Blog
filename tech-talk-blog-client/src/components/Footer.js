import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Tech Talk Blog</h1>

        <h2>Contact</h2>

        <address>
          5534 Nairobi,Kenya
          <a className="footer__btn" href="techtalkblog@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Categories</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Industry Talk</a>
            </li>

            <li>
              <a href="#">Internet Policy</a>
            </li>

            <li>
              <a href="#">Open Source</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Technology</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Software Design</a>
            </li>

            <li>
              <a href="#">Automation</a>
            </li>

            <li>
              <a href="#">Artificial Intelligence</a>
            </li>

            <li>
              <a href="#">IoT</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Careers</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Join Us</a>
            </li>

            <li>
              <a href="#">Jobs</a>
            </li>

            <li>
              <a href="#">Write for Us</a>
            </li>
          </ul>
        </li>
      </ul>
      <br></br>
      <div className="legal">
        <p>&copy; 2022. All rights reserved.</p>

        <div className="legal__links">
          <span>Information Hub for the Digital Sahara</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
