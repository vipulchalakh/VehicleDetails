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
      description: 'We prioritize the security and privacy of your data with enterprise-grade protection for every vehicle number search.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our optimized infrastructure delivers RTO information and vehicle registration details in seconds, not minutes.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Every feature for vehicle lookup is designed with our users\' needs and experience in mind.',
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: '24/7 uptime ensures you can access vehicle information and RTO details whenever you need it.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in automotive technology and RTO data systems.',
      imageUrl: 'https://images.unsplash.com/photo-1580894742487-9f3a786eaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VvJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Technical expert specializing in database architecture for vehicle registration details and API development.',
      imageUrl: 'https://images.unsplash.com/photo-1600878459398-325a73c3f553?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3RvJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity specialist ensuring the highest standards of data protection for vehicle number searches.',
      imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwc2VjdXJpdHklMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      description: 'Full-stack developer passionate about creating seamless user experiences for RTO information lookup.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMGRldmVsb3BlciUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60'
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
                We're revolutionizing how people access vehicle RTO information and registration details with cutting-edge technology, 
                unmatched accuracy, and a commitment to user privacy and security for every vehicle number search.
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
                      To democratize access to vehicle RTO information by providing fast, accurate, and secure 
                      vehicle number lookup services that empower individuals and businesses to make informed decisions about vehicle registration details.
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
                      To become the world's most trusted and comprehensive vehicle information platform for RTO details and vehicle number searches, 
                      setting new standards for data accuracy, security, and user experience in accessing vehicle registration data.
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
                These principles guide everything we do, from RTO data handling to vehicle number search functionality, and shape how we serve our users.
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
                The passionate individuals behind VehicleLookup's success in providing accurate RTO information and vehicle number search.
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
                       src="https://images.unsplash.com/photo-1500469835612-bbdd7aa966e7" />
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
                  VehicleLookup was born from a simple frustration: the difficulty of accessing reliable 
                  vehicle RTO information and registration details quickly and securely. Our founders, experienced in automotive 
                  technology and data systems, recognized the need for a comprehensive, user-friendly platform for vehicle number search.
                </p>
                <p>
                  Since our launch in 2020, we've grown from a small startup to a trusted platform serving 
                  hundreds of thousands of users monthly for their vehicle lookup needs. Our commitment to accuracy, security, and user 
                  experience has made us the go-to choice for individuals and businesses alike seeking RTO information.
                </p>
                <p>
                  Today, we continue to innovate and expand our services for vehicle number search and registration details, always keeping our users' needs 
                  at the center of everything we do. We're not just a lookup service – we're your trusted 
                  partner in making informed vehicle-related decisions with accurate RTO data.
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