import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import {
  ArrowRightIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
  UserIcon,
  WhatsAppIcon,
} from "../components/Icons";

const phoneNumber = "078 278 5314";
const phoneHref = "tel:+27782785314";
const contactEmail = "sales@mybiglittlefarm.co.za";
const whatsappBase = "https://wa.me/27782785314";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=3%20Bodley%20Road%2C%20Laezonia%2C%20Centurion";

const contactOptions = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    detail: phoneNumber,
    text: "Send a message about product availability, quantities or business supply.",
    action: "Send a WhatsApp Message",
    href: `${whatsappBase}?text=${encodeURIComponent(
      "Hello My Big Little Farm. I would like to enquire about your fresh quail eggs."
    )}`,
    external: true,
  },
  {
    icon: PhoneIcon,
    title: "Phone Call",
    detail: phoneNumber,
    text: "Speak directly with the farm about your fresh quail egg enquiry.",
    action: `Call ${phoneNumber}`,
    href: phoneHref,
  },
  {
    icon: LocationIcon,
    title: "Location",
    detail: "3 Bodley Road, Laezonia, Centurion",
    text: "Contact the farm before visiting so that suitable arrangements can be confirmed.",
    action: "View Location",
    href: mapUrl,
    external: true,
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  enquiryType: "Fresh Quail Eggs",
  quantity: "",
  message: "",
  consent: false,
  website: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const quickWhatsappUrl = useMemo(
    () =>
      `${whatsappBase}?text=${encodeURIComponent(
        "Hello My Big Little Farm. I would like to enquire about your fresh quail eggs.\n\nQuantity required:\nEnquiry type: Household / Bulk / Business"
      )}`,
    []
  );

  function updateField(event) {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (submitState.status !== "idle") {
      setSubmitState({ status: "idle", message: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.consent || submitState.status === "submitting") {
      return;
    }

    setSubmitState({ status: "submitting", message: "Sending your enquiry…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Your enquiry could not be sent.");
      }

      setSubmitState({
        status: "success",
        message:
          "Thank you. Your enquiry has been emailed to My Big Little Farm and we’ll get back to you using the details you provided.",
      });
      setForm(initialForm);
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error.message ||
          "Something went wrong while sending your enquiry. Please try again or contact us on WhatsApp.",
      });
    }
  }

  return (
    <div className="site-shell">
      <SEO
        title="Contact and Quail Egg Enquiries"
        description="Contact My Big Little Farm for fresh quail eggs, bulk quantities, availability and business supply enquiries in Centurion."
        path="/contact"
      />
      <Header />

      <main>
        <section className="contact-hero section-cream">
          <div className="container contact-hero-grid">
            <div className="contact-hero-copy">
              <span className="eyebrow">Contact My Big Little Farm</span>
              <h1>
                Let’s talk about <span>your order.</span>
              </h1>
              <p>
                Contact the farm to enquire about fresh quail eggs, bulk quantities,
                current availability or business supply.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href={quickWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                  WhatsApp {phoneNumber}
                </a>
                <a className="button button-outline button-large" href={phoneHref}>
                  <PhoneIcon />
                  Call the Farm
                </a>
              </div>

              <p className="trust-line">
                Household <span>•</span> Bulk <span>•</span> Business enquiries
              </p>
            </div>

            <div className="contact-hero-visual">
              <div className="contact-hero-glow" aria-hidden="true" />
              <div className="image-card contact-hero-image">
                <img
                  src="/assets/quail-eggs-closeup.jpg"
                  alt="A close-up collection of naturally speckled quail eggs"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-options section-white">
          <div className="container">
            <div className="contact-section-heading contact-section-heading-center">
              <span className="section-label">Get in touch</span>
              <h2>Choose the easiest way to reach us.</h2>
            </div>

            <div className="contact-card-grid">
              {contactOptions.map(
                ({ icon: Icon, title, detail, text, action, href, external }) => (
                  <article className="contact-option-card" key={title}>
                    <span className="contact-option-icon" aria-hidden="true">
                      <Icon size={25} />
                    </span>
                    <h3>{title}</h3>
                    <strong>{detail}</strong>
                    <p>{text}</p>
                    <a
                      className="button button-outline contact-option-button"
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      {action}
                      <ArrowRightIcon size={16} />
                    </a>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section className="contact-form-section section-cream">
          <div className="container contact-form-grid">
            <div className="contact-form-intro">
              <span className="section-label">Send an enquiry</span>
              <h2>Tell us what you need.</h2>
              <p>
                Complete the form and your enquiry will be sent directly to our
                sales inbox at <strong>{contactEmail}</strong>.
              </p>

              <div className="contact-person-card">
                <span className="contact-person-icon" aria-hidden="true">
                  <UserIcon size={29} />
                </span>
                <div>
                  <h3>Ndzalama Ngwenya</h3>
                  <p>Marketing Manager</p>
                  <a href={phoneHref}>{phoneNumber}</a>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              </div>

              <address className="contact-address">
                <LocationIcon size={21} />
                <span>
                  3 Bodley Road<br />
                  Laezonia<br />
                  Centurion
                </span>
              </address>
            </div>

            <div className="contact-form-card">
              {submitState.status !== "idle" && (
                <div
                  className={`contact-form-status contact-form-status-${submitState.status}`}
                  role={submitState.status === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {submitState.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <label className="contact-honeypot" aria-hidden="true">
                  Website
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={updateField}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>

                <div className="contact-fields-grid">
                  <label className="contact-field">
                    <span>Full Name *</span>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={updateField}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="e.g. 078 278 5314"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="Optional"
                      autoComplete="email"
                    />
                  </label>

                  <label className="contact-field">
                    <span>Enquiry Type *</span>
                    <select
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={updateField}
                      required
                    >
                      <option>Fresh Quail Eggs</option>
                      <option>Fertile Eggs</option>
                      <option>Bulk Order</option>
                      <option>Business Supply</option>
                      <option>General Enquiry</option>
                    </select>
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Quantity Required</span>
                    <input
                      type="text"
                      name="quantity"
                      value={form.quantity}
                      onChange={updateField}
                      placeholder="e.g. 5 dozen or 100 eggs"
                    />
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Message *</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={updateField}
                      placeholder="Tell us more about your request..."
                      rows="6"
                      required
                    />
                  </label>
                </div>

                <label className="contact-consent">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={updateField}
                    required
                  />
                  <span>
                    I agree that My Big Little Farm may contact me regarding this
                    enquiry.
                  </span>
                </label>

                <button
                  className="button button-primary contact-submit"
                  type="submit"
                  disabled={submitState.status === "submitting"}
                >
                  <MessageIcon size={19} />
                  {submitState.status === "submitting" ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-whatsapp">
          <div className="container contact-whatsapp-grid">
            <div className="contact-whatsapp-copy">
              <span className="section-label section-label-dark">Quick enquiry</span>
              <h2>Prefer WhatsApp?</h2>
              <p>
                Send a direct message and include the quantity you need and whether
                it is a household, bulk or business enquiry.
              </p>
              <a
                className="button button-primary"
                href={quickWhatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Message {phoneNumber}
              </a>
            </div>

            <div className="contact-message-preview" aria-label="WhatsApp message example">
              <div className="contact-message-header">
                <WhatsAppIcon size={22} />
                <span>Message template</span>
              </div>
              <p>
                Hello My Big Little Farm. I would like to enquire about your fresh
                quail eggs.
              </p>
              <dl>
                <div>
                  <dt>Quantity required:</dt>
                  <dd>Your quantity</dd>
                </div>
                <div>
                  <dt>Enquiry type:</dt>
                  <dd>Household / Bulk / Business</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="contact-order-details section-white">
          <div className="container contact-order-grid">
            <div className="contact-order-copy">
              <span className="section-label">Before you message</span>
              <h2>Have your order details ready.</h2>
              <p>
                To help the farm respond clearly, include the quantity you need,
                the type of enquiry and your preferred contact details.
              </p>

              <ol className="contact-order-list">
                <li>
                  <span>01</span>
                  <div>
                    <strong>Quantity required</strong>
                    <p>Tell us approximately how many eggs or packs you need.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <strong>Type of enquiry</strong>
                    <p>Let us know whether it is household, bulk or business supply.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <strong>Best contact number</strong>
                    <p>Share the number the farm should use to reply to you.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="contact-order-image">
              <img
                src="/assets/quail-eggs-wide.jpg"
                alt="A wide collection of naturally speckled quail eggs"
              />
            </div>
          </div>
        </section>

        <section className="cta-section section-cream">
          <div className="container">
            <div className="cta-card">
              <div className="cta-orb" aria-hidden="true" />
              <div className="cta-content">
                <h2>Ready to send your enquiry?</h2>
                <p>
                  Contact My Big Little Farm for availability, quantities and
                  business supply.
                </p>
                <div className="cta-actions">
                  <a
                    className="button button-primary button-large"
                    href={quickWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon />
                    WhatsApp {phoneNumber}
                  </a>
                  <a className="button button-light button-large" href={phoneHref}>
                    <PhoneIcon />
                    Call the Farm
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
