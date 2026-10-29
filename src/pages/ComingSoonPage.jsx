import SEO from "../components/SEO";
import "./ComingSoonPage.css";

const WHATSAPP_URL =
  "https://wa.me/27716562369?text=Hello%20My%20Big%20Little%20Farm%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

export default function ComingSoonPage() {
  return (
    <main className="coming-soon-page">
      <SEO
        title="Coming Soon | My Big Little Farm"
        description="My Big Little Farm is currently updating its website. Contact us for fresh quail egg, fertile egg, bulk and business enquiries."
        path="/"
        noindex
      />

      <div className="coming-soon-glow coming-soon-glow-left" aria-hidden="true" />
      <div className="coming-soon-glow coming-soon-glow-right" aria-hidden="true" />

      <section className="coming-soon-card" aria-labelledby="coming-soon-title">
        <img
          className="coming-soon-logo"
          src="/assets/logo.png"
          alt="My Big Little Farm"
        />

        <span className="coming-soon-kicker">WE'RE MAKING A FEW UPDATES</span>

        <h1 id="coming-soon-title">Something fresh is coming soon.</h1>

        <p className="coming-soon-copy">
          Our website is currently being updated. We’ll be back soon with the
          latest from My Big Little Farm.
        </p>

        <p className="coming-soon-copy coming-soon-copy-small">
          In the meantime, you can still contact us for product availability,
          orders and general enquiries.
        </p>

        <div className="coming-soon-actions">
          <a
            className="coming-soon-button coming-soon-button-primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp 071 656 2369
          </a>

          <a
            className="coming-soon-button coming-soon-button-secondary"
            href="mailto:sales@mybiglittlefarm.co.za"
          >
            sales@mybiglittlefarm.co.za
          </a>
        </div>

        <div className="coming-soon-contact">
          <a href="tel:+27716562369">071 656 2369</a>
          <span aria-hidden="true">•</span>
          <span>3 Bodley Road, Laezonia, Centurion</span>
        </div>
      </section>

      <p className="coming-soon-footer">
        © 2026 My Big Little Farm. All rights reserved.
      </p>
    </main>
  );
}
