import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact AR International - Attestation & Visa Services</title>
        <meta name="description" content="Contact AR International for document attestation, apostille, visa stamping, and translation services. Offices across India with 25+ years of experience." />
        <meta name="keywords" content="Contact Attestation Service, Apostille Contact, Visa Stamping Contact, Document Translation Contact, AR International Contact" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-secondary-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 mb-8">
              Our team of experts is ready to assist you with your document attestation, apostille, visa, and translation needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl font-semibold text-secondary-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-50 text-primary-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700 mb-1">+91 9220161774</p>
                      <p className="text-gray-700">+91 9211461774</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-50 text-primary-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700 mb-1">contcat@thearinternationals.com</p>
                      <p className="text-gray-700">mshahid@thearinternationals.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-50 text-primary-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                      <p className="text-gray-700 mb-1">
                        1st & 2nd Floor 30, Kilokari, Ring Road 
                      </p>
                      <p className="text-gray-700">
                        New Delhi - 110014, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-50 text-primary-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700 mb-1">Monday to Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-50 text-primary-500 rounded-full p-3 mr-4 flex-shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-700 mb-1">+91 9220161774</p>
                      <p className="text-gray-700">
                        <a 
                          href="https://wa.me/919211461774?text=Hello%20AR%20International,%20I%20need%20information%20about%20your%20services." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-600 font-medium"
                        >
                          Click here to chat with us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Branch Offices</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">Mumbai: Keytech Park, 101 A-Wing, Opp. Oshiwara Furniture Market, Off SV Road, Jogeshwari, West Mumbai 400102.</li>
                    <li className="text-gray-700">Thrissur: Opposite Lamiya Silks, P.O. Nattika, Thriprayar Thrissur Dist., Pin – 680566 Kerala , India.</li>
                    <li className="text-gray-700">Bhopal: 21, sbi colony, ZONE -II MP NAGAR, BHOPAL, Bhopal, Madhya Pradesh, 462011</li>
                    <li className="text-gray-700">Surat: Shreeji Arcade, Anand Mahal Rd, above reliance digital, Opp. Mahan Terrace, Adajan Gam, Adajan, Surat, Gujarat</li>
                    <li className="text-gray-700">Aligarh: Regency Plaza, Medical Road, Opps. PNM Medical College Branch, Dodhpur, Aligarh, UP</li>
                  </ul>
                  <p className="mt-3">
                    <Link to="/about" className="text-primary-500 hover:text-primary-600 font-medium">
                      View all locations
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-6">Send Us a Message</h2>
              <ContactForm />
              
              {/* Map */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-secondary-800 mb-6">Our Location</h2>
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <p className="text-center text-gray-600">
                    Google Map would be embedded here<br />
                    <span className="text-sm">Showing AR International's office location in New Delhi</span>
                  </p>
                </div>
                <p className="mt-4 text-gray-700">
                  We are conveniently located in the heart of New Delhi, just a short walk from Connaught Place and easily accessible by public transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-secondary-800 text-center mb-8">
              Frequently Asked Questions About Contacting Us
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-2">
                  What information should I provide when contacting you?
                </h3>
                <p className="text-gray-700">
                  When contacting us, it's helpful to provide details about the type of service you need (apostille, attestation, visa, translation), the destination country, the type of documents involved, and your timeline. This helps us provide you with the most accurate information and assistance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-2">
                  How quickly will you respond to my inquiry?
                </h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 2-4 business hours during our regular business hours (Monday to Friday, 9:00 AM - 6:00 PM; Saturday, 9:00 AM - 2:00 PM). For urgent matters, we recommend calling our customer service line directly.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-2">
                  Can I visit your office without an appointment?
                </h3>
                <p className="text-gray-700">
                  Yes, you can visit our office during regular business hours without an appointment. However, for personalized service and to ensure the relevant expert is available, we recommend scheduling an appointment in advance, especially for complex requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-2">
                  Do you provide services outside of India?
                </h3>
                <p className="text-gray-700">
                  While our offices are located within India, we serve clients from around the world who need Indian document attestation, apostille, or other services. We can provide guidance and services remotely for international clients, and we have partners in several countries for certain international requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-8">
              Contact us today for a free consultation about your document attestation, apostille, visa, or translation requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+919211461774" 
                className="btn-primary"
              >
                <Phone size={18} className="mr-2" />
                Call Now: +91 9220161774
              </a>
              <a 
                href="https://wa.me/919211461774" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;