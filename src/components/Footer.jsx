import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Top Cities</h4>
          <ul className="footer-links">
            <li><a href="#">Bengaluru</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Ahmedabad</a></li>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Noida</a></li>
            <li><a href="#">Gurgaon</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Communities</h4>
          <ul className="footer-links">
            <li><a href="#">Flat And Flatmates Bengaluru</a></li>
            <li><a href="#">Flat And Flatmates Pune</a></li>
            <li><a href="#">Flat And Flatmates Mumbai</a></li>
            <li><a href="#">Flat And Flatmates Hyderabad</a></li>
            <li><a href="#">Flat And Flatmates Ahmedabad</a></li>
            <li><a href="#">Flat And Flatmates Delhi</a></li>
            <li><a href="#">Flat And Flatmates Noida</a></li>
            <li><a href="#">Flat And Flatmates Gurgaon</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">Find A Roommate</a></li>
            <li><a href="#">Advertise A Room</a></li>
            <li><a href="#">Post A Room Wanted Ad</a></li>
            <li><a href="#">Advertise A Full Apartment</a></li>
            <li><a href="#">Flat And Flatmates Communities</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <span>Follow Us On</span>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-bottom">RoomMateConnect © 2025. All Rights Reserved</div>
    </footer>
  );
}
