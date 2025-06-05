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
  const siteUrl = "https://example.com";
  const canonicalUrl = `${siteUrl}${location.pathname}${location.search}`;

  let title = "VehicleLookup - Instant Vehicle Information";
  let description = "Find comprehensive vehicle details, RTO information, and registration data instantly with VehicleLookup's advanced search system.";
  
  const path = location.pathname;

  if (path === "/") {
    title = "VehicleLookup - Instant Vehicle Information Search";
    description = "Get comprehensive vehicle details with our advanced lookup system. Fast, accurate, and secure RTO vehicle information at your fingertips.";
  } else if (path === "/about") {
    title = "About VehicleLookup | Our Mission and Values";
    description = "Learn about VehicleLookup, our mission to democratize vehicle information access, and our commitment to accuracy and user privacy.";
  } else if (path === "/contact") {
    title = "Contact VehicleLookup | Get Support";
    description = "Have questions? Contact VehicleLookup support for assistance with our vehicle number search and RTO information services.";
  } else if (path === "/privacy-policy") {
    title = "Privacy Policy | VehicleLookup";
    description = "Read VehicleLookup's privacy policy to understand how we collect, use, and protect your personal data and vehicle search information.";
  } else if (path === "/search") {
    const vehicleParam = new URLSearchParams(location.search).get('vehicle');
    if (vehicleParam) {
      title = `Vehicle Details for ${vehicleParam} | VehicleLookup`;
      description = `Find RTO information, owner details, and registration data for vehicle number ${vehicleParam}. Fast and accurate vehicle lookup.`;
    } else {
      title = "Vehicle Search | Find RTO Information | VehicleLookup";
      description = "Search for vehicle registration details, RTO information, owner data, and more using our advanced vehicle number lookup.";
    }
  } else if (path === "/terms-of-service") {
    title = "Terms of Service | VehicleLookup";
    description = "Review the Terms of Service for using VehicleLookup. Understand your rights and responsibilities when accessing our vehicle information platform.";
  } else if (path === "/cookie-policy") {
    title = "Cookie Policy | VehicleLookup";
    description = "Learn about how VehicleLookup uses cookies to enhance your browsing experience and provide personalized vehicle search services.";
  } else if (path === "/disclaimer") {
    title = "Disclaimer | VehicleLookup";
    description = "Read the disclaimer for VehicleLookup. Important information regarding the use of our vehicle lookup service and the data provided.";
  }


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
      <meta property="og:site_name" content="VehicleLookup" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {path === "/" && (
         <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "VehicleLookup",
            "url": "${siteUrl}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "${siteUrl}/search?vehicle={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      )}
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