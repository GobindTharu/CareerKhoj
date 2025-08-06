import React from "react";


/**
 * Professional SEO Component for CareerKhoj
 * Supports dynamic page-specific meta and structured data.
 * Default metadata ensures consistent branding across the site.
 */

const SEO = ({
  title,
  description,
  url,
  image,
  keywords,
  type = "website",
  jsonLd, // Extra structured data like JobPosting
}) => {
  // Default metadata for CareerKhoj
  const defaults = {
    siteName: "CareerKhoj",
    siteUrl: "https://careerkhoj.balgobindchaudhary.com.np",
    title: "CareerKhoj – Find Jobs & Hire Talent in Nepal",
    description:
      "CareerKhoj is Nepal’s trusted job portal for discovering career opportunities and hiring top talent. Browse verified job listings, post openings, and grow your career or business today.",
    image: "https://careerkhoj.balgobindchaudhary.com.np/logo.png", // Update with your OG image
    keywords:
      "CareerKhoj, job portal Nepal, find jobs Nepal, hire employees Nepal, IT jobs Nepal, government jobs Nepal, remote jobs Nepal, freshers jobs Nepal",
  };

  // Merge page-specific props with defaults
  const seo = {
    title: title ? `${title} | ${defaults.siteName}` : defaults.title,
    description: description || defaults.description,
    url: url || defaults.siteUrl,
    image: image || defaults.image,
    keywords: keywords || defaults.keywords,
  };

  // Base JSON-LD for Organization & Website (always included)
  const baseJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: defaults.siteName,
      url: defaults.siteUrl,
      logo: defaults.image,
      sameAs: [
        "https://www.linkedin.com/company/careerkhoj",
        "https://www.facebook.com/careerkhoj",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: defaults.siteName,
      url: defaults.siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${defaults.siteUrl}/jobs?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  // Combine base JSON-LD with page-specific schema
  const combinedJsonLd = jsonLd ? [...baseJsonLd, jsonLd] : baseJsonLd;

  return (
    <head>
      {/* Basic Meta */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={defaults.siteName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaults.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(combinedJsonLd)}
      </script>
    </head>
  );
};

export default SEO;
