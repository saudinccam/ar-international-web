import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PenTool, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';

const Translation: React.FC = () => {
  const translationService = services.find(service => service.id === 'translation');
  
  if (!translationService) {
    return <div>Service information not found</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>Certified Translation Services in India | AR International</title>
        <meta name="description" content="Professional certified translation services in over 100 languages. MEA-authorized translations for legal, educational, and business documents." />
        <meta name="keywords" content="Certified Translation Services India, Legal Document Translation, MEA Certified Translation, Multi-language Translation Services" />
      </Helmet>
      
      <Hero
        title="Translation Services"
        subtitle="Professional translation of documents in over 100 languages with certification"
        ctaText="Request Translation"
        backgroundImage="bg-[url('https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
      />
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Main Information */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Our Translation Services</h2>
                <p className="text-gray-700 mb-4">
                  AR International provides professional, accurate translations of various documents in over 100 languages. With over 25 years of experience, we specialize in certified translations that are acceptable to government agencies, immigration departments, embassies, and academic institutions worldwide.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team of skilled linguists includes native speakers who understand the cultural nuances of their respective languages, ensuring that your documents are translated accurately while maintaining their original meaning and context.
                </p>
                <p className="text-gray-700">
                  We provide certified translations with official stamps and notarization when required, making them valid for all official purposes.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Translation Process</h2>
                <div className="space-y-4">
                  {translationService.process.map((step, index) => (
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
                <h2 className="text-secondary-800 mb-4">Documents We Translate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {translationService.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Languages We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Arabic</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">French</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">German</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Spanish</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Chinese</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Japanese</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Russian</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Portuguese</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Italian</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Dutch</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">Korean</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded">
                    <Globe size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">And 90+ more</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Why Choose Our Translation Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {translationService.benefits.map((benefit, index) => (
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
                  <PenTool size={24} className="text-secondary-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Need Specialized Technical Translation?</h3>
                    <p className="text-gray-700 mb-4">
                      We offer specialized translation services for technical, legal, medical, and financial documents with industry-specific expertise. Our specialized translators ensure accurate translation of complex terminology.
                    </p>
                    <Link to="/contact">
                      <Button variant="primary">Get a Quote</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar - Additional Information */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Quick Translation Inquiry</h3>
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
                    <label htmlFor="source-language" className="block text-sm font-medium text-gray-700 mb-1">
                      Source Language
                    </label>
                    <select
                      id="source-language"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select language</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="arabic">Arabic</option>
                      <option value="french">French</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="target-language" className="block text-sm font-medium text-gray-700 mb-1">
                      Target Language
                    </label>
                    <select
                      id="target-language"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select language</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="arabic">Arabic</option>
                      <option value="french">French</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="document-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Document Type
                    </label>
                    <select
                      id="document-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select document type</option>
                      <option value="educational">Educational</option>
                      <option value="legal">Legal</option>
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                      <option value="technical">Technical</option>
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
                    <Link to="/services/apostille" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Apostille Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/attestation" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Embassy Attestation
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/visa-stamping" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                      <ArrowRight size={16} className="mr-2" />
                      Visa Stamping
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Client Testimonial</h3>
                <div className="italic text-gray-700 mb-4">
                  "AR International provided excellent translation services for my technical documents. The quality of translation was outstanding, with perfect attention to technical terminology. They also completed the work ahead of schedule!"
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">S</div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Suresh Menon</div>
                    <div className="text-sm text-gray-500">Civil Engineer</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-secondary-600 text-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Need Urgent Translation?</h3>
                <p className="mb-4">We offer express translation services for time-sensitive documents.</p>
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
              <h2 className="text-secondary-800 mb-2">Ready to Get Your Documents Translated?</h2>
              <p className="text-gray-700">Contact us today for a free quote and consultation.</p>
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

export default Translation;