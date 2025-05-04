import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';

const VisaStamping: React.FC = () => {
  const visaService = services.find(service => service.id === 'visa-stamping');
  
  if (!visaService) {
    return <div>Service information not found</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>Visa Stamping & Application Services in India | AR International</title>
        <meta name="description" content="Expert visa application and stamping services for UAE, Saudi Arabia, UK, Europe, and more. 25+ years experience with high success rate. Fast & reliable service." />
        <meta name="keywords" content="Visa Stamping India, Visa Application Service, UAE Visa, Saudi Visa, Work Visa India, Business Visa Service" />
      </Helmet>
      
      <Hero
        title="Visa Stamping Services"
        subtitle="Comprehensive assistance for visa applications and stamping for multiple countries"
        ctaText="Apply for Visa"
        backgroundImage="bg-[url('https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"
      />
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Main Information */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Our Visa Services</h2>
                <p className="text-gray-700 mb-4">
                  AR International provides end-to-end visa application and stamping services for multiple countries. With over 25 years of experience, we've assisted thousands of individuals and businesses with their visa requirements, ensuring a smooth and hassle-free process.
                </p>
                <p className="text-gray-700 mb-4">
                  Our visa services include detailed consultation, document preparation, application submission, follow-up with embassies/consulates, and visa collection. We handle various visa types including tourist, business, employment, family, and student visas.
                </p>
                <p className="text-gray-700">
                  Our team of visa experts stays updated with the latest visa requirements and procedures for different countries, ensuring that your application has the highest chance of approval.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Types of Visas We Handle</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Tourist Visa</h3>
                    <p className="text-gray-700 text-sm">For temporary visits for tourism, leisure, or visiting friends and family.</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Visa</h3>
                    <p className="text-gray-700 text-sm">For business meetings, conferences, or exploring business opportunities.</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Work Visa</h3>
                    <p className="text-gray-700 text-sm">For employment opportunities in foreign countries.</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Student Visa</h3>
                    <p className="text-gray-700 text-sm">For pursuing education in international institutions.</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Family Visa</h3>
                    <p className="text-gray-700 text-sm">For joining family members who are living abroad.</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Transit Visa</h3>
                    <p className="text-gray-700 text-sm">For passing through a country en route to another destination.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Our Visa Application Process</h2>
                <div className="space-y-4">
                  {visaService.process.map((step, index) => (
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
                  {visaService.documents.map((document, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-accent-500 flex-shrink-0 mt-1 mr-2" />
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Note: Document requirements may vary based on the destination country and visa type. Our team will provide you with a detailed checklist after initial consultation.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Countries We Serve</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">UAE</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Saudi Arabia</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Qatar</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Kuwait</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Oman</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Bahrain</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">UK</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Schengen</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">USA</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Canada</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Australia</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-gray-700">Singapore</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-secondary-800 mb-4">Why Choose Our Visa Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visaService.benefits.map((benefit, index) => (
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
                  <Globe size={24} className="text-secondary-500 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Need Multiple Visas?</h3>
                    <p className="text-gray-700 mb-4">
                      We offer special packages for families and groups applying for visas together. Contact us for customized solutions for your specific requirements.
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
                <h3 className="font-semibold text-lg mb-4">Quick Visa Inquiry</h3>
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
                      <option value="uk">United Kingdom</option>
                      <option value="schengen">Schengen Countries</option>
                      <option value="usa">United States</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="visa-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Visa Type
                    </label>
                    <select
                      id="visa-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select visa type</option>
                      <option value="tourist">Tourist Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="student">Student Visa</option>
                      <option value="family">Family Visa</option>
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
                  "I applied for a business visa to the UAE through AR International, and the entire process was seamless. Their team was highly professional and kept me updated at every stage. My visa was approved without any issues. Highly recommended!"
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">V</div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Vikram Singh</div>
                    <div className="text-sm text-gray-500">HR Manager</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-secondary-600 text-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Need Urgent Visa Processing?</h3>
                <p className="mb-4">We offer express visa services for time-sensitive travel plans.</p>
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
              <h2 className="text-secondary-800 mb-2">Ready to Apply for Your Visa?</h2>
              <p className="text-gray-700">Contact us today for a free consultation and guidance.</p>
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

export default VisaStamping;