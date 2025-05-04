import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';

const Apostille: React.FC = () => {
  const apostilleService = services.find(service => service.id === 'apostille');
  
  if (!apostilleService) {
    return <div>Service information not found</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>Apostille Services in India | AR International</title>
        <meta name="description" content="Professional Apostille services for all documents in India. MEA-authorized Apostille certification for 118 Hague Convention countries. Fast & reliable service." />
        <meta name="keywords" content="Apostille in India, Apostille services, MEA Apostille, Hague Convention, Document Apostille, Educational Certificate Apostille" />
      </Helmet>
      
      <Hero
        title="Apostille Services in India"
        subtitle="Get your documents legally valid for use in 118 countries worldwide"
        ctaText="Request Apostille"
        backgroundImage="bg-[url('https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
      />
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Main Information */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">What is Apostille?</h2>
                <p className="text-gray-700 mb-4">
                  An Apostille is a certificate that authenticates the origin of a public document. It is issued by a designated authority in the country where the document originated. For documents issued in India, the Ministry of External Affairs (MEA) is the designated authority for issuing Apostilles.
                </p>
                <p className="text-gray-700 mb-4">
                  The Apostille certificate is recognized by all countries that are members of the Hague Apostille Convention, which includes 118 countries worldwide. It eliminates the need for further embassy attestation or legalization in these countries.
                </p>
                <p className="text-gray-700">
                  At AR International, we provide comprehensive Apostille services for all types of documents issued in India, ensuring they meet international standards for legal recognition.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Our Apostille Process</h2>
                <div className="space-y-4">
                  {apostilleService.process.map((step, index) => (
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
                <h2 className="text-secondary-800 mb-4">Documents We Apostille</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {apostilleService.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Why Choose Our Apostille Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {apostilleService.benefits.map((benefit, index) => (
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
                  <FileText size={24} className="text-secondary-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Need Apostille for Multiple Documents?</h3>
                    <p className="text-gray-700 mb-4">
                      We offer special packages for multiple documents, making the process more cost-effective. Contact us for customized solutions for your specific requirements.
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
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
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
                  "AR International handled my educational documents apostille perfectly. Their process was smooth and I received my documents on time for my study abroad application. Highly recommended!"
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">S</div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Sneha Patel</div>
                    <div className="text-sm text-gray-500">Student</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-secondary-600 text-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Need Urgent Apostille?</h3>
                <p className="mb-4">We offer express services for time-sensitive requirements.</p>
                <a href="tel:+919876543210" className="btn-primary bg-white text-secondary-600 hover:bg-gray-100 w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +91 98765 43210
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
              <h2 className="text-secondary-800 mb-2">Ready to Get Your Documents Apostilled?</h2>
              <p className="text-gray-700">Contact us today for a free consultation and quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
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

export default Apostille;