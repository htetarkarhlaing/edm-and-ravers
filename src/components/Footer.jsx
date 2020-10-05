import React from "react";
import { Link } from "react-router-dom";
import { AboutUs, ContactUs } from "./FooterData";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row mx-2 pt-4">
        <div className="col-md-6 col-12 pb-4">
          <p className="subscribe-text">
          Join our exclusive membership to receive the latest news and trends.
          </p>
          <p className="subscribe-text-small">
          You can unsubscribe at any time.
          </p>
          <form className="footer-input">
            <input
              className="footer-input-box"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="footer-input-btn">Subscribe</button>
          </form>
        </div>
        <div className="col col-md-3 col-6 footer-links">
          <h2>{AboutUs.name}</h2>
          {AboutUs.data.map((data, key) => {
            return (
              <Link key={key} to={data.to}>
                {data.text}
              </Link>
            );
          })}
        </div>
        <div className="col col-md-3 col-6 footer-links">
          <h2>{ContactUs.name}</h2>
          {ContactUs.data.map((data, key) => {
            return (
              <Link key={key} to={data.to}>
                {data.text}
              </Link>
            );
          })}
        </div>
      </div>

      <hr className="footer-hr" />

      <div className="footer-copyright">
        <h4>&#169;2019-2020 EDM & Ravers.<Link to='/'>Privacy policy</Link></h4>
      </div>
    </div>
  );
}

export default Footer;
