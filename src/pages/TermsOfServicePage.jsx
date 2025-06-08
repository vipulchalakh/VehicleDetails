import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertTriangle, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfServicePage = () => {
  const lastUpdated = 'December 1, 2024';

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6">
              <FileText className="h-12 w-12 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our VehicleLookup service. 
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            </p>
            <p className="mt-4 text-blue-200">Last updated: {lastUpdated}</p>
          </motion.div>
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
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed space-y-4">
                <p>By accessing or using the VehicleLookup service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.</p>
                <p>We reserve the right to update or change these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">2. Use of Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed space-y-4">
                <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the Service complies with all applicable laws and regulations.</p>
                <p>Prohibited uses include, but are not limited to: attempting to interfere with the Service's network or security features, using the Service for any illegal activity, or transmitting any harmful code or malware.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">3. Intellectual Property</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of VehicleLookup and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <CardTitle className="text-2xl font-bold text-gray-900">4. Disclaimer of Warranties; Limitation of Liability</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed space-y-4">
                <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. VehicleLookup makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <p>In no event shall VehicleLookup or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VehicleLookup's website, even if VehicleLookup or a VehicleLookup authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                    <p>If you have any questions about these Terms, please contact us at info@vehicleregistrationdetail.com.</p>
                </CardContent>
            </Card>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;