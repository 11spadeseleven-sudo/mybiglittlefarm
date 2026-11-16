import { NavLink } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo-white.png" alt="My Big Little Farm" />
          <h3>My Big Little Farm</h3>
          <p className="footer-tagline">Premium Urban Farm | Quail Specialists</p>
          <p>
            From fresh quail table eggs, fertile eggs and premium meat to rabbits,
            ducks and heritage poultry, MBLF proudly supplies homes, chefs and
            businesses across South Africa from our farm in Laezonia, Gauteng.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/privacy">Privacy Notice</NavLink>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <a href="tel:+27716562369">071 656 2369</a>
          <a href="mailto:info@mybiglittlefarm.co.za">info@mybiglittlefarm.co.za</a>
          <address>
            3 Bodley Road<br />
            Laezonia, Gauteng<br />
            South Africa
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
