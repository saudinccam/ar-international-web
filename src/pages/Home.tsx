import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Hero from '../components/ui/Hero';
import TrustBadges from '../components/ui/TrustBadges';
import ServiceCard from '../components/ui/ServiceCard';
import GoogleReviews from '../components/ui/GoogleReviews';
import { services } from '../data/services';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AR International - Apostille, Attestation & Visa Services in India</title>
        <meta name="description" content="AR International offers MEA-authorized Apostille, Embassy Attestation, HRD Attestation, Visa Stamping, and Translation services across India. 25+ years of excellence." />
        <meta name="keywords" content="Apostille in India, UAE Embassy Attestation, HRD Attestation, Visa Stamping India, Certified Translation Services" />
      </Helmet>
      
      <Hero
        title="Document Attestation & Visa Services"
        subtitle="25+ years of excellence in Apostille, Embassy Attestation, and Visa Solutions across India"
        ctaText="Get in Touch"
        secondaryCtaText="Explore Services"
      />
      
      {/* Trust Badges Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <TrustBadges />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Apostille and Embassy Attestation to Visa Processing and Certified Translations,
              we provide comprehensive documentation services for individuals and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                url={service.url}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>
      
      {/* Client Reviews Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust AR International for their document attestation, apostille, and visa needs.
            </p>
          </div>
          
          <GoogleReviews />
          
          <div className="text-center mt-8">
            <a 
              href="https://g.co/kgs/nLAFWqU"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>
      
      {/* About Us Preview */}
      <section className="section bg-secondary-50 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-secondary-800 mb-4">25+ Years of Trust & Excellence</h2>
              <p className="text-gray-700 mb-6">
                AR International is an MEA-authorized company with over 25 years of experience 
                in document attestation, apostille, and visa services. We have served thousands 
                of individuals and businesses across India with our reliable and efficient services.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experts ensures that your documents are processed correctly and 
                efficiently, meeting all the requirements of the destination country or organization.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-500 mb-1">10,000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-500 mb-1">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-500 mb-1">100+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
              >
                Learn more about our company <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AR International Team" 
                className="rounded-lg shadow-lg object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 rounded-lg shadow-xl p-6 text-white max-w-xs">
                <h3 className="text-xl font-semibold mb-2">MEA Authorized</h3>
                <p>
                  We are officially recognized by the Ministry of External Affairs, Government of India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-india-pattern bg-cover bg-center py-16 relative">
        <div className="absolute inset-0 bg-secondary-800 bg-opacity-90"></div>
        <div className="container relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-200 text-lg mb-8">
              Contact us today for a consultation about your document attestation, 
              apostille, visa, or translation requirements. Our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                <MessageCircle size={18} className="mr-2" />
                Contact Us
              </Link>
              <a 
                href="https://wa.me/+919211461774" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-white border-white hover:bg-white hover:bg-opacity-10 w-full sm:w-auto"
              >
                <Phone size={18} className="mr-2" />
                WhatsApp: +91 92114 61774
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;