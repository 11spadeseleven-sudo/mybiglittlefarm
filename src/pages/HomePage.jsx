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

const highlights = [
  { icon: EggIcon, title: "Premium Quail", text: "Fresh eggs, fertile eggs, meat, chicks and breeding stock." },
  { icon: CareIcon, title: "Healthy Livestock", text: "Rabbits, ducks and heritage poultry raised with care." },
  { icon: StoreIcon, title: "Wholesale Available", text: "Supply options for homes, chefs, retailers and businesses." },
  { icon: LeafIcon, title: "Urban Farming", text: "Quality farm produce from our Laezonia, Gauteng farm." },
];

export default function HomePage() {
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
              poster="/assets/quail-eggs-wide.jpg"
            >
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Chickens_scratching.webm"
                type="video/webm"
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
              <div className="image-card new-home-hero-image">
                <img src="/assets/quail-eggs-closeup.jpg" alt="Premium quail eggs from My Big Little Farm" />
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
