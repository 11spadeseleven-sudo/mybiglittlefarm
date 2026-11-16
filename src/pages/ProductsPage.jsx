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
  StoreIcon,
} from "../components/Icons";

const whatsappBase = "https://wa.me/27716562369";

const products = [
  {
    title: "Premium Quail",
    badge: "Hero Product",
    description: "Our specialist range for homes, kitchens, farmers and commercial buyers.",
    images: [
      {
        src: "https://images.pexels.com/photos/4530408/pexels-photo-4530408.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Quails in a breeding enclosure on a poultry farm",
        label: "Premium quail",
      },
    ],
    items: [
      "Fresh quail eggs",
      "Premium quail meat",
      "Day-old chicks",
      "1–6 week growers",
      "Point-of-lay birds",
      "Breeding pairs",
      "Fertile eggs",
    ],
  },
  {
    title: "Rabbits",
    description: "Healthy rabbits available for meat production and breeding programmes.",
    images: [
      {
        src: "https://images.pexels.com/photos/34074239/pexels-photo-34074239.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Three brown rabbits grazing on fresh grass outdoors",
        label: "Healthy breeding rabbits",
      },
    ],
    items: ["Healthy breeding rabbits", "Rabbit meat", "Young kits", "Breeding stock"],
  },
  {
    title: "Heritage Chickens",
    description: "Heritage poultry including Buff Orpington and Light Columbian Brahma.",
    images: [
      {
        src: "/assets/light-columbian-brahma.jpg",
        alt: "Light Columbian Brahma chickens at My Big Little Farm",
        label: "Light Columbian Brahma",
      },
      {
        src: "/assets/heritage-day-old-chicks.jpg",
        alt: "Day-old heritage chicks at My Big Little Farm",
        label: "Day-old chicks",
      },
    ],
    items: [
      "Buff Orpington",
      "Light Columbian Brahma",
      "Fertile eggs",
      "Day-old chicks",
      "Pullets",
      "Point-of-lay hens",
      "Roosters",
      "Table eggs",
    ],
  },
  {
    title: "Ducks",
    description: "Muscovy ducks for customers looking for birds, eggs, meat or breeding stock.",
    images: [
      {
        src: "/assets/muscovy-ducks-ducklings.jpg",
        alt: "Muscovy ducks with ducklings at My Big Little Farm",
        label: "Muscovy ducks & ducklings",
      },
      {
        src: "/assets/muscovy-breeding-flock.jpg",
        alt: "Muscovy breeding flock at My Big Little Farm",
        label: "Muscovy breeding stock",
      },
    ],
    items: ["Muscovy ducks", "Ducklings", "Fertile eggs", "Duck meat", "Breeding pairs"],
  },
];

const reasons = [
  { icon: PackageIcon, title: "Premium Quality" },
  { icon: LeafIcon, title: "Urban Farm" },
  { icon: CareIcon, title: "Healthy Animals" },
  { icon: StoreIcon, title: "National Supply" },
  { icon: MessageIcon, title: "Personal Service" },
  { icon: CheckIcon, title: "Wholesale Available" },
];

function orderUrl(product) {
  return `${whatsappBase}?text=${encodeURIComponent(
    `Hello My Big Little Farm. I would like to enquire about ${product}. Please share current availability and pricing.`
  )}`;
}

export default function ProductsPage() {
  return (
    <div className="site-shell">
      <SEO
        title="Our Farm Products"
        description="Explore premium quail, rabbits, heritage chickens and Muscovy ducks available from My Big Little Farm in Laezonia, Gauteng."
        path="/products"
      />
      <Header />

      <main>
        <section className="products-hero section-video-hero products-video-hero">
          <div className="section-video-layer" aria-hidden="true">
            <video
              className="section-background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/assets/farm.mp4"
                type="video/webm"
              />
            </video>
            <div className="section-video-overlay" />
          </div>

          <div className="container products-hero-inner section-video-content">
            <span className="eyebrow">Our Farm Products</span>
            <h1>Quality farm produce, <span>raised with care.</span></h1>
            <p>
              From our specialist quail range to rabbits, heritage poultry and ducks,
              contact the farm for current availability, pricing and supply arrangements.
            </p>
          </div>
        </section>

        <section className="products-section section-white">
          <div className="container products-grid">
            {products.map(({ title, badge, description, images, items }) => (
              <article className={`farm-product-card ${badge ? "farm-product-card-featured" : ""}`} key={title}>
                <div className="farm-product-card-heading">
                  <h2>{title}</h2>
                  {badge && <span className="farm-product-badge">★ {badge}</span>}
                </div>
                {images && (
                  <div
                    className="farm-product-photo-grid"
                    style={images.length === 1 ? { gridTemplateColumns: "1fr" } : undefined}
                  >
                    {images.map((image) => (
                      <figure className="farm-product-photo" key={image.src}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                        <figcaption>{image.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                <p>{description}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}><CheckIcon size={17} /> {item}</li>
                  ))}
                </ul>
                <a
                  className="button button-primary farm-product-button"
                  href={orderUrl(title)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order / Enquire <ArrowRightIcon size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="why-us section-cream">
          <div className="container services-section-heading services-section-heading-center">
            <span className="section-label">Why choose us</span>
            <h2>A farm built around quality and personal service.</h2>
          </div>
          <div className="container why-us-grid">
            {reasons.map(({ icon: Icon, title }) => (
              <article className="why-us-card" key={title}>
                <span className="why-us-icon"><Icon size={27} /></span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
