import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import {
  ArrowRightIcon,
  CareIcon,
  CheckIcon,
  LeafIcon,
  MessageIcon,
  PackageIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../components/Icons";

const whatsappUrl =
  "https://wa.me/27782785314?text=Hello%20My%20Big%20Little%20Farm.%20I%20would%20like%20to%20enquire%20about%20your%20fresh%20quail%20eggs.";

const benefits = [
  {
    icon: LeafIcon,
    title: "Freshly supplied",
    text: "Quail eggs prepared with freshness and careful handling in mind.",
  },
  {
    icon: PackageIcon,
    title: "Carefully packaged",
    text: "Products are packaged for safe and convenient order arrangements.",
  },
  {
    icon: CareIcon,
    title: "Friendly local service",
    text: "Customers can enquire directly and receive personal assistance.",
  },
  {
    icon: MessageIcon,
    title: "Flexible enquiries",
    text: "Household, bulk and business supply requests are welcome.",
  },
];

export default function HomePage() {
  return (
    <div className="site-shell">
      <SEO
        title="Fresh Quail Eggs in Centurion"
        description="Fresh quail eggs supplied with care by My Big Little Farm in Laezonia, Centurion. Enquire about household, bulk and business supply."
        path="/"
      />
      <Header />

      <main>
        <section className="hero section-cream">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Fresh from our farm</span>
              <h1>
                Small Eggs.
                <span>Big Farm Freshness.</span>
              </h1>
              <p className="hero-lead">
                Fresh quail eggs supplied with care from My Big Little Farm in
                Laezonia, Centurion.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order / Enquire
                  <ArrowRightIcon />
                </a>
                <a className="button button-outline button-large" href="#product">
                  View Our Services
                </a>
              </div>

              <p className="trust-line">
                Freshly supplied <span>•</span> Carefully packaged <span>•</span>{" "}
                Friendly local service
              </p>
            </div>

            <div className="hero-visual">
              <div className="hero-glow" aria-hidden="true" />
              <div className="image-card hero-image-card">
                <img
                  src="/assets/quail-eggs-closeup.jpg"
                  alt="A close-up collection of naturally speckled quail eggs"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="product-section section-white">
          <div className="container product-grid">
            <div className="image-card product-image-card">
              <img
                src="/assets/quail-eggs-wide.jpg"
                alt="A wide selection of naturally speckled quail eggs"
              />
            </div>

            <div className="product-copy">
              <span className="section-label">Farm fresh selection</span>
              <h2>Fresh quail eggs, carefully packaged.</h2>
              <p>
                Contact us to confirm current availability, quantities and pricing
                for household, bulk or business enquiries.
              </p>

              <ul className="check-list">
                <li>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  Carefully handled
                </li>
                <li>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  Securely packaged
                </li>
                <li>
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  Available by enquiry
                </li>
              </ul>

              <a
                className="button button-dark product-button"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Enquire About Availability
              </a>
              <a className="phone-link" href="tel:+27782785314">
                <PhoneIcon />
                Call 078 278 5314
              </a>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="container benefits-grid">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article className="benefit" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section">
          <div className="story-image">
            <img
              src="/assets/quail-eggs-closeup.jpg"
              alt="A close-up collection of naturally speckled quail eggs"
            />
          </div>
          <div className="story-copy">
            <div className="story-copy-inner">
              <h2>
                Naturally distinctive.
                <br />
                Carefully supplied.
              </h2>
              <p>
                From their recognisable speckled shells to their convenient size,
                quail eggs are a distinctive option for homes, kitchens and food
                businesses.
              </p>
              <a href="/about" className="text-link">
                Discover Our Story
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section section-cream">
          <div className="container">
            <div className="cta-card">
              <div className="cta-orb" aria-hidden="true" />
              <div className="cta-content">
                <h2>Ready to order fresh quail eggs?</h2>
                <p>
                  Contact My Big Little Farm to enquire about availability,
                  quantities and business supply.
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
                  <a className="button button-light button-large" href="/contact">
                    Contact the Farm
                  </a>
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
