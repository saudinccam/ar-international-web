import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check as BoxCheck, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';

const DataFlow: React.FC = () => {
  const dataflowService = services.find(service => service.id === 'dataflow');
  
  if (!dataflowService) {
    return <div>Service information not found</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>DataFlow Verification Services for Healthcare Professionals | AR International</title>
        <meta name="description" content="Professional DataFlow verification services for healthcare professionals seeking employment in GCC countries. Expert assistance for doctors, nurses, and healthcare workers." />
        <meta name="keywords" content="DataFlow Verification, DataFlow for Doctors, Healthcare Credentials Verification, Nurses DataFlow, DHA Verification, HAAD Verification" />
      </Helmet>
      
      <Hero
        title="DataFlow Services"
        subtitle="Professional verification of credentials for healthcare professionals seeking employment abroad"
        ctaText="Request DataFlow"
        backgroundImage="bg-[url('https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
      />
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Main Information */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">What is DataFlow Verification?</h2>
                <p className="text-gray-700 mb-4">
                  DataFlow verification is a comprehensive background screening and credential verification process required for healthcare professionals seeking employment in GCC (Gulf Cooperation Council) countries and certain other regions. This process verifies the authenticity of educational qualifications, professional licenses, work experience, and personal documents.
                </p>
                <p className="text-gray-700 mb-4">
                  The verification is conducted by the DataFlow Group, which is appointed by various health authorities such as the Dubai Health Authority (DHA), Health Authority Abu Dhabi (HAAD), Saudi Commission for Health Specialties (SCHS), Qatar Council for Healthcare Practitioners (QCHP), and others.
                </p>
                <p className="text-gray-700">
                  At AR International, we provide comprehensive assistance for the DataFlow verification process, helping healthcare professionals navigate this complex procedure with ease and ensuring the highest chances of successful verification.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Who Needs DataFlow Verification?</h2>
                <p className="text-gray-700 mb-4">
                  DataFlow verification is primarily required for healthcare professionals, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Doctors and Physicians</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Nurses and Midwives</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Dentists and Dental Hygienists</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Pharmacists</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Laboratory Technicians</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Radiographers and Imaging Technicians</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Physiotherapists</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Other Allied Health Professionals</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  This verification is mandatory for obtaining professional licenses to practice in GCC countries and some other regions.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Our DataFlow Verification Process</h2>
                <div className="space-y-4">
                  {dataflowService.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="bg-primary-50 text-primary-500 rounded-full h-8 w-8 flex items-center justify-center font-semibold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">{step.step}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dataflowService.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Health Authorities Requiring DataFlow</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Dubai Health Authority (DHA)</h3>
                    <p className="text-gray-700 text-sm">For healthcare professionals seeking to practice in Dubai.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Department of Health Abu Dhabi (DOH)</h3>
                    <p className="text-gray-700 text-sm">For healthcare professionals seeking to practice in Abu Dhabi.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Saudi Commission for Health Specialties (SCHS)</h3>
                    <p className="text-gray-700 text-sm">For healthcare professionals seeking to practice in Saudi Arabia.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Qatar Council for Healthcare Practitioners (QCHP)</h3>
                    <p className="text-gray-700 text-sm">For healthcare professionals seeking to practice in Qatar.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Ministry of Health Kuwait</h3>
                    <p className="text-gray-700 text-sm">For healthcare professionals seeking to practice in Kuwait.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">National Health Regulatory Authority Bahrain</h3>
                    <p className="text-gray-700 text-sm">For healthcare professionals seeking to practice in Bahrain.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Why Choose Our DataFlow Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dataflowService.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-secondary-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <BoxCheck size={24} className="text-secondary-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Facing Issues with DataFlow Verification?</h3>
                    <p className="text-gray-700 mb-4">
                      If you're facing issues with your DataFlow verification, such as discrepancies or delays, our experts can help resolve these issues and guide you through the remediation process.
                    </p>
                    <Link to="/contact">
                      <Button variant="primary">Get Expert Help</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar - Additional Information */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                      Profession
                    </label>
                    <select
                      id="profession"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select profession</option>
                      <option value="doctor">Doctor/Physician</option>
                      <option value="nurse">Nurse</option>
                      <option value="dentist">Dentist</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="lab">Lab Technician</option>
                      <option value="other">Other Healthcare Professional</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                      Destination Country
                    </label>
                    <select
                      id="destination"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select country</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="saudi">Saudi Arabia</option>
                      <option value="qatar">Qatar</option>
                      <option value="kuwait">Kuwait</option>
                      <option value="bahrain">Bahrain</option>
                      <option value="oman">Oman</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <Button type="submit" variant="primary" fullWidth>
                    Submit Inquiry
                  </Button>
                </form>
              </div>
              
              {/* Related Services */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/attestation" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Embassy Attestation
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/apostille" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Apostille Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/translation" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Translation Services
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Client Testimonial</h3>
                <div className="italic text-gray-700 mb-4">
                  "As a healthcare professional moving to Saudi Arabia, I needed both DataFlow verification and embassy attestation. AR International's expertise in handling these specialized processes saved me so much time and stress. Their service is worth every penny."
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">P</div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Priya Sharma</div>
                    <div className="text-sm text-gray-500">Nurse</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-secondary-600 text-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Need Urgent DataFlow Verification?</h3>
                <p className="mb-4">Contact us now for expedited processing and expert guidance.</p>
                <a href="tel:+919211461774" className="btn-primary bg-white text-secondary-600 hover:bg-gray-100 w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +91 919211461774
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-secondary-800 mb-2">Ready to Start Your DataFlow Verification?</h2>
              <p className="text-gray-700">Contact us today for a free consultation and guidance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
              <a href="https://wa.me/919211461774" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataFlow;