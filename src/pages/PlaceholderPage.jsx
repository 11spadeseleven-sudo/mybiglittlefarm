import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function PlaceholderPage({ title }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="placeholder-page section-cream">
        <div className="container placeholder-inner">
          <span className="eyebrow">Coming next</span>
          <h1>{title}</h1>
          <p>We will build this page in the next step.</p>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
