import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';

const Attestation: React.FC = () => {
  const attestationService = services.find(service => service.id === 'attestation');
  
  if (!attestationService) {
    return <div>Service information not found</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>Embassy Attestation Services in India | AR International</title>
        <meta name="description" content="Professional Embassy Attestation services for all documents in India. MEA & HRD Attestation for UAE, Saudi Arabia, Qatar, Kuwait and other countries." />
        <meta name="keywords" content="Embassy Attestation, UAE Embassy Attestation, MEA Attestation, HRD Attestation, Document Attestation Service, Attestation in India" />
      </Helmet>
      
      <Hero
        title="Embassy Attestation Services"
        subtitle="Official verification of documents by embassies and consulates for international recognition"
        ctaText="Request Attestation"
        backgroundImage="bg-[url('https://images.pexels.com/photos/2889491/pexels-photo-2889491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
      />
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Main Information */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">What is Embassy Attestation?</h2>
                <p className="text-gray-700 mb-4">
                  Embassy Attestation is the process of verifying and legalizing documents by the embassy or consulate of the country where the documents will be used. This attestation is essential for documents to be legally recognized in countries that are not part of the Hague Apostille Convention.
                </p>
                <p className="text-gray-700 mb-4">
                  The attestation process generally involves multiple steps, including notary, state government, MEA (Ministry of External Affairs), and finally, the embassy or consulate of the destination country.
                </p>
                <p className="text-gray-700">
                  At AR International, we provide comprehensive embassy attestation services for all types of documents, ensuring they meet the specific requirements of each destination country.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Our Attestation Process</h2>
                <div className="space-y-4">
                  {attestationService.process.map((step, index) => (
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
                <h2 className="text-secondary-800 mb-4">Documents We Attest</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {attestationService.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Countries We Serve</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">United Arab Emirates (UAE)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Saudi Arabia</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Qatar</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Kuwait</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Oman</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Bahrain</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">China</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Malaysia</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">And many more...</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Why Choose Our Attestation Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attestationService.benefits.map((benefit, index) => (
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
                  <BookOpen size={24} className="text-secondary-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">HRD Attestation</h3>
                    <p className="text-gray-700 mb-4">
                      HRD (Human Resource Development) Attestation is a crucial step for educational documents before MEA and embassy attestation. Our services include comprehensive handling of HRD attestation for all states in India.
                    </p>
                    <Link to="/contact">
                      <Button variant="primary">Get More Information</Button>
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
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Destination Country
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select country</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="saudi">Saudi Arabia</option>
                      <option value="qatar">Qatar</option>
                      <option value="kuwait">Kuwait</option>
                      <option value="oman">Oman</option>
                      <option value="bahrain">Bahrain</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="documents" className="block text-sm font-medium text-gray-700 mb-1">
                      Document Type
                    </label>
                    <select
                      id="documents"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select document type</option>
                      <option value="educational">Educational Documents</option>
                      <option value="personal">Personal Documents</option>
                      <option value="commercial">Commercial Documents</option>
                      <option value="other">Other Documents</option>
                    </select>
                  </div>
                  <Button type="submit" variant="primary" fullWidth>
                    Send Inquiry
                  </Button>
                </form>
              </div>
              
              {/* Related Services */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/services/apostille" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Apostille Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/visa-stamping" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Visa Stamping
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
                  "AR International made my UAE embassy attestation process incredibly smooth. Their team guided me through every step and completed the process much faster than I expected. Excellent service!"
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">A</div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Ahmed Khan</div>
                    <div className="text-sm text-gray-500">Business Owner</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-secondary-600 text-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Need Urgent Attestation?</h3>
                <p className="mb-4">We offer express services for time-sensitive requirements.</p>
                <a href="tel:+919211461774" className="btn-primary bg-white text-secondary-600 hover:bg-gray-100 w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +919211461774
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
              <h2 className="text-secondary-800 mb-2">Ready to Get Your Documents Attested?</h2>
              <p className="text-gray-700">Contact us today for a free consultation and quote.</p>
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

export default Attestation;