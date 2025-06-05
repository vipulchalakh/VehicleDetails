import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Car, Calendar, User, MapPin, Shield, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vehicleNumber, setVehicleNumber] = useState(searchParams.get('vehicle') || '');
  const [vehicleData, setVehicleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const vehicleQuery = searchParams.get('vehicle');
    if (vehicleQuery) {
      setVehicleNumber(vehicleQuery);
      performSearch(vehicleQuery);
    } else {
      setVehicleData(null);
      setHasSearched(false);
    }
  }, [searchParams]);

  const sanitizeInput = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  };

  const performSearch = async (searchVehicleNum) => {
    const sanitizedVehicle = sanitizeInput(searchVehicleNum);
    
    if (!sanitizedVehicle.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid vehicle number for RTO search.",
        variant: "destructive",
      });
      setLoading(false);
      setHasSearched(true);
      setVehicleData(null);
      return;
    }

    setLoading(true);
    setHasSearched(true);
    setVehicleData(null);

    try {
      const response = await fetch('https://vehicle-rc-information.p.rapidapi.com/advanced', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'vehicle-rc-information.p.rapidapi.com',
          'x-rapidapi-key': 'b2ab5080a4msh35ab5f199d8ac9ap1610aajsn7d0fc9e0112c'
        },
        body: JSON.stringify({
          VehicleNumber: sanitizedVehicle
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setVehicleData(data.data);
        toast({
          title: "Success",
          description: `Vehicle RTO information for ${sanitizedVehicle} retrieved successfully.`,
        });
      } else {
        throw new Error(data.message || `Vehicle number ${sanitizedVehicle} not found in RTO records.`);
      }
    } catch (error) {
      console.error('Search error:', error);
      setVehicleData(null); // Ensure vehicleData is null on error
      toast({
        title: "Error",
        description: error.message || `Failed to retrieve RTO information for vehicle ${sanitizedVehicle}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmedVehicleNumber = vehicleNumber.trim();
    if (trimmedVehicleNumber) {
      setSearchParams({ vehicle: trimmedVehicleNumber });
    } else {
       toast({
        title: "Error",
        description: "Please enter a vehicle number.",
        variant: "destructive",
      });
    }
  };


  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const currentVehicleQuery = searchParams.get('vehicle');

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Vehicle RTO Information Search
              </h1>
              <p className="text-xl text-blue-100">
                Enter a vehicle number to get comprehensive RTO registration details and owner information.
              </p>
            </div>

            <motion.form
              onSubmit={handleSearchSubmit}
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <Input
                  type="text"
                  placeholder="Enter vehicle number (e.g., PB65AM0008)"
                  aria-label="Vehicle Number for RTO Search"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  className="flex-1 h-14 text-lg bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  aria-label="Search Vehicle RTO Information"
                  className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  ) : (
                    <Search className="h-5 w-5 mr-2" />
                  )}
                  {loading ? 'Searching RTO...' : 'Search RTO Info'}
                </Button>
              </div>
            </motion.form>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <Loader2 className="h-8 w-8 text-white animate-spin" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Searching RTO Vehicle Database</h2>
                <p className="text-gray-600">Please wait while we retrieve the RTO registration details for {currentVehicleQuery}...</p>
              </motion.div>
            )}

            {!loading && hasSearched && !vehicleData && currentVehicleQuery && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No RTO Results Found for {currentVehicleQuery}</h2>
                <p className="text-gray-600">
                  We couldn't find RTO information for the vehicle number "{currentVehicleQuery}". 
                  Please check the number and try your vehicle search again.
                </p>
              </motion.div>
            )}

            {!loading && vehicleData && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Vehicle RTO Information Found!</h2>
                  <p className="text-gray-600">Here's the RTO registration details for vehicle number: {currentVehicleQuery}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="card-hover border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                          <Car className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg">Basic RTO Information</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Registration Number</span>
                        <p className="font-semibold text-gray-900">{vehicleData.registration_number || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Vehicle Type</span>
                        <p className="font-semibold text-gray-900">{vehicleData.vehicle_type || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Fuel Type</span>
                        <p className="font-semibold text-gray-900">{vehicleData.fuel_type || 'N/A'}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                          <User className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg">Owner RTO Details</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Owner Name</span>
                        <p className="font-semibold text-gray-900">{vehicleData.owner_name || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Father's Name</span>
                        <p className="font-semibold text-gray-900">{vehicleData.father_name || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Mobile Number (Masked)</span>
                        <p className="font-semibold text-gray-900">{vehicleData.mobile_number || 'N/A'}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                          <Calendar className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg">RTO Registration Dates</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Registration Date</span>
                        <p className="font-semibold text-gray-900">{formatDate(vehicleData.registration_date)}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Valid Until</span>
                        <p className="font-semibold text-gray-900">{formatDate(vehicleData.valid_until)}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">RTO Office</span>
                        <p className="font-semibold text-gray-900">{vehicleData.rto_office || 'N/A'}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover border-0 shadow-lg md:col-span-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                          <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg">Address Information (As per RTO)</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Present Address</span>
                        <p className="font-semibold text-gray-900">{vehicleData.present_address || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Permanent Address</span>
                        <p className="font-semibold text-gray-900">{vehicleData.permanent_address || 'N/A'}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg">
                          <Shield className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg">Insurance RTO Details</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Insurance Company</span>
                        <p className="font-semibold text-gray-900">{vehicleData.insurance_company || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Policy Number</span>
                        <p className="font-semibold text-gray-900">{vehicleData.policy_number || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Insurance Valid Until</span>
                        <p className="font-semibold text-gray-900">{formatDate(vehicleData.insurance_valid_until)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {(vehicleData.engine_number || vehicleData.chassis_number || vehicleData.manufacturer) && (
                  <Card className="card-hover border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Additional RTO Vehicle Details</CardTitle>
                      <CardDescription>Technical specifications and manufacturing information from RTO records.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {vehicleData.engine_number && (
                          <div>
                            <span className="text-sm font-medium text-gray-500">Engine Number</span>
                            <p className="font-semibold text-gray-900">{vehicleData.engine_number}</p>
                          </div>
                        )}
                        {vehicleData.chassis_number && (
                          <div>
                            <span className="text-sm font-medium text-gray-500">Chassis Number</span>
                            <p className="font-semibold text-gray-900">{vehicleData.chassis_number}</p>
                          </div>
                        )}
                        {vehicleData.manufacturer && (
                          <div>
                            <span className="text-sm font-medium text-gray-500">Manufacturer</span>
                            <p className="font-semibold text-gray-900">{vehicleData.manufacturer}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            )}

            {!hasSearched && !loading && !currentVehicleQuery && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <Search className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready for RTO Search</h2>
                <p className="text-gray-600">Enter a vehicle number above to get started with your RTO information lookup and find vehicle registration details.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;