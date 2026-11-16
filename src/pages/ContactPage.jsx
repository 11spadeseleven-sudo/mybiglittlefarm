import { useMemo, useState } from "react";
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

const phoneNumber = "071 656 2369";
const phoneHref = "tel:+27716562369";
const contactEmail = "info@mybiglittlefarm.co.za";
const whatsappBase = "https://wa.me/27716562369";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=3%20Bodley%20Road%2C%20Laezonia%2C%20Gauteng";

const contactOptions = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    detail: phoneNumber,
    text: "The quickest way to ask about products, availability and orders.",
    action: "Send a WhatsApp Message",
    href: `${whatsappBase}?text=${encodeURIComponent(
      "Hello My Big Little Farm. I would like to place an order or make a product enquiry."
    )}`,
    external: true,
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    detail: phoneNumber,
    text: "Call the farm directly to discuss your order or supply requirements.",
    action: `Call ${phoneNumber}`,
    href: phoneHref,
  },
  {
    icon: MessageIcon,
    title: "Email",
    detail: contactEmail,
    text: "Email us for product, wholesale and general farm enquiries.",
    action: "Send an Email",
    href: `mailto:${contactEmail}`,
  },
  {
    icon: LocationIcon,
    title: "Google Maps",
    detail: "3 Bodley Road, Laezonia, Gauteng",
    text: "View the farm location on Google Maps. Please contact us before visiting.",
    action: "Open Google Maps",
    href: mapUrl,
    external: true,
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  enquiryType: "Premium Quail",
  quantity: "",
  message: "",
  consent: false,
  website: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

  const quickWhatsappUrl = useMemo(
    () =>
      `${whatsappBase}?text=${encodeURIComponent(
        "Hello My Big Little Farm. I would like to make an enquiry.\n\nProduct: \nQuantity required: \nMy location: "
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

    if (!form.consent || submitState.status === "submitting") return;

    setSubmitState({ status: "submitting", message: "Sending your enquiry…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Your enquiry could not be sent.");

      setSubmitState({
        status: "success",
        message: "Thank you. Your enquiry has been sent to My Big Little Farm.",
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
        title="Contact My Big Little Farm"
        description="Contact My Big Little Farm in Laezonia, Gauteng for quail, rabbits, ducks, heritage poultry, wholesale supply and general farm enquiries."
        path="/contact"
      />
      <Header />

      <main>
        <section className="contact-hero section-cream">
          <div className="container contact-hero-grid">
            <div className="contact-hero-copy">
              <span className="eyebrow">Contact My Big Little Farm</span>
              <h1>Let’s talk about <span>your order.</span></h1>
              <p>
                Contact us for current availability, pricing and supply enquiries
                across our quail, rabbit, heritage chicken and duck ranges.
              </p>
              <div className="hero-actions">
                <a className="button button-primary button-large" href={quickWhatsappUrl} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> WhatsApp Us
                </a>
                <a className="button button-outline button-large" href={phoneHref}>
                  <PhoneIcon /> Call the Farm
                </a>
              </div>
            </div>

            <div className="contact-hero-visual">
              <div className="image-card contact-hero-image">
                <img src="/assets/quail-eggs-closeup.jpg" alt="Farm produce from My Big Little Farm" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-options section-white">
          <div className="container">
            <div className="services-section-heading services-section-heading-center">
              <span className="section-label">Get in touch</span>
              <h2>Choose the easiest way to reach us.</h2>
            </div>

            <div className="contact-card-grid contact-card-grid-four">
              {contactOptions.map(({ icon: Icon, title, detail, text, action, href, external }) => (
                <article className="contact-option-card" key={title}>
                  <span className="contact-option-icon" aria-hidden="true"><Icon size={25} /></span>
                  <h3>{title}</h3>
                  <strong>{detail}</strong>
                  <p>{text}</p>
                  <a
                    className="button button-outline contact-option-button"
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {action} <ArrowRightIcon size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-form-section section-cream">
          <div className="container contact-form-grid">
            <div className="contact-form-intro">
              <span className="section-label">Send an enquiry</span>
              <h2>Tell us what you need.</h2>
              <p>
                Complete the form and your enquiry will be sent directly to the farm.
              </p>

              <div className="contact-person-card">
                <span className="contact-person-icon" aria-hidden="true"><UserIcon size={29} /></span>
                <div>
                  <h3>My Big Little Farm</h3>
                  <p>Laezonia, Gauteng</p>
                  <a href={phoneHref}>{phoneNumber}</a>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              </div>

              <address className="contact-address">
                <LocationIcon size={21} />
                <span>3 Bodley Road<br />Laezonia, Gauteng<br />South Africa</span>
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
                  <input type="text" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" />
                </label>

                <div className="contact-fields-grid">
                  <label className="contact-field">
                    <span>Full Name *</span>
                    <input type="text" name="fullName" value={form.fullName} onChange={updateField} placeholder="Your full name" autoComplete="name" required />
                  </label>

                  <label className="contact-field">
                    <span>Phone Number *</span>
                    <input type="tel" name="phone" value={form.phone} onChange={updateField} placeholder="e.g. 071 656 2369" autoComplete="tel" required />
                  </label>

                  <label className="contact-field">
                    <span>Email Address</span>
                    <input type="email" name="email" value={form.email} onChange={updateField} placeholder="Optional" autoComplete="email" />
                  </label>

                  <label className="contact-field">
                    <span>Enquiry Type *</span>
                    <select name="enquiryType" value={form.enquiryType} onChange={updateField} required>
                      <option>Premium Quail</option>
                      <option>Rabbits</option>
                      <option>Heritage Chickens</option>
                      <option>Ducks</option>
                      <option>Wholesale / Business Supply</option>
                      <option>General Enquiry</option>
                    </select>
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Quantity Required</span>
                    <input type="text" name="quantity" value={form.quantity} onChange={updateField} placeholder="Tell us the quantity you need" />
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Message *</span>
                    <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell us more about your request..." rows="6" required />
                  </label>
                </div>

                <label className="contact-consent">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} required />
                  <span>I agree that My Big Little Farm may contact me regarding this enquiry.</span>
                </label>

                <button className="button button-primary contact-submit" type="submit" disabled={submitState.status === "submitting"}>
                  <MessageIcon size={19} />
                  {submitState.status === "submitting" ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>


      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
