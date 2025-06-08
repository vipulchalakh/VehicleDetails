import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, Eye, Heart, Zap, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your data matters. We use government-grade encryption and best-in-class security practices to protect every vehicle number search.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'No more waiting. Get instant access to vehicle registration details—from owner information to RTO codes—within seconds.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Every detail, every button, every update is designed with real Indian users in mind—from urban buyers to rural transporters.',
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: 'Vehicle needs don\'t sleep. Our platform runs everyday so you can access RTO vehicle data anytime, anywhere in India.',
    },
  ];

  const team = [
    {
      name: 'Ananya Verma',
      role: 'CEO & Founder',
      description: 'Visionary entrepreneur with a decade of experience in mobility tech and transport data systems.',
      imageUrl: '/ananya-verma.png',
    },
    {
      name: 'Arjun Patel',
      role: 'CTO',
      description: 'Backend genius responsible for building our fast, scalable platform that handles millions of RTO lookups every month.',
      imageUrl: '/arjun-patel.png',
    },
    {
      name: 'Kavita Rao',
      role: 'Head of Security',
      description: 'Former cybersecurity consultant now ensuring ironclad data privacy across all Indian state databases.',
      imageUrl: '/kavita-rao.png',
    },
    {
      name: 'Rohan Iyer',
      role: 'Lead Developer',
      description: 'The creative coder behind our sleek, user-first interface designed for intuitive vehicle number searches.',
      imageUrl: '/rohan-iyer.png',
    },
  ];

  const stats = [
    { number: '2M+', label: 'Vehicles in Database' },
    { number: '500K+', label: 'Monthly RTO Searches' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Team Members' },
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
                About VehicleLookup
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
               At VehicleLookup, we're changing the way India accesses vehicle registration details and RTO information. Using advanced technology, deep data integrations, and a strong focus on user privacy, we help you uncover verified details of any vehicle—securely, instantly, and with zero guesswork.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <Target className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                     We aim to make vehicle number search in India seamless and secure. By offering lightning-fast access to RTO vehicle data, we empower everyday citizens, car buyers, transport businesses, and service providers to make confident, informed decisions.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                        <Eye className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                     To become India's most trusted and intelligent platform for accessing vehicle registration information, by setting new benchmarks in data authenticity, user trust, and digital experience—one vehicle lookup at a time.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img  
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  alt="Modern office environment displaying data charts related to vehicle information and RTO lookups"
                 src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Our values aren't just words—they guide every search, every feature, and every RTO data response we deliver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center card-hover border-0 shadow-lg bg-white">
                      <CardHeader className="pb-4">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                See how we're making a difference in the RTO vehicle information and registration details industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium text-lg">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               We are powered by a passionate team of Indian technologists, data engineers, and security experts who are committed to transparency in the auto ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center card-hover border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <img  
                        className="mx-auto w-24 h-24 rounded-full object-cover mb-4" 
                        alt={`Portrait of ${member.name}, ${member.role} at VehicleLookup`} 
                        src={member.imageUrl}
                      />
                      <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  VehicleLookup began with a real-life hassle: trying to buy a second-hand bike in Pune and struggling to verify the seller's claims. This sparked the idea of creating an easy-to-use platform where anyone in India can search for vehicle registration details without navigating government portals or shady intermediaries.
                </p>
                <p>
                  Founded in 2020 by a team of Indian engineers and auto-tech veterans, VehicleLookup has grown from a small idea into a national platform helping lakhs of users each month. Whether you're in Delhi, Mumbai, Chennai, or a small town in Assam, we're here to provide the same trustworthy RTO information—fast and secure.
                </p>
                <p>
                  Our mission continues: simplifying India's access to reliable vehicle data, reducing fraud, and helping millions make smarter decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;