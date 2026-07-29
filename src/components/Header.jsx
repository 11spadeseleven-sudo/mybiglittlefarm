import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "./Icons";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="My Big Little Farm home">
          <img src="/assets/logo.png" alt="My Big Little Farm" />
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <a
            className="button button-dark header-cta"
            href="https://wa.me/27782785314?text=Hello%20My%20Big%20Little%20Farm.%20I%20would%20like%20to%20enquire%20about%20your%20fresh%20quail%20eggs."
            target="_blank"
            rel="noreferrer"
          >
            Order / Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
