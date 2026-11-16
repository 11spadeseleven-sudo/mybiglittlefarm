import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import { ArrowRightIcon, EggIcon, LeafIcon, StoreIcon, CareIcon } from "../components/Icons";

const stats = [
  { value: "3 Years", label: "Growing South Africa's urban farming story." },
  { value: "300kg", label: "Weekly quail meat supply." },
  { value: "2500+", label: "Quail hatched in a single hatch." },
  { value: "National Supply", label: "Serving customers across South Africa." },
];


const heroImages = [
  { src: "/assets/home-hero-chick.jpg", alt: "Day-old chick raised at My Big Little Farm" },
  { src: "/assets/farm-poultry-flock.jpg", alt: "Heritage poultry roaming at My Big Little Farm" },
  { src: "/assets/buff-orpington-farm.jpg", alt: "Buff Orpington chickens at My Big Little Farm" },
  { src: "/assets/muscovy-breeding-flock.jpg", alt: "Muscovy duck breeding flock at My Big Little Farm" },
  { src: "/assets/light-columbian-brahma.jpg", alt: "Light Columbian Brahma chickens at My Big Little Farm" },
];

const highlights = [
  { icon: EggIcon, title: "Premium Quail", text: "Fresh eggs, fertile eggs, meat, chicks and breeding stock." },
  { icon: CareIcon, title: "Healthy Livestock", text: "Rabbits, ducks and heritage poultry raised with care." },
  { icon: StoreIcon, title: "Wholesale Available", text: "Supply options for homes, chefs, retailers and businesses." },
  { icon: LeafIcon, title: "Urban Farming", text: "Quality farm produce from our Laezonia, Gauteng farm." },
];

export default function HomePage() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const touchStartX = useRef(null);

  const showPreviousHeroImage = () => {
    setHeroImageIndex((current) => (current - 1 + heroImages.length) % heroImages.length);
  };

  const showNextHeroImage = () => {
    setHeroImageIndex((current) => (current + 1) % heroImages.length);
  };

  useEffect(() => {
    const timer = window.setInterval(showNextHeroImage, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPreviousHeroImage();
    else showNextHeroImage();
  };

  return (
    <div className="site-shell">
      <SEO
        title="Premium Urban Farm in Laezonia"
        description="My Big Little Farm supplies premium quail, rabbits, ducks and heritage poultry from Laezonia, Gauteng, serving customers across South Africa."
        path="/"
      />
      <Header />

      <main>
        <section className="new-home-hero">
          <div className="hero-video-layer" aria-hidden="true">
            <video
              className="hero-background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/home-hero-chick.jpg"
            >
              <source
                src="/assets/chicks.mp4"
                type="video/mp4"
              />
            </video>
            <div className="hero-video-wash" />
          </div>

          <div className="container new-home-hero-grid">
            <div className="new-home-hero-copy">
              <span className="eyebrow">Premium urban farm • Laezonia, Gauteng</span>
              <h1>From Backyard Dream to <span>Urban Farm</span></h1>
              <p className="new-home-hero-lead">
                Premium quail, rabbits, ducks and heritage poultry, proudly raised in
                Laezonia, Gauteng.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href="https://wa.me/27716562369?text=Hello%20My%20Big%20Little%20Farm.%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noreferrer"
                >
                  Order Now <ArrowRightIcon />
                </a>
                <Link className="button button-outline button-large" to="/products">
                  Our Products
                </Link>
              </div>
            </div>

            <div className="new-home-hero-visual">
              <div
                className="image-card new-home-hero-image new-home-image-slider"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`new-home-image-slide ${index === heroImageIndex ? "active" : ""}`}
                    aria-hidden={index !== heroImageIndex}
                  />
                ))}

                <button
                  className="new-home-slider-arrow new-home-slider-arrow-left"
                  type="button"
                  onClick={showPreviousHeroImage}
                  aria-label="Previous farm image"
                >
                  ‹
                </button>
                <button
                  className="new-home-slider-arrow new-home-slider-arrow-right"
                  type="button"
                  onClick={showNextHeroImage}
                  aria-label="Next farm image"
                >
                  ›
                </button>

                <div className="new-home-slider-dots" aria-label="Farm image slider">
                  {heroImages.map((image, index) => (
                    <button
                      key={image.src}
                      className={`new-home-slider-dot ${index === heroImageIndex ? "active" : ""}`}
                      type="button"
                      onClick={() => setHeroImageIndex(index)}
                      aria-label={`Show farm image ${index + 1}`}
                      aria-current={index === heroImageIndex ? "true" : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-farm-intro section-white">
          <div className="container home-farm-intro-grid">
            <div className="home-farm-intro-heading">
              <span className="section-label">From our farm</span>
              <h2>Quality produce, raised with care.</h2>
            </div>
            <div className="home-farm-intro-copy">
              <p>
                From fresh quail table eggs, fertile eggs and premium meat to live birds
                and breeding stock, My Big Little Farm supplies families, homesteaders,
                chefs and retailers with quality farm produce grown with care.
              </p>
            </div>
          </div>
        </section>

        <section className="farm-stats section-white" aria-label="Farm statistics">
          <div className="container farm-stats-grid">
            {stats.map((stat) => (
              <article className="farm-stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-intro section-cream">
          <div className="container home-intro-grid">
            <div>
              <span className="section-label">What we raise</span>
              <h2>Farm produce with quality at the centre.</h2>
            </div>
            <p>
              Quail remains our specialist focus, supported by rabbits, ducks and
              heritage chickens for customers looking for table produce, fertile eggs,
              live birds and breeding stock.
            </p>
          </div>

          <div className="container home-highlight-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="home-highlight-card" key={title}>
                <span className="home-highlight-icon"><Icon size={28} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="container home-products-cta">
            <Link className="button button-dark button-large" to="/products">
              Explore Our Farm Products <ArrowRightIcon />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
