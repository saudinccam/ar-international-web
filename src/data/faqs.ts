export interface FAQ {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const faqs: FAQ[] = [
  {
    category: 'General',
    items: [
      {
        question: 'What is AR International and how long have you been in business?',
        answer: 'AR International is a MEA-authorized company specializing in document attestation, apostille, visa services, and translation. We have been serving individuals and businesses across India for over 25 years since our establishment in 1995. Our extensive experience makes us one of the most trusted names in the industry.'
      },
      {
        question: 'Which services does AR International offer?',
        answer: 'We offer a comprehensive range of services including Apostille, Embassy Attestation, HRD Attestation, Visa Stamping services for multiple countries, Certified Translation Services in over 100 languages, and DataFlow verification for healthcare professionals seeking employment abroad.'
      },
      {
        question: 'How can I contact AR International for queries?',
        answer: 'You can contact us through various channels: call us at +91 98765 43210, email us at info@arinternational.in, use the contact form on our website, or connect with us via WhatsApp. Our office is open Monday through Saturday from 9 AM to 6 PM.'
      },
      {
        question: 'Do you have offices in multiple cities across India?',
        answer: 'Yes, we have offices in major Indian cities including Delhi, Mumbai, Chennai, Bangalore, Hyderabad, and Kochi. Additionally, we provide services to clients from all over India through our efficient courier and online systems.'
      },
      {
        question: 'What makes AR International different from other service providers?',
        answer: 'AR International stands out due to our 25+ years of experience, MEA authorization, embassy approvals, specialized expertise in all types of attestation, a team of seasoned professionals, competitive pricing, and excellent customer service with regular updates throughout the process.'
      }
    ]
  },
  {
    category: 'Apostille',
    items: [
      {
        question: 'What is an Apostille and when do I need it?',
        answer: 'An Apostille is a certification that authenticates the origin of a public document. You need an Apostille when you want to use a document issued in India in any of the 118 countries that are members of the Hague Apostille Convention. It eliminates the need for embassy attestation in these countries.'
      },
      {
        question: 'Which documents can be apostilled?',
        answer: 'Documents that can be apostilled include educational certificates (degrees, diplomas, mark sheets), personal documents (birth certificates, marriage certificates), commercial documents (certificates of incorporation, power of attorney), and various other official documents issued in India.'
      },
      {
        question: 'How long does the apostille process take?',
        answer: 'The standard processing time for apostille in India is typically 10-15 working days. However, we also offer express services that can complete the process in 5-7 working days for urgent requirements, subject to additional charges.'
      },
      {
        question: 'Do I need to submit original documents for apostille?',
        answer: 'Yes, in most cases, original documents are required for the apostille process. However, for some document types, notarized copies may be accepted. Our team will advise you on the specific requirements for your documents during the initial consultation.'
      },
      {
        question: 'Can AR International handle apostille for documents from any state in India?',
        answer: 'Yes, we can handle apostille for documents issued by any state in India. We have established channels and processes to manage the authentication of documents from all Indian states before they proceed to the MEA for apostille.'
      }
    ]
  },
  {
    category: 'Attestation',
    items: [
      {
        question: 'What is the difference between Apostille and Embassy Attestation?',
        answer: 'Apostille is a single-step authentication valid in 118 countries that are members of the Hague Convention. Embassy Attestation is required for countries that are not part of this convention and involves multiple steps including authentication by the embassy of the destination country.'
      },
      {
        question: 'Which countries require Embassy Attestation instead of Apostille?',
        answer: 'Countries that require Embassy Attestation include UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, China, Malaysia, Egypt, Jordan, and various other nations that are not signatories to the Hague Apostille Convention.'
      },
      {
        question: 'What are the steps involved in the Embassy Attestation process?',
        answer: 'The Embassy Attestation process typically involves: 1) Notary attestation, 2) State government authentication, 3) Authentication by the Ministry of External Affairs (MEA), and 4) Final attestation by the embassy or consulate of the destination country.'
      },
      {
        question: 'How long does the Embassy Attestation process take?',
        answer: 'The standard processing time for Embassy Attestation is approximately 15-20 working days, depending on the destination country and the type of document. Express services are available for urgent requirements at an additional cost.'
      },
      {
        question: 'What is HRD Attestation and when is it required?',
        answer: 'HRD (Human Resource Development) Attestation is a verification of educational documents by the State Education Department or Human Resource Development Department. It is required as a preliminary step before MEA attestation and embassy attestation, particularly for educational documents being used abroad.'
      }
    ]
  },
  {
    category: 'Visa Services',
    items: [
      {
        question: 'Which countries do you provide visa services for?',
        answer: 'We provide visa services for numerous countries including the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Schengen countries, USA, UK, Canada, Australia, New Zealand, Singapore, Malaysia, and many others. Our team stays updated with the latest visa requirements for each country.'
      },
      {
        question: 'What types of visas can AR International help with?',
        answer: 'We assist with various visa types including tourist visas, business visas, work permits, employment visas, family visas, student visas, dependent visas, and transit visas depending on the destination country and your specific requirements.'
      },
      {
        question: 'Do you guarantee visa approval?',
        answer: 'While we cannot guarantee visa approval as the final decision rests with the embassy or consulate, our expertise significantly increases your chances of success. We ensure that your application is complete, accurate, and meets all the requirements of the destination country.'
      },
      {
        question: 'What documents are typically required for visa applications?',
        answer: 'Common documents include a valid passport, photographs as per specifications, proof of accommodation, travel itinerary, financial statements, employment verification, invitation letters (if applicable), and travel insurance. Specific requirements vary by country and visa type.'
      },
      {
        question: 'How long before my travel date should I apply for a visa?',
        answer: 'We recommend applying for your visa at least 1-3 months before your intended travel date. Processing times vary significantly between countries and visa types. Some visas can be processed in a few days, while others may take several weeks.'
      }
    ]
  },
  {
    category: 'Translation Services',
    items: [
      {
        question: 'What languages do you offer translation services in?',
        answer: 'We offer translation services in over 100 languages including Arabic, French, German, Spanish, Chinese, Japanese, Russian, Portuguese, Italian, Dutch, Korean, and many more. Our team includes native translators for major global languages.'
      },
      {
        question: 'Are your translations officially accepted by embassies and government agencies?',
        answer: 'Yes, our translations are certified and officially accepted by embassies, consulates, immigration departments, universities, and other government agencies worldwide. We provide proper certification and notarization as required.'
      },
      {
        question: 'What types of documents do you translate?',
        answer: 'We translate a wide range of documents including educational certificates, birth/marriage certificates, driver\'s licenses, passports, medical reports, legal contracts, business documents, technical manuals, websites, and marketing materials.'
      },
      {
        question: 'How long does the translation process take?',
        answer: 'Standard translation turnaround time depends on document length and complexity, typically 3-5 business days for regular documents. We also offer express services for urgent requirements, with some translations available within 24-48 hours at additional cost.'
      },
      {
        question: 'Do you offer specialized technical or legal translations?',
        answer: 'Yes, we have specialized translators for technical, legal, medical, financial, and academic documents. These specialists have subject-matter expertise in addition to language proficiency, ensuring accurate translation of complex terminology and concepts.'
      }
    ]
  },
  {
    category: 'DataFlow',
    items: [
      {
        question: 'What is DataFlow verification and who needs it?',
        answer: 'DataFlow verification is a comprehensive verification process of educational and professional credentials. It is primarily required for healthcare professionals (doctors, nurses, pharmacists, lab technicians, etc.) seeking employment in GCC countries and certain other regions.'
      },
      {
        question: 'Which countries or organizations require DataFlow verification?',
        answer: 'DataFlow verification is mainly required by health authorities in GCC countries including UAE (DHA, HAAD, MOH), Saudi Arabia (Saudi Commission for Health Specialties), Qatar (QCHP), Bahrain, Oman, and Kuwait. Some other countries and international healthcare organizations also require similar verification.'
      },
      {
        question: 'What does the DataFlow verification process involve?',
        answer: 'The process involves verification of your educational qualifications, professional licenses, work experience, and personal identity documents. DataFlow contacts your educational institutions and previous employers directly to verify the authenticity of your credentials.'
      },
      {
        question: 'How long does the DataFlow verification process take?',
        answer: 'The standard processing time for DataFlow verification is approximately 30-45 days. However, this timeline can vary based on the responsiveness of your educational institutions and previous employers during the verification process.'
      },
      {
        question: 'What should I do if my DataFlow verification comes back with discrepancies?',
        answer: 'If your DataFlow report shows discrepancies, we can help you address them. This might involve providing additional documentation, clarifications, or following up with your institutions. Our team has experience handling such situations and can guide you through the resolution process.'
      }
    ]
  }
];