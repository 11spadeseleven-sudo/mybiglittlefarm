import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import {
  CheckIcon,
  MessageIcon,
  PackageIcon,
  PhoneIcon,
  UserIcon,
  WhatsAppIcon,
} from "../components/Icons";

const whatsappUrl =
  "https://wa.me/27782785314?text=Hello%20My%20Big%20Little%20Farm.%20I%20would%20like%20to%20enquire%20about%20your%20fresh%20quail%20eggs.";

const approachItems = [
  {
    icon: MessageIcon,
    title: "Direct communication",
    text: "Customers can speak directly with the farm about their enquiry.",
  },
  {
    icon: PackageIcon,
    title: "Flexible quantities",
    text: "Household, bulk and business supply requests are welcome.",
  },
  {
    icon: CheckIcon,
    title: "Clear arrangements",
    text: "Availability, pricing and order arrangements are confirmed directly.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="site-shell">
      <SEO
        title="About Our Quail Farm"
        description="Learn about My Big Little Farm, a local Centurion business focused on fresh quail eggs, personal service and direct customer enquiries."
        path="/about"
      />
      <Header />

      <main>
        <section className="about-hero section-cream">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <span className="eyebrow">About My Big Little Farm</span>
              <h1>
                A little farm with a <span>big passion.</span>
              </h1>
              <p>
                My Big Little Farm is a local business focused on supplying fresh
                quail eggs with care, personal service and attention to every
                customer enquiry.
              </p>

              <div className="hero-actions">
                <Link className="button button-primary button-large" to="/contact">
                  Contact the Farm
                </Link>
                <Link className="button button-outline button-large" to="/services">
                  View Our Services
                </Link>
              </div>
            </div>

            <div className="about-logo-visual" aria-label="My Big Little Farm brand">
              <div className="about-logo-glow" aria-hidden="true" />
              <div className="about-logo-card">
                <img src="/assets/logo.png" alt="My Big Little Farm" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-story section-white">
          <div className="container about-story-grid">
            <div className="about-story-image image-card">
              <img
                src="/assets/quail-eggs-wide.jpg"
                alt="A wide collection of naturally speckled quail eggs"
              />
            </div>

            <div className="about-story-copy">
              <span className="section-label">Our story</span>
              <h2>Built around a love for quail.</h2>
              <p>
                My Big Little Farm was created around a simple focus: supplying
                fresh quail eggs and providing dependable service to households,
                businesses and customers who value personal attention.
              </p>
              <p>
                As a specialised local business, the farm aims to make ordering
                straightforward and approachable. Customers can contact the team
                directly to discuss availability, quantities and suitable order
                arrangements.
              </p>
              <p className="about-highlight">Small in name. Big on care.</p>
            </div>
          </div>
        </section>

        <section className="about-character section-cream">
          <div className="container about-character-grid">
            <div className="about-character-copy">
              <span className="section-label">Naturally distinctive</span>
              <h2>Small eggs with a recognisable character.</h2>
              <p>
                Quail eggs are known for their compact size and naturally speckled
                shells. Their distinctive appearance makes them suitable for homes,
                kitchens, catering and food businesses looking for something
                different.
              </p>

              <ul className="check-list about-check-list">
                <li>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  Recognisable speckled shells
                </li>
                <li>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  Convenient compact size
                </li>
                <li>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  Suitable for different food enquiries
                </li>
              </ul>
            </div>

            <div className="about-character-image image-card">
              <img
                src="/assets/quail-eggs-closeup.jpg"
                alt="Close-up view of naturally speckled quail eggs"
              />
            </div>
          </div>
        </section>

        <section className="about-approach">
          <div className="container">
            <div className="about-approach-heading">
              <span className="section-label section-label-dark">Our approach</span>
              <h2>Personal service from enquiry to order.</h2>
            </div>

            <div className="about-approach-grid">
              {approachItems.map(({ icon: Icon, title, text }) => (
                <article className="about-approach-item" key={title}>
                  <span className="about-approach-icon">
                    <Icon size={30} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-contact section-white">
          <div className="container about-contact-inner">
            <span className="section-label">Here to help</span>
            <h2>Meet your farm contact.</h2>

            <article className="about-contact-card">
              <div className="about-contact-icon" aria-hidden="true">
                <UserIcon size={34} />
              </div>

              <div className="about-contact-details">
                <h3>Ndzalama Ngwenya</h3>
                <p className="about-contact-role">Marketing Manager</p>
                <a href="tel:+27782785314">078 278 5314</a>
                <a href="mailto:sales@mybiglittlefarm.co.za">sales@mybiglittlefarm.co.za</a>
                <p>
                  Contact Ndzalama for product availability, household orders,
                  bulk enquiries and business supply requests.
                </p>
              </div>

              <div className="about-contact-actions">
                <a className="button button-dark" href="tel:+27782785314">
                  <PhoneIcon />
                  Call Ndzalama
                </a>
                <a
                  className="button button-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                  WhatsApp Enquiry
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="about-brand-section">
          <div className="about-brand-image">
            <img
              src="/assets/quail-eggs-wide.jpg"
              alt="Naturally patterned quail eggs"
            />
          </div>

          <div className="about-brand-copy">
            <div className="about-brand-copy-inner">
              <span className="section-label">Our little farm</span>
              <h2>
                From our little farm
                <br />
                to your enquiry.
              </h2>
              <p>
                My Big Little Farm combines a specialised product focus with warm,
                direct and dependable customer service.
              </p>
              <Link className="text-link" to="/services">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-section section-cream">
          <div className="container">
            <div className="cta-card">
              <div className="cta-orb" aria-hidden="true" />
              <div className="cta-content">
                <h2>Would you like to know more about our quail eggs?</h2>
                <p>
                  Contact My Big Little Farm to discuss availability, quantities
                  and business supply.
                </p>
                <div className="cta-actions">
                  <a
                    className="button button-primary button-large"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon />
                    WhatsApp 078 278 5314
                  </a>
                  <Link className="button button-light button-large" to="/contact">
                    Contact the Farm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
