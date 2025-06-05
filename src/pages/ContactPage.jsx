import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones as HeadphonesIcon, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us regarding your RTO information query. We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime for vehicle number search support',
      contact: 'support@vehiclelookup.com',
      action: 'mailto:support@vehiclelookup.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our support team about RTO information',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office (for vehicle registration detail queries by appointment)',
      contact: '123 Tech Street, Digital City, DC 12345',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We\'re here to help with your vehicle lookup',
      contact: 'Mon-Fri: 9AM-6PM EST',
      action: '#'
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help for your vehicle number search',
      available: true
    },
    {
      icon: HeadphonesIcon,
      title: 'Phone Support',
      description: 'Speak directly with our RTO information experts',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed assistance for vehicle registration queries',
      available: true
    },
    {
      icon: Globe,
      title: 'Help Center',
      description: 'Browse our comprehensive FAQ on vehicle lookup',
      available: true
    }
  ];

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
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Have questions about our vehicle lookup service or need help with an RTO information search? We're here to help! 
                Reach out to us through any of the channels below for assistance with your vehicle number query.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the most convenient way to reach us for your vehicle number search or RTO information needs. We're committed to providing 
                excellent customer service and support for all vehicle registration detail inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
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
                        <CardTitle className="text-xl font-bold text-gray-900">{info.title}</CardTitle>
                        <CardDescription className="text-gray-600">{info.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a
                          href={info.action}
                          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                        >
                          {info.contact}
                        </a>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below for your vehicle number or RTO information query and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="h-12"
                            placeholder="Your full name"
                            aria-label="Full Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-12"
                            placeholder="your.email@example.com"
                            aria-label="Email Address"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="h-12"
                          placeholder="Regarding RTO info, vehicle number..."
                          aria-label="Message Subject"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us how we can help with your vehicle lookup..."
                          aria-label="Your Message"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Send Message"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Get Support</h3>
                  <p className="text-gray-600 mb-8">
                    Choose the support option that works best for your vehicle number search or RTO information needs. Our team is available 
                    through multiple channels to ensure you get the help you need for vehicle registration queries.
                  </p>
                </div>

                <div className="space-y-4">
                  {supportOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="card-hover border-0 shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900">{option.title}</h4>
                                <p className="text-gray-600">{option.description}</p>
                              </div>
                              <div className="flex items-center">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  option.available 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {option.available ? 'Available' : 'Coming Soon'}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold mb-2">Frequently Asked Questions</h4>
                    <p className="text-blue-100 mb-4">
                      Find quick answers to common questions about our RTO information and vehicle number search service.
                    </p>
                    <Button
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                      aria-label="Browse Frequently Asked Questions"
                    >
                      Browse FAQ
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;