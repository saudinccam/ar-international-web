import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={24}
          className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };
  
  // Calculate average rating
  const averageRating = 
    testimonials.reduce((total, testimonial) => total + testimonial.rating, 0) / 
    testimonials.length;
  
  return (
    <>
      <Helmet>
        <title>Client Testimonials - AR International</title>
        <meta name="description" content="Read what our clients say about AR International's attestation, apostille, and visa services. 25+ years of excellence and thousands of satisfied clients." />
        <meta name="keywords" content="AR International Reviews, Document Attestation Reviews, Apostille Service Reviews, Visa Service Testimonials" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-secondary-800 mb-6">What Our Clients Say</h1>
            <p className="text-xl text-gray-700 mb-8">
              Thousands of satisfied clients have trusted us with their document attestation, apostille, and visa needs over the past 25+ years.
            </p>
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1 mr-3">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-2xl font-bold text-gray-800">{averageRating.toFixed(1)}/5</span>
            </div>
            <p className="text-gray-600">
              Based on {testimonials.length}+ verified reviews
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                content={testimonial.content}
                rating={testimonial.rating}
                avatarUrl={testimonial.avatarUrl}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-800 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear directly from our clients about their experience with AR International.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-gray-600 mb-2">Video testimonial placeholder</p>
                  <p className="text-sm text-gray-500">Actual video content would be embedded here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Rajesh Kumar</h3>
                <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
                <p className="text-gray-700">
                  "AR International made my UAE work visa process completely hassle-free. Their team handled all the document attestation perfectly."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-gray-600 mb-2">Video testimonial placeholder</p>
                  <p className="text-sm text-gray-500">Actual video content would be embedded here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Priya Sharma</h3>
                <p className="text-gray-600 text-sm mb-2">Nurse</p>
                <p className="text-gray-700">
                  "Their expertise in DataFlow verification and embassy attestation saved me so much time and stress."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-gray-600 mb-2">Video testimonial placeholder</p>
                  <p className="text-sm text-gray-500">Actual video content would be embedded here</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Vikram Singh</h3>
                <p className="text-gray-600 text-sm mb-2">HR Manager</p>
                <p className="text-gray-700">
                  "We rely on AR International for all our visa and attestation requirements. Their professional approach is invaluable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Success Stories */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-800 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how we've helped our clients overcome documentation challenges and achieve their international goals.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Success Story - Medical Professional" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Helping 50+ Medical Professionals Secure Positions in the UAE
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When a leading healthcare recruitment company needed to process documentation for over 50 medical professionals within a tight deadline, they turned to AR International for help.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We set up a dedicated team to handle their DataFlow verification, educational certificate attestation, and visa processing needs. Through our streamlined process and direct channels with various authorities, we were able to complete all verifications and attestations within just 21 days.
                  </p>
                  <p className="text-gray-700">
                    All 50+ medical professionals successfully secured their positions and were able to join the healthcare facility in the UAE on schedule, without any documentation delays.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Success Story - International Student" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Urgent Apostille for an International Scholarship Recipient
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When Priya received a prestigious scholarship to study in Germany, she had just 10 days to submit all her apostilled educational documents. Regular processing would have taken 15-20 days.
                  </p>
                  <p className="text-gray-700 mb-4">
                    AR International activated our urgent processing channels and worked directly with MEA officials to expedite her apostille. We completed the entire process in just 7 days, including state attestation and MEA apostille.
                  </p>
                  <p className="text-gray-700">
                    Priya was able to submit her documents on time and secure her scholarship. She is now pursuing her Master's degree in Computer Science in Germany.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Success Story - Corporate Client" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Comprehensive Documentation for Corporate Expansion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A growing IT company was expanding its operations to multiple GCC countries and needed various corporate documents attested for each country, including Saudi Arabia, UAE, and Qatar.
                  </p>
                  <p className="text-gray-700 mb-4">
                    AR International created a dedicated corporate documentation team that handled the complete process, from company incorporation certificates to board resolutions and power of attorney documents. We managed the entire workflow, including notarization, state attestation, MEA authentication, and embassy attestations for all three countries.
                  </p>
                  <p className="text-gray-700">
                    The company successfully established its presence in all target countries within their planned timeline, and continues to use our services for their ongoing documentation needs.
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
            <h2 className="text-white mb-6">Join Our Satisfied Clients</h2>
            <p className="text-gray-200 text-lg mb-8">
              Experience the AR International difference with our personalized service and expertise. Contact us today to discuss your document attestation, apostille, or visa requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
              <a href="https://wa.me/919211461774" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:bg-opacity-10"
                >
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

export default Testimonials;