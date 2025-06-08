import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Info, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CookiePolicyPage = () => {
  const lastUpdated = 'December 1, 2024';

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6">
                <Cookie className="h-12 w-12 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Learn about how VehicleLookup uses cookies and similar technologies to provide and improve our services.
            </p>
            <p className="mt-4 text-green-200">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Info className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">1. What are Cookies?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed space-y-4">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                <p>Cookies help us understand how our website is being used, remember your preferences, and generally improve your browsing experience.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                 <div className="flex items-center space-x-3">
                    <Cookie className="h-6 w-6 text-yellow-500" />
                    <CardTitle className="text-2xl font-bold text-gray-900">2. How We Use Cookies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed space-y-4">
                <p>VehicleLookup uses cookies for several purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
                    <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</li>
                    <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                    <li><strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website, such as which pages are visited most often. This helps us improve the way our website works.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">3. Your Choices Regarding Cookies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
                <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.allaboutcookies.org</a>.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                    <p>If you have any questions about our use of cookies, please contact us at info@vehicleregistrationdetail.com.</p>
                </CardContent>
            </Card>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;