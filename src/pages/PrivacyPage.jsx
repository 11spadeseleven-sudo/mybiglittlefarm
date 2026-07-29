import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";

const privacyDescription =
  "Read how My Big Little Farm collects, uses and protects personal information submitted through this website and WhatsApp enquiries.";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="site-shell">
      <SEO
        title="Privacy Notice"
        description={privacyDescription}
        path="/privacy"
      />
      <Header />

      <main>
        <section className="legal-hero section-cream">
          <div className="container legal-hero-inner">
            <span className="eyebrow">Privacy and personal information</span>
            <h1>Privacy Notice</h1>
            <p>
              This notice explains how My Big Little Farm handles personal
              information submitted through this website, WhatsApp, telephone
              calls and other direct enquiries.
            </p>
            <p className="legal-updated">Last updated: 28 July 2026</p>
          </div>
        </section>

        <section className="legal-section section-white">
          <div className="container legal-layout">
            <aside className="legal-summary" aria-label="Privacy notice summary">
              <h2>At a glance</h2>
              <p>
                We collect only the information reasonably needed to respond to
                enquiries, discuss orders and provide customer service.
              </p>
              <Link className="button button-dark" to="/contact">
                Contact the Farm
              </Link>
            </aside>

            <article className="legal-content">
              <section>
                <h2>1. Who is responsible for your information?</h2>
                <p>
                  My Big Little Farm is responsible for deciding why and how
                  personal information submitted through this website is used.
                </p>
                <p>
                  Contact person: Ndzalama Ngwenya, Marketing Manager<br />
                  Telephone and WhatsApp: 078 278 5314<br />
                  Address: 3 Bodley Road, Laezonia, Centurion
                </p>
              </section>

              <section>
                <h2>2. Information we may collect</h2>
                <p>Depending on how you contact us, we may collect:</p>
                <ul>
                  <li>Your full name.</li>
                  <li>Your telephone number.</li>
                  <li>Your email address, when you choose to provide it.</li>
                  <li>The type of enquiry and quantity required.</li>
                  <li>Your message and any other order-related information.</li>
                  <li>
                    Basic technical information recorded by the website hosting
                    provider, such as an IP address, browser type and access time.
                  </li>
                </ul>
              </section>

              <section>
                <h2>3. Why we use personal information</h2>
                <p>We use personal information to:</p>
                <ul>
                  <li>Respond to product, availability and pricing enquiries.</li>
                  <li>Discuss household, bulk and business supply requests.</li>
                  <li>Contact you about the enquiry or order you initiated.</li>
                  <li>Arrange collection or delivery where this is agreed.</li>
                  <li>Maintain reasonable business and enquiry records.</li>
                  <li>Protect the website and prevent misuse or fraud.</li>
                </ul>
                <p>
                  We do not use enquiry details for unrelated direct marketing
                  without an appropriate legal basis or your consent.
                </p>
              </section>

              <section>
                <h2>4. WhatsApp and third-party services</h2>
                <p>
                  The current enquiry form can prepare a WhatsApp message. When
                  you continue to WhatsApp, your information is processed through
                  WhatsApp under its own privacy terms. Telephone providers,
                  website hosting providers and other necessary service providers
                  may also process limited information to deliver their services.
                </p>
                <p>
                  We do not sell personal information to advertisers or data
                  brokers.
                </p>
              </section>

              <section>
                <h2>5. How long we keep information</h2>
                <p>
                  We keep enquiry and order information only for as long as it is
                  reasonably required to respond, complete agreed arrangements,
                  meet legitimate record-keeping needs or comply with applicable
                  law. Information that is no longer required should be securely
                  deleted or anonymised where reasonably possible.
                </p>
              </section>

              <section>
                <h2>6. How we protect information</h2>
                <p>
                  We take reasonable organisational and technical steps to protect
                  personal information against loss, unauthorised access, misuse,
                  alteration or disclosure. No online service can guarantee
                  absolute security, so customers should avoid sending unnecessary
                  sensitive information through the enquiry form or WhatsApp.
                </p>
              </section>

              <section>
                <h2>7. Your choices and rights</h2>
                <p>
                  Subject to applicable law, you may ask us to confirm whether we
                  hold your personal information and request access, correction or
                  deletion. You may also object to certain processing or withdraw
                  consent where processing depends on consent.
                </p>
                <p>
                  Send a request to Ndzalama Ngwenya using 078 278 5314 or the
                  physical address listed above. We may need to verify your
                  identity before acting on a request.
                </p>
              </section>

              <section>
                <h2>8. Cookies and analytics</h2>
                <p>
                  The current website does not intentionally use advertising or
                  behavioural analytics cookies. The hosting provider may use
                  essential technical storage or server logs to operate and secure
                  the website. This notice will be updated before optional
                  analytics, advertising or similar tracking tools are introduced.
                </p>
              </section>

              <section>
                <h2>9. Complaints</h2>
                <p>
                  Please contact My Big Little Farm first so that we can try to
                  resolve a privacy concern. You may also lodge a complaint with
                  South Africa’s Information Regulator through its official
                  website.
                </p>
                <a
                  className="text-link"
                  href="https://inforegulator.org.za/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Information Regulator website
                </a>
              </section>

              <section>
                <h2>10. Updates to this notice</h2>
                <p>
                  We may update this notice when the website, enquiry process or
                  legal requirements change. The latest version will be displayed
                  on this page with its revision date.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
