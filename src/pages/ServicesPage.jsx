import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import {
  ArrowRightIcon,
  CareIcon,
  CheckIcon,
  EggIcon,
  HomeIcon,
  MessageIcon,
  PackageIcon,
  PhoneIcon,
  RestaurantIcon,
  StoreIcon,
  WhatsAppIcon,
} from "../components/Icons";

const whatsappUrl =
  "https://wa.me/27782785314?text=Hello%20My%20Big%20Little%20Farm.%20I%20would%20like%20to%20enquire%20about%20your%20fresh%20quail%20eggs.";

const services = [
  {
    icon: EggIcon,
    title: "Fresh Quail Eggs",
    text: "Fresh quail eggs carefully handled and packaged for household customers and general enquiries.",
    action: "Enquire About Fresh Eggs",
  },
  {
    icon: PackageIcon,
    title: "Bulk Orders",
    text: "Larger quantity enquiries for customers who require more than a standard household order.",
    action: "Discuss a Bulk Order",
  },
  {
    icon: StoreIcon,
    title: "Business Supply",
    text: "Quail egg supply enquiries for restaurants, caterers, retailers and other food businesses.",
    action: "Make a Business Enquiry",
  },
];

const audiences = [
  {
    icon: HomeIcon,
    title: "Households",
    text: "Customers looking for fresh quail eggs for personal or household use.",
  },
  {
    icon: RestaurantIcon,
    title: "Caterers",
    text: "Catering enquiries that may require larger or planned quantities.",
  },
  {
    icon: RestaurantIcon,
    title: "Restaurants",
    text: "Food businesses interested in discussing quail egg availability and supply.",
  },
  {
    icon: StoreIcon,
    title: "Retail and food businesses",
    text: "Businesses looking to enquire about quantities and suitable supply arrangements.",
  },
];

const arrangements = [
  {
    icon: EggIcon,
    title: "Availability",
    text: "Contact the farm to confirm whether the required quantity is currently available.",
  },
  {
    icon: MessageIcon,
    title: "Pricing",
    text: "Pricing is confirmed according to the quantity and nature of the enquiry.",
  },
  {
    icon: CareIcon,
    title: "Order arrangements",
    text: "Suitable collection or delivery arrangements are discussed directly with the farm.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="site-shell">
      <SEO
        title="Quail Egg Services"
        description="Explore fresh quail egg enquiries, bulk orders and business supply from My Big Little Farm in Laezonia, Centurion."
        path="/services"
      />
      <Header />

      <main>
        <section className="services-hero section-cream">
          <div className="container services-hero-grid">
            <div className="services-hero-copy">
              <span className="eyebrow">Our services</span>
              <h1>
                Fresh quail eggs for <span>every kind of enquiry.</span>
              </h1>
              <p>
                My Big Little Farm assists household customers, bulk buyers and
                food businesses with fresh quail egg enquiries.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-dark button-large"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Start an Enquiry
                  <ArrowRightIcon />
                </a>
                <Link className="button button-outline button-large" to="/contact">
                  Contact the Farm
                </Link>
              </div>

              <p className="trust-line">
                Household orders <span>•</span> Bulk enquiries <span>•</span>{" "}
                Business supply
              </p>
            </div>

            <div className="services-hero-visual">
              <div className="services-hero-glow" aria-hidden="true" />
              <div className="image-card services-hero-image">
                <img
                  src="/assets/quail-eggs-closeup.jpg"
                  alt="A close-up collection of naturally speckled quail eggs"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-overview section-white">
          <div className="container">
            <div className="services-section-heading services-section-heading-center">
              <span className="section-label">What we offer</span>
              <h2>Simple services built around your needs.</h2>
              <p>
                Choose the type of enquiry that best matches what you need and
                contact the farm directly for current availability and pricing.
              </p>
            </div>

            <div className="services-card-grid">
              {services.map(({ icon: Icon, title, text, action }) => (
                <article className="service-card" key={title}>
                  <span className="service-card-icon" aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    className="service-card-link"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {action}
                    <ArrowRightIcon size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-audience section-cream">
          <div className="container">
            <div className="services-section-heading services-section-heading-center">
              <span className="section-label">Who we assist</span>
              <h2>Quail egg enquiries for homes and businesses.</h2>
            </div>

            <div className="audience-grid">
              {audiences.map(({ icon: Icon, title, text }) => (
                <article className="audience-card" key={title}>
                  <span className="audience-icon" aria-hidden="true">
                    <Icon size={23} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-custom section-white">
          <div className="container services-custom-card">
            <div className="services-custom-copy">
              <span className="section-label">Custom enquiries</span>
              <h2>
                Need something specific?
                <br />
                Tell us what you need.
              </h2>
              <p>
                Every enquiry may be different. Contact the farm with the quantity
                you require and whether it is a household, bulk or business enquiry.
              </p>

              <dl className="enquiry-summary">
                <div>
                  <dt>Quantity required</dt>
                  <dd>Tell us the number of eggs or packs</dd>
                </div>
                <div>
                  <dt>Type of enquiry</dt>
                  <dd>Household, bulk or business</dd>
                </div>
                <div>
                  <dt>Preferred arrangement</dt>
                  <dd>Discuss directly with the farm</dd>
                </div>
              </dl>

              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Send a WhatsApp Enquiry
              </a>
            </div>

            <div className="services-custom-image">
              <img
                src="/assets/quail-eggs-wide.jpg"
                alt="A wide selection of naturally speckled quail eggs"
              />
            </div>
          </div>
        </section>

        <section className="services-arrangements">
          <div className="container">
            <div className="services-arrangements-heading">
              <span className="section-label section-label-dark">Before ordering</span>
              <h2>Availability and arrangements are confirmed directly.</h2>
            </div>

            <div className="services-arrangements-grid">
              {arrangements.map(({ icon: Icon, title, text }) => (
                <article className="services-arrangement" key={title}>
                  <span className="services-arrangement-icon" aria-hidden="true">
                    <Icon size={29} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-business section-white">
          <div className="container services-business-inner">
            <span className="section-label">For food businesses</span>
            <h2>Looking for a regular quail egg supply?</h2>
            <p>
              Restaurants, caterers, retailers and other food businesses can
              contact My Big Little Farm to discuss quantities, availability and
              possible supply arrangements.
            </p>

            <div className="services-business-points" aria-label="Business enquiry details">
              <span><CheckIcon /> Expected quantity</span>
              <span><CheckIcon /> Order frequency</span>
              <span><CheckIcon /> Preferred contact details</span>
            </div>

            <div className="services-business-actions">
              <a
                className="button button-dark button-large"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Discuss Business Supply
              </a>
              <a className="phone-link services-business-phone" href="tel:+27782785314">
                <PhoneIcon /> Speak to Ndzalama Ngwenya
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section section-cream">
          <div className="container">
            <div className="cta-card">
              <div className="cta-orb" aria-hidden="true" />
              <div className="cta-content">
                <h2>Ready to discuss your quail egg order?</h2>
                <p>
                  Contact My Big Little Farm for household, bulk and business
                  supply enquiries.
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
