import { NavLink } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-white.png" alt="My Big Little Farm" />
          <p>
            Fresh quail eggs supplied with care from My Big Little Farm in Laezonia,
            Centurion.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/privacy">Privacy Notice</NavLink>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <p>Ndzalama Ngwenya</p>
          <p>Marketing Manager</p>
          <a href="tel:+27782785314">078 278 5314</a>
          <address>
            3 Bodley Road<br />
            Laezonia<br />
            Centurion
          </address>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-list" aria-label="Social media platforms">
            <span className="social-icon" title="Facebook link to be added">
              <FacebookIcon />
              <span className="sr-only">Facebook</span>
            </span>
            <span className="social-icon" title="Instagram link to be added">
              <InstagramIcon />
              <span className="sr-only">Instagram</span>
            </span>
            <span className="social-icon" title="TikTok link to be added">
              <TikTokIcon />
              <span className="sr-only">TikTok</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 My Big Little Farm. All rights reserved.</p>
        <NavLink to="/privacy">Privacy Notice</NavLink>
      </div>
    </footer>
  );
}
