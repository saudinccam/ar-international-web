import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About AR International - 25+ Years of Excellence in Attestation Services</title>
        <meta name="description" content="AR International has 25+ years of experience in document attestation, apostille, and visa services. MEA-authorized company with offices across India." />
        <meta name="keywords" content="AR International, Document Attestation Company, MEA Authorized, Embassy Attestation Services, Visa Service Provider India" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-secondary-800 overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">About AR International</h1>
            <p className="text-xl text-gray-200 mb-8">
              25+ years of excellence in document attestation, apostille, and visa services
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-secondary-800 mb-6">Our Journey</h2>
              <p className="text-gray-700 mb-4">
                Established in 1995, AR International has grown to become one of India's most trusted names in document attestation, apostille, and visa services. Our journey began with a simple mission: to simplify the complex process of document legalization for individuals and businesses.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past 25+ years, we have assisted thousands of clients with their documentation needs, helping them achieve their dreams of studying abroad, securing international employment, expanding businesses globally, and settling in foreign countries.
              </p>
              <p className="text-gray-700 mb-4">
                Today, AR International stands as an MEA-authorized company with offices across major Indian cities, serving clients from all corners of the country with the same dedication and commitment to excellence that has defined our journey from the beginning.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Recognition & Authorizations</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">
                      <span className="font-medium">Ministry of External Affairs (MEA)</span> authorized service provider
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">
                      <span className="font-medium">Embassy Recognized</span> for attestation services
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">
                      <span className="font-medium">ISO 9001:2015</span> certified for quality management
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">
                      <span className="font-medium">Registered with Government of India</span> (Reg. No. AR-12345-1995)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AR International Team" 
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-xs">
                <div className="text-4xl font-bold text-primary-500 mb-2">25+</div>
                <p className="text-gray-800 font-semibold">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-secondary-800 mb-4">Our Vision & Mission</h2>
            <p className="text-lg text-gray-700">
              Guided by our core values, we strive to deliver excellence in every service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the most trusted and reliable name in document attestation and visa services across India, recognized for our integrity, efficiency, and customer-centric approach.
              </p>
              <p className="text-gray-700">
                We envision a future where documentation processes for international requirements are simplified and accessible to all, enabling seamless global mobility for education, career, and business.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To deliver hassle-free, timely, and reliable document attestation, apostille, and visa services that meet the highest standards of quality and compliance.
              </p>
              <p className="text-gray-700">
                We are committed to continuous improvement, leveraging our expertise and experience to navigate complex documentation requirements and provide solutions that empower our clients to achieve their international aspirations.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-secondary-800 text-center mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                <p className="text-gray-700">
                  We uphold the highest standards of honesty and ethics in all our dealings with clients and partners.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Efficiency</h4>
                <p className="text-gray-700">
                  We value time and ensure prompt, streamlined services that save our clients' valuable time and resources.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                <p className="text-gray-700">
                  We believe in clear communication and keep our clients informed at every step of the process.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                <p className="text-gray-700">
                  We leverage our deep knowledge and experience to navigate complex processes and deliver reliable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to providing you with the highest level of service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Raj Kumar - CEO" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-1">Raj Kumar</h3>
              <p className="text-primary-500 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-700">
                With over 30 years of experience in the documentation industry, Raj Kumar founded AR International in 1995 with a vision to simplify international documentation processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3760610/pexels-photo-3760610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Priya Sharma - Operations Director" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-1">Priya Sharma</h3>
              <p className="text-primary-500 font-medium mb-3">Operations Director</p>
              <p className="text-gray-700">
                Priya oversees all operational aspects of AR International, ensuring efficient service delivery and maintaining our high standards of quality across all branches.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Ahmed Khan - Legal Head" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-1">Ahmed Khan</h3>
              <p className="text-primary-500 font-medium mb-3">Legal Head</p>
              <p className="text-gray-700">
                Ahmed brings his extensive legal expertise to ensure all our services comply with international laws and regulations, providing our clients with legally sound solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-800 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With offices across major Indian cities, we're ready to serve you no matter where you are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="New Delhi Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">New Delhi (Head Office)</h3>
                <p className="text-gray-700 mb-4">
                  123 Business District, Connaught Place, New Delhi - 110001
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 11 4567 8901
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    delhi@arinternational.in
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/11598058/pexels-photo-11598058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Mumbai Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Mumbai</h3>
                <p className="text-gray-700 mb-4">
                  456 Business Hub, Andheri East, Mumbai - 400069
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 22 4567 8901
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mumbai@arinternational.in
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/16047576/pexels-photo-16047576/free-photo-of-view-of-the-lotus-temple-in-delhi-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Bangalore Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Bangalore</h3>
                <p className="text-gray-700 mb-4">
                  789 Tech Park, Whitefield, Bangalore - 560066
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 80 4567 8901
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    bangalore@arinternational.in
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/15351770/pexels-photo-15351770/free-photo-of-famous-vidhan-soudha-building-in-bangalore-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Chennai Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Chennai</h3>
                <p className="text-gray-700 mb-4">
                  101 Business Tower, Anna Salai, Chennai - 600002
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 44 4567 8901
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    chennai@arinternational.in
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/13060599/pexels-photo-13060599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Hyderabad Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Hyderabad</h3>
                <p className="text-gray-700 mb-4">
                  234 Corporate Center, Banjara Hills, Hyderabad - 500034
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 40 4567 8901
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hyderabad@arinternational.in
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9334976/pexels-photo-9334976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Kochi Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Kochi</h3>
                <p className="text-gray-700 mb-4">
                  567 Marine Drive, Ernakulam, Kochi - 682031
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 484 4567 8901
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    kochi@arinternational.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-india-pattern bg-cover bg-center py-16 relative">
        <div className="absolute inset-0 bg-secondary-800 bg-opacity-90"></div>
        <div className="container relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Ready to Work with Us?</h2>
            <p className="text-gray-200 text-lg mb-8">
              Contact us today to discuss your document attestation, apostille, or visa requirements.
              Our expert team is ready to assist you with personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services/apostille">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:bg-opacity-10"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;