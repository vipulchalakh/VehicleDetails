import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, FileText, Clock, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPage = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-leading security measures to protect your personal information during every vehicle number search and RTO data retrieval.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what vehicle registration data we collect, how we use it for RTO lookups, and who we share it with.',
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You have full control over your data related to vehicle number searches with options to access, modify, or delete it.',
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'All RTO information and vehicle registration details are encrypted and stored using enterprise-grade security infrastructure.',
    },
  ];

  const lastUpdated = 'December 1, 2024';

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Your privacy is our priority. Learn how we collect, use, and protect your RTO information and vehicle registration details 
                when you use our vehicle number lookup service.
              </p>
              <div className="mt-8 flex items-center justify-center space-x-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Privacy Principles for Vehicle Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide how we handle your personal information related to vehicle number searches and RTO data, ensuring your privacy is protected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center card-hover border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{principle.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {principle.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Database className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Information We Collect for Vehicle Lookup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Information You Provide for RTO Search</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Vehicle registration numbers you search for to get RTO details</li>
                      <li>Contact information when you reach out about vehicle information</li>
                      <li>Account information if you create an account for vehicle lookup history</li>
                      <li>Feedback on vehicle number search and RTO data accuracy</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect Automatically During Vehicle Search</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>IP address and device information used for RTO lookup</li>
                      <li>Browser type and version used for accessing vehicle registration details</li>
                      <li>Usage patterns for vehicle number search and preferences</li>
                      <li>Cookies to enhance your vehicle information search experience</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                      <FileText className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">How We Use Your Vehicle Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    We use the RTO information and vehicle registration data we collect to provide, maintain, and improve our vehicle lookup service. 
                    Specifically, we use your information to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Process your vehicle number lookup requests and provide RTO details</li>
                    <li>Provide customer support for vehicle information queries</li>
                    <li>Improve our service quality and vehicle search user experience</li>
                    <li>Detect and prevent fraud or abuse related to RTO data access</li>
                    <li>Comply with legal obligations regarding vehicle registration information</li>
                    <li>Send important service updates about our vehicle lookup platform</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                      <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Information Sharing for RTO Data</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    We do not sell, trade, or rent your personal information or vehicle number search history to third parties. We may share your RTO information 
                    only in the following limited circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>With your explicit consent for sharing vehicle registration details</li>
                    <li>To comply with legal requirements or court orders related to RTO data</li>
                    <li>To protect our rights, property, or safety concerning vehicle information</li>
                    <li>With trusted service providers who assist in our vehicle lookup operations</li>
                    <li>In connection with a business transfer or merger involving our RTO data platform</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <Lock className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Data Security for Vehicle Registration Details</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    We implement comprehensive security measures to protect your personal and RTO information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>End-to-end encryption for vehicle number search data transmission</li>
                    <li>Secure servers for storing RTO information with regular security updates</li>
                    <li>Access controls for vehicle registration details</li>
                    <li>Regular security audits for our vehicle lookup platform</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg">
                      <UserCheck className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Your Rights Regarding Vehicle Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    You have rights regarding your RTO search data and vehicle registration information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Access: Request a copy of the RTO information we hold about your vehicle number searches.</li>
                    <li>Correction: Request correction of inaccurate vehicle registration details.</li>
                  </ul>
                   <p className="text-gray-600 leading-relaxed mt-4">
                    To exercise these rights for your vehicle lookup data, please contact us at info@vehicleregistrationdetail.com.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Cookies and Vehicle Number Search Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    We use cookies to enhance your RTO information search experience. These help us:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Remember your vehicle lookup preferences</li>
                    <li>Analyze RTO search traffic and usage patterns</li>
                    <li>Improve vehicle registration data retrieval performance</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    You can control cookie settings for vehicle number searches through your browser.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Questions About RTO Information Privacy?</CardTitle>
                  <CardDescription className="text-blue-100">
                    We're here to clarify questions about our privacy practices for vehicle number lookup.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-100">
                    If you have questions about this Privacy Policy or our RTO data practices for vehicle registration details, 
                    please contact us:
                  </p>
                  <div className="space-y-2 text-blue-100">
                    <p>Email: info@vehicleregistrationdetail.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;