import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import SearchPage from '@/pages/SearchPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import CookiePolicyPage from '@/pages/CookiePolicyPage';
import DisclaimerPage from '@/pages/DisclaimerPage';

const PageMeta = () => {
  const location = useLocation();
  const siteUrl = "https://vehicleregistrationdetail.com";
  const canonicalUrl = `${siteUrl}${location.pathname}${location.search}`;

  let title = "Vehicle Registration Lookup | Fast RTO Search India";
  let description = "Lookup Indian vehicle registration details instantly. Fast, secure, and accurate RTO search for cars, bikes, and commercial vehicles.";
  const path = location.pathname;

  if (path === "/") {
    title = "Vehicle Registration Lookup | Fast RTO Search India";
    description = "Lookup Indian vehicle registration details instantly. Fast, secure, and accurate RTO search for cars, bikes, and commercial vehicles.";
  } else if (path === "/about") {
    title = "About Us | Trusted Vehicle Registration Platform";
    description = "Learn about our mission to provide reliable, up-to-date vehicle registration and RTO information for users across India.";
  } else if (path === "/contact") {
    title = "Contact Us | Vehicle Registration Support";
    description = "Get in touch for support, feedback, or partnership inquiries related to vehicle registration and RTO lookup services.";
  } else if (path === "/privacy-policy") {
    title = "Privacy Policy | Data Protection & Security";
    description = "Read our privacy policy to understand how we protect your data and ensure secure vehicle registration searches.";
  } else if (path === "/search") {
    const vehicleParam = new URLSearchParams(location.search).get('vehicle');
    if (vehicleParam) {
      title = `Vehicle Details for ${vehicleParam} | RTO Lookup India`;
      description = `Get RTO and registration details for vehicle number ${vehicleParam}. Fast, secure, and accurate vehicle lookup.`;
    } else {
      title = "Search Vehicle Registration | Instant RTO Info";
      description = "Search for Indian vehicle registration details and RTO information by entering a vehicle number. Accurate and fast results.";
    }
  } else if (path === "/terms-of-service") {
    title = "Terms of Service | Vehicle Registration Lookup";
    description = "Review our terms of service for using the vehicle registration lookup platform and RTO search features.";
  } else if (path === "/cookie-policy") {
    title = "Cookie Policy | Vehicle Registration Lookup";
    description = "Learn how we use cookies to enhance your experience on our vehicle registration and RTO lookup platform.";
  } else if (path === "/disclaimer") {
    title = "Disclaimer | Vehicle Registration Lookup";
    description = "Read our disclaimer regarding the accuracy and use of vehicle registration and RTO information provided on our platform.";
  }

  // Global WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vehicle Registration Lookup",
    "url": siteUrl + "/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?vehicle={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Global Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VehicleLookup",
    "alternateName": "Vehicle Registration Detail",
    "url": "https://vehicleregistrationdetail.com/",
    "logo": "https://vehicleregistrationdetail.com/vs%20favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918766994595",
      "contactType": "technical support",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vehicle Registration Lookup" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
};


function App() {
  return (
    <Router>
      <PageMeta />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;