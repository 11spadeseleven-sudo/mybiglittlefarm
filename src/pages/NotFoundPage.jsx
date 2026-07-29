import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <div className="site-shell">
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        path={window.location.pathname}
        noindex
      />
      <Header />
      <main className="not-found section-cream">
        <div className="container not-found-inner">
          <span className="eyebrow">404 error</span>
          <h1>That page has flown the coop.</h1>
          <p>
            The address may be incorrect or the page may have moved. Return to
            the homepage to continue browsing My Big Little Farm.
          </p>
          <Link className="button button-primary button-large" to="/">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
