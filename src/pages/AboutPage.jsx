import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { ArrowRightIcon, LeafIcon, CareIcon, StoreIcon } from "../components/Icons";

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SEO
        title="Our Story"
        description="Discover how My Big Little Farm grew from a backyard dream into a thriving urban farm in Laezonia, Gauteng."
        path="/about"
      />
      <Header />

      <main>
        <section className="about-hero section-video-hero about-video-hero">
          <div className="section-video-layer" aria-hidden="true">
            <video
              className="section-background-video"
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
            <div className="section-video-overlay" />
          </div>

          <div className="container about-video-hero-content section-video-content">
            <span className="eyebrow">About My Big Little Farm</span>
            <h1>From a backyard idea to a <span>thriving urban farm.</span></h1>
            <p>
              We believe homesteading is not about how much land you have—it is about
              what you do with what you have.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" to="/products">
                Our Products
              </Link>
              <Link className="button button-outline button-large" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <section className="about-story section-white">
          <div className="container about-story-grid">
            <div className="about-story-image image-card">
              <img src="/assets/buff-orpington-farm.jpg" alt="Buff Orpington chickens at My Big Little Farm in Laezonia" />
            </div>

            <div className="about-story-copy">
              <span className="section-label">Our Story</span>
              <h2>Built from what we had, grown with purpose.</h2>
              <p>
                Three years ago, My Big Little Farm started with one simple belief:
                homesteading isn't about how much land you have—it's about what you do
                with what you have.
              </p>
              <p>
                What began in a backyard has grown into a thriving urban farm in
                Laezonia, Gauteng.
              </p>
              <p>
                Today we specialise in premium quail production while raising rabbits,
                ducks and heritage chickens, supplying families, chefs, retailers and
                fellow farmers across South Africa.
              </p>
              <p>
                We believe in producing healthy, quality food while inspiring more
                people to embrace sustainable urban farming.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values section-cream">
          <div className="container services-section-heading services-section-heading-center">
            <span className="section-label">What drives us</span>
            <h2>Quality food. Healthy animals. Practical urban farming.</h2>
          </div>
          <div className="container about-value-grid">
            <article className="about-value-card">
              <LeafIcon size={30} />
              <h3>Sustainable Urban Farming</h3>
              <p>Making productive use of available space while growing responsibly.</p>
            </article>
            <article className="about-value-card">
              <CareIcon size={30} />
              <h3>Healthy Animals</h3>
              <p>Care and healthy livestock remain central to the quality we supply.</p>
            </article>
            <article className="about-value-card">
              <StoreIcon size={30} />
              <h3>South African Supply</h3>
              <p>Serving households, chefs, retailers and fellow farmers nationwide.</p>
            </article>
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
