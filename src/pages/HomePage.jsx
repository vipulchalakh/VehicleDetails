import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Shield, Clock, Users, CheckCircle, Star, ArrowRight, Car, Database, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const HomePage = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!vehicleNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a vehicle number",
        variant: "destructive",
      });
      return;
    }
    navigate(`/search?vehicle=${encodeURIComponent(vehicleNumber.trim())}`);
  };

  const features = [
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Access detailed RTO information from our extensive vehicle database with real-time updates and accurate records for any vehicle number search.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get vehicle registration details in seconds with our lightning-fast search engine and optimized data retrieval.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your vehicle number searches are protected with enterprise-grade security and complete privacy protection.',
    },
  ];

  const stats = [
    { number: '1M+', label: 'Vehicles Searched' },
    { number: '50K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

  const faqs = [
    {
      question: 'How accurate is the vehicle information for my RTO search?',
      answer: 'Our database is updated in real-time and sourced from official government records, ensuring 99.9% accuracy for your vehicle number search.',
    },
    {
      question: 'Is my vehicle number search history stored?',
      answer: 'No, we prioritize your privacy. Search queries for vehicle registration details are not stored or tracked on our servers.',
    },
    {
      question: 'What RTO information can I get about a vehicle?',
      answer: 'You can access vehicle registration details, owner information, vehicle specifications, and insurance status by vehicle number.',
    },
    {
      question: 'How fast are the search results for vehicle RTO info?',
      answer: 'Most vehicle number searches return results within 2-3 seconds thanks to our optimized infrastructure for RTO information retrieval.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Find Vehicle Information
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Instantly
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Get comprehensive vehicle details and RTO information with our advanced lookup system. 
                  Fast, accurate, and secure vehicle registration data at your fingertips by vehicle number search.
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSearch}
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <Input
                    type="text"
                    placeholder="Enter vehicle number (e.g., PB65AM0008)"
                    aria-label="Vehicle Number Input"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="flex-1 h-14 text-lg bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    aria-label="Search Vehicle Number"
                    className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Now
                  </Button>
                </div>
              </motion.form>

              <motion.div
                className="flex flex-wrap justify-center gap-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-blue-200 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Vehicle Lookup?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the most advanced vehicle information system for RTO details and vehicle number search, with cutting-edge technology and unmatched reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full card-hover border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-center leading-relaxed">
                          {feature.description}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get vehicle RTO information and registration details in three simple steps with our streamlined vehicle number search process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Enter Vehicle Number',
                  description: 'Simply type in the vehicle registration number you want to lookup for RTO details.',
                  icon: Car,
                },
                {
                  step: '02',
                  title: 'Instant Search',
                  description: 'Our system searches through millions of RTO records in real-time for your vehicle number.',
                  icon: Search,
                },
                {
                  step: '03',
                  title: 'Get Results',
                  description: 'Receive comprehensive vehicle information and registration details within seconds.',
                  icon: CheckCircle,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    {index < 2 && (
                      <ArrowRight className="hidden md:block absolute top-10 -right-4 h-6 w-6 text-gray-400" aria-hidden="true" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our vehicle lookup service, RTO information, and vehicle number search.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;