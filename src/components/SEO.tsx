import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string;
  author?: string;
  structuredData?: object;
}

const defaultStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://esherdentalimplants.co.uk/#dentist",
      "name": "Confidential Clinic",
      "image": "https://esherdentalimplants.co.uk/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
      "url": "https://esherdentalimplants.co.uk",
      "telephone": "020 8399 1291",
      "email": "surbiton@confidentalclinic.com",
      "priceRange": "£££",
      "currenciesAccepted": "GBP",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Finance Plans"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "359 Ewell Road",
        "addressLocality": "Esher",
        "postalCode": "KT6 7BZ",
        "addressRegion": "Surrey",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.3915678796046,
        "longitude": -0.3061234842177
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "specialty": ["Dental Implants", "Full Arch Implants", "Single Tooth Implants", "Multiple Tooth Implants", "Same Day Implants", "Bone Grafting", "Implant Supported Dentures"],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 51.3915678796046,
          "longitude": -0.3061234842177
        },
        "geoRadius": "25000"
      },
      "sameAs": [
        "https://www.facebook.com/myconfidentalclinic"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Implant Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Single Tooth Implant",
              "description": "Replace a single missing tooth with a natural-looking dental implant"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multiple Tooth Implants",
              "description": "Replace multiple missing teeth with dental implants"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Arch Implants",
              "description": "Complete tooth replacement with full arch dental implants"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Same Day Implants",
              "description": "Immediate dental implant placement and restoration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bone Grafting",
              "description": "Bone grafting procedures to support dental implants"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Implant Supported Dentures",
              "description": "Secure dentures supported by dental implants"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://esherdentalimplants.co.uk/#localbusiness",
      "name": "Confidential Clinic",
      "image": "https://esherdentalimplants.co.uk/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
      "telephone": "020 8399 1291",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "359 Ewell Road",
        "addressLocality": "Esher",
        "postalCode": "KT6 7BZ",
        "addressRegion": "Surrey",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.3915678796046,
        "longitude": -0.3061234842177
      },
      "url": "https://esherdentalimplants.co.uk",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://esherdentalimplants.co.uk/#website",
      "url": "https://esherdentalimplants.co.uk",
      "name": "Confidential Clinic - Dental Implants Esher",
      "description": "Leading dental implant specialists in Esher, Surrey. Expert single tooth, multiple teeth & full arch implants.",
      "publisher": {
        "@id": "https://esherdentalimplants.co.uk/#dentist"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://esherdentalimplants.co.uk/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://esherdentalimplants.co.uk/#organization",
      "name": "Confidential Clinic",
      "url": "https://esherdentalimplants.co.uk",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-GB",
        "url": "https://esherdentalimplants.co.uk/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
        "contentUrl": "https://esherdentalimplants.co.uk/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
        "width": 512,
        "height": 512,
        "caption": "Confidential Clinic Logo"
      },
      "image": {
        "@id": "https://esherdentalimplants.co.uk/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png"
      }
    }
  ]
};

const SEO = ({
  title = 'Dental Implant Specialists in Esher | Expert Implant Treatment | Confidential Clinic',
  description = 'Leading dental implant specialists in Esher, Surrey. Expert single tooth, multiple teeth & full arch implants. Same-day appointments available. Call 020 8399 1291 for a free consultation.',
  canonicalUrl = 'https://esherdentalimplants.co.uk',
  ogType = 'website',
  ogImage = 'https://esherdentalimplants.co.uk/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png',
  ogImageAlt = 'Confidential Clinic - Premier Dental Implants in Esher, Surrey',
  keywords = 'dental implants Esher, tooth implants Surrey, dental clinic Esher, implant dentist KT6, full arch implants Esher, single tooth implant Surrey, multiple tooth implants, dental implants near me, Banstead dentist, Esher dental clinic, Caterham implant specialist, same day implants Esher, bone grafting Surrey, implant supported dentures',
  author = 'Confidential Clinic',
  structuredData = defaultStructuredData
}: SEOProps) => {
  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Confidential Clinic" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="bingbot" content="index, follow" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="GB-SRY" />
      <meta name="geo.placename" content="Esher" />
      <meta name="geo.position" content="51.3915678796046;-0.3061234842177" />
      <meta name="ICBM" content="51.3915678796046, -0.3061234842177" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Alternative formats */}
      <link rel="alternate" type="application/rss+xml" title="Confidential Clinic RSS Feed" href={`${canonicalUrl}/feed.xml`} />
      <link rel="alternate" type="application/atom+xml" title="Confidential Clinic Atom Feed" href={`${canonicalUrl}/atom.xml`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional metadata for dental practice */}
      <meta name="practice-type" content="dental clinic" />
      <meta name="specialty" content="dental implants" />
      <meta name="service-area" content="Esher, Surrey, London, KT6, KT19, KT20, SM2, SM3" />
      <meta name="business-hours" content="Mon-Thu 9:00-18:00, Fri 9:00-17:00, Sat 9:00-13:00" />
      <meta name="payment-methods" content="Cash, Credit Card, Debit Card, Finance Plans" />
      
      {/* Accessibility */}
      <meta name="color-scheme" content="light dark" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Cache control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
    </Helmet>
  );
};

export default SEO;