import { useEffect } from "react";

const DEFAULT_SITE_NAME = "My Big Little Farm";
const DEFAULT_IMAGE = "/og-image.jpg";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}) {
  useEffect(() => {
    const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, "");
    const origin = configuredOrigin || window.location.origin;
    const canonicalUrl = `${origin}${path.startsWith("/") ? path : `/${path}`}`;
    const imageUrl = image.startsWith("http") ? image : `${origin}${image}`;
    const fullTitle = title.includes(DEFAULT_SITE_NAME)
      ? title
      : `${title} | ${DEFAULT_SITE_NAME}`;

    document.title = fullTitle;
    document.documentElement.lang = "en-ZA";

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: fullTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "My Big Little Farm fresh quail eggs",
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "en_ZA",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: DEFAULT_SITE_NAME,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: fullTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const existingJsonLd = document.head.querySelector(
      'script[data-seo-json-ld="true"]',
    );
    existingJsonLd?.remove();

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: DEFAULT_SITE_NAME,
      description:
        "Fresh quail eggs supplied with care from My Big Little Farm in Laezonia, Centurion.",
      url: origin,
      logo: `${origin}/assets/logo.png`,
      image: imageUrl,
      telephone: "+27 78 278 5314",
      email: "sales@mybiglittlefarm.co.za",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Bodley Road",
        addressLocality: "Laezonia",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    };

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.dataset.seoJsonLd = "true";
    jsonLd.textContent = JSON.stringify(structuredData || businessSchema);
    document.head.appendChild(jsonLd);

    return () => {
      document.head
        .querySelector('script[data-seo-json-ld="true"]')
        ?.remove();
    };
  }, [title, description, path, image, type, noindex, structuredData]);

  return null;
}
