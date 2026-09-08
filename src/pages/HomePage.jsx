import { useEffect, useState } from "react";
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

const quailWhatsappBase = "https://wa.me/27782785314";
const fertileWhatsappBase = "https://wa.me/27716562369";

const quailWhatsappUrl = `${quailWhatsappBase}?text=${encodeURIComponent(
  "Hello My Big Little Farm. I would like to enquire about your fresh quail eggs."
)}`;

const fertileWhatsappUrl = `${fertileWhatsappBase}?text=${encodeURIComponent(
  "Hello My Big Little Farm. I would like to enquire about the fertile eggs at R50 per egg. Please let me know about Buff Orpington and Light Columbian Brahma availability."
)}`;

const heroSlides = [
  {
    id: "fertile",
    eyebrow: "Fertile eggs now available",
    title: "Grow Your Flock.",
    highlight: "Fertile Eggs from R50.",
    lead: "Buff Orpington and Light Columbian Brahma fertile eggs are now available from My Big Little Farm.",
    primaryLabel: "Order Fertile Eggs",
    primaryHref: fertileWhatsappUrl,
    secondaryLabel: "Contact the Farm",
    secondaryHref: "/contact",
    trustItems: ["R50 an egg", "Buff Orpington", "Light Columbian Brahma"],
    image: "/assets/fertile-eggs-promo.png",
    imageAlt: "My Big Little Farm fertile egg promotion for Buff Orpington and Light Columbian Brahma eggs",
    imageClass: "hero-promo-image",
  },
  {
    id: "quail",
    eyebrow: "Fresh from our farm",
    title: "Small Eggs.",
    highlight: "Big Farm Freshness.",
    lead: "Fresh quail eggs supplied with care from My Big Little Farm in Laezonia, Centurion.",
    primaryLabel: "Order / Enquire",
    primaryHref: quailWhatsappUrl,
    secondaryLabel: "View Our Services",
    secondaryHref: "#product",
    trustItems: ["Freshly supplied", "Carefully packaged", "Friendly local service"],
    image: "/assets/quail-eggs-closeup.jpg",
    imageAlt: "A close-up collection of naturally speckled quail eggs",
    imageClass: "",
  },
];

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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 8500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  function goToSlide(index) {
    setActiveSlide(index);
  }

  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  }

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }

  return (
    <div className="site-shell">
      <SEO
        title="Fresh Quail Eggs in Centurion"
        description="Fresh quail eggs and fertile chicken eggs supplied by My Big Little Farm in Laezonia, Centurion. Enquire about household, bulk and business supply."
        path="/"
      />
      <Header />

      <main>
        <section className="hero hero-slider section-cream">
          <div className="hero-video-layer" aria-hidden="true">
            <video
              className="hero-background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/quail-eggs-wide.jpg"
            >
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Chickens_scratching.webm"
                type="video/webm"
              />
            </video>
            <div className="hero-video-wash" />
          </div>

          <div className="container hero-grid hero-slide" key={slide.id}>
            <div className="hero-copy">
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1>
                {slide.title}
                <span>{slide.highlight}</span>
              </h1>
              <p className="hero-lead">{slide.lead}</p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href={slide.primaryHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {slide.primaryLabel}
                  <ArrowRightIcon />
                </a>
                <a
                  className="button button-outline button-large"
                  href={slide.secondaryHref}
                >
                  {slide.secondaryLabel}
                </a>
              </div>

              <p className="trust-line">
                {slide.trustItems.map((item, index) => (
                  <span className="trust-item" key={item}>
                    {index > 0 && <b aria-hidden="true">•</b>}
                    {item}
                  </span>
                ))}
              </p>
            </div>

            <div className="hero-visual">
              <div className="hero-glow" aria-hidden="true" />
              <div className="image-card hero-image-card">
                <img
                  className={slide.imageClass}
                  src={slide.image}
                  alt={slide.imageAlt}
                />
              </div>
            </div>
          </div>

          <div className="container hero-slider-controls" aria-label="Hero promotions">
            <button
              className="hero-slider-arrow"
              type="button"
              onClick={previousSlide}
              aria-label="Previous promotion"
            >
              ‹
            </button>
            <div className="hero-slider-dots">
              {heroSlides.map((item, index) => (
                <button
                  key={item.id}
                  className={`hero-slider-dot ${index === activeSlide ? "active" : ""}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show promotion ${index + 1}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                />
              ))}
            </div>
            <button
              className="hero-slider-arrow"
              type="button"
              onClick={nextSlide}
              aria-label="Next promotion"
            >
              ›
            </button>
          </div>

          <a
            className="hero-video-credit"
            href="https://commons.wikimedia.org/wiki/File:Chickens_scratching.webm"
            target="_blank"
            rel="noreferrer"
          >
            Background video: Remarksman / CC BY 2.0
          </a>
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
                href={quailWhatsappUrl}
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
                    href={quailWhatsappUrl}
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
