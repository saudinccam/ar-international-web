import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';
import Button from '../components/ui/Button';
import { faqs } from '../data/faqs';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('General');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqs.map(category => ({
        category: category.category,
        items: category.items.filter(
          item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(category => category.items.length > 0)
    : faqs;
  
  // Get active category FAQs
  const activeCategoryFAQs = searchQuery
    ? filteredFAQs.find(category => category.category === activeCategory)?.items || []
    : faqs.find(category => category.category === activeCategory)?.items || [];
  
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - AR International</title>
        <meta name="description" content="Find answers to common questions about apostille, attestation, visa stamping, translation, and DataFlow services. Complete guide to document legalization." />
        <meta name="keywords" content="Document Attestation FAQ, Apostille FAQ, Visa Stamping Questions, Translation Services FAQ, DataFlow Verification" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-secondary-800 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Find answers to common questions about our document attestation, apostille, visa, and translation services.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-white w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-secondary-800 mb-4">Categories</h3>
                <nav className="space-y-1">
                  {faqs.map((category) => (
                    <button
                      key={category.category}
                      onClick={() => setActiveCategory(category.category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.category
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* FAQ Accordion */}
            <div className="lg:col-span-3">
              {searchQuery && filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any FAQs matching your search for "{searchQuery}".
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : searchQuery ? (
                <>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
                    Search Results for "{searchQuery}"
                  </h2>
                  {filteredFAQs.map((category) => (
                    <div key={category.category} className="mb-8">
                      <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                        {category.category}
                      </h3>
                      <FAQAccordion faqs={category.items} />
                    </div>
                  ))}
                  <div className="mt-6">
                    <Button 
                      variant="outline"
                      onClick={() => setSearchQuery('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
                    {activeCategory}
                  </h2>
                  <FAQAccordion faqs={activeCategoryFAQs} />
                </>
              )}
              
              {/* Still Have Questions */}
              <div className="mt-12 bg-primary-50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                      Still Have Questions?
                    </h3>
                    <p className="text-gray-700">
                      If you couldn't find the answer to your question, please feel free to contact our support team.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                      <Button variant="primary">
                        Contact Us
                      </Button>
                    </Link>
                    <a href="https://wa.me/919211461774" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        WhatsApp Us
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Common Related Questions */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-secondary-800 text-center mb-8">
              Common Related Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-3">
                  What is the difference between Apostille and Embassy Attestation?
                </h3>
                <p className="text-gray-700 mb-4">
                  Apostille is a single-step authentication valid in 118 countries that are members of the Hague Convention. Embassy Attestation is required for countries that are not part of this convention and involves multiple steps including authentication by the embassy of the destination country.
                </p>
                <Link 
                  to="/services/apostille" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Learn more about Apostille
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-3">
                  How long does the attestation process take?
                </h3>
                <p className="text-gray-700 mb-4">
                  The standard processing time for attestation is approximately 15-20 working days, depending on the destination country and the type of document. For Apostille, it typically takes 10-15 working days. Express services are available for urgent requirements at an additional cost.
                </p>
                <Link 
                  to="/services/attestation" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Learn more about Attestation
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-3">
                  Do you handle DataFlow verification for healthcare professionals?
                </h3>
                <p className="text-gray-700 mb-4">
                  Yes, we provide comprehensive DataFlow verification services for healthcare professionals seeking employment in GCC countries. Our service includes document preparation, application submission, verification tracking, and report delivery.
                </p>
                <Link 
                  to="/services/dataflow" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Learn more about DataFlow
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-secondary-800 mb-3">
                  Can you help with visa applications for multiple countries?
                </h3>
                <p className="text-gray-700 mb-4">
                  Yes, we provide visa application and stamping services for numerous countries including UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Schengen countries, USA, UK, Canada, Australia, and many others.
                </p>
                <Link 
                  to="/services/visa-stamping" 
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Learn more about Visa Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;