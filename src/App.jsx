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

  let title = "Vehicle Registration Lookup | Free RTO Search India";
  let description = "Instant, secure vehicle registration lookup. Get verified RTO details for any Indian vehicle. Free, fast, and accurate.";
  const path = location.pathname;

  if (path === "/") {
    title = "Get 100% Free Vehicle Registration Details - VehicleLookup";
    description = "Fast and secure vehicle information lookup service. Get comprehensive vehicle details instantly with our advanced search system.";
  } else if (path === "/about") {
    title = "About VehicleLookup | Our Mission & Team";
    description = "Learn about VehicleLookup, our mission, vision, and the passionate team behind India's trusted vehicle registration platform.";
  } else if (path === "/contact") {
    title = "Contact Us | Vehicle Registration Support";
    description = "Contact VehicleLookup for support, feedback, or partnership. We're here to help with all your vehicle registration and RTO queries.";
  } else if (path === "/privacy-policy") {
    title = "Privacy Policy | Your Data, Our Priority";
    description = "Read how VehicleLookup protects your privacy and data. We ensure secure, transparent handling of your vehicle search information.";
  } else if (path === "/search") {
    const vehicleParam = new URLSearchParams(location.search).get('vehicle');
    if (vehicleParam) {
      title = `Vehicle Details for ${vehicleParam} | RTO Lookup India`;
      description = `Get verified RTO and registration details for vehicle number ${vehicleParam}. Fast, secure, and accurate lookup results.`;
    } else {
      title = "Search Vehicle Registration | Instant RTO Info";
      description = "Enter a vehicle number to instantly search Indian RTO and registration details. Fast, accurate, and secure results every time.";
    }
  } else if (path === "/terms-of-service") {
    title = "Terms of Service | VehicleLookup Platform";
    description = "Review the terms and conditions for using VehicleLookup's vehicle registration and RTO information services.";
  } else if (path === "/cookie-policy") {
    title = "Cookie Policy | VehicleLookup";
    description = "Learn how VehicleLookup uses cookies to enhance your experience and keep your vehicle search secure and personalized.";
  } else if (path === "/disclaimer") {
    title = "Disclaimer | Vehicle Information Accuracy";
    description = "Read our disclaimer about the accuracy and use of vehicle registration and RTO data provided by VehicleLookup.";
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Routes>
          <Route path="/" element={<><PageMeta /><HomePage /></>} />
          <Route path="/about" element={<><PageMeta /><AboutPage /></>} />
          <Route path="/contact" element={<><PageMeta /><ContactPage /></>} />
          <Route path="/privacy-policy" element={<><PageMeta /><PrivacyPage /></>} />
          <Route path="/search" element={<><PageMeta /><SearchPage /></>} />
          <Route path="/terms-of-service" element={<><PageMeta /><TermsOfServicePage /></>} />
          <Route path="/cookie-policy" element={<><PageMeta /><CookiePolicyPage /></>} />
          <Route path="/disclaimer" element={<><PageMeta /><DisclaimerPage /></>} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;