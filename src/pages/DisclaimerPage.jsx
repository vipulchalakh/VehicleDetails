import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, CircleSlash as EyeSlash, Database } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DisclaimerPage = () => {
  const lastUpdated = 'December 1, 2024';

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6">
                <AlertTriangle className="h-12 w-12 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Important information about the use of our VehicleLookup service and the data provided.
            </p>
            <p className="mt-4 text-orange-200">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
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
                    <Info className="h-6 w-6 text-orange-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">1. Information Accuracy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed space-y-4">
                <p>The information provided by the VehicleLookup service is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
                <p>Any reliance you place on such information is therefore strictly at your own risk. The data is sourced from third-party providers and public records, which may contain errors or omissions.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Database className="h-6 w-6 text-red-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">2. Data Sources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                <p>VehicleLookup aggregates data from various public and private sources. We do not generate or alter this data. The availability and accuracy of information can vary depending on the source and the specific vehicle. We are not responsible for inaccuracies or outdated information provided by these external sources.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <EyeSlash className="h-6 w-6 text-purple-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">3. No Legal Advice</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                <p>The information provided through the Service is not intended to constitute legal, financial, or professional advice. You should consult with a qualified professional for advice tailored to your specific situation. VehicleLookup is not a consumer reporting agency and does not provide consumer reports.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <CardTitle className="text-2xl font-bold text-gray-900">4. Limitation of Liability</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                <p>In no event will VehicleLookup be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. This includes any errors, omissions, or inaccuracies in the information provided.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                    <p>If you have any questions about this Disclaimer, please contact us at legal@vehiclelookup.com.</p>
                </CardContent>
            </Card>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisclaimerPage;