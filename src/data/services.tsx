import React from 'react';
import { FileText, BookOpen, Globe, Briefcase, PenTool, Check as BoxCheck } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ReactNode;
  url: string;
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  documents: string[];
}

export const services: Service[] = [
  {
    id: 'apostille',
    title: 'Apostille Services',
    shortDescription: 'Get your documents legally valid for use in countries party to the Hague Convention.',
    longDescription: 'Our Apostille services ensure your documents are legally recognized in all 118 countries that are members of the Hague Convention. We handle the complete apostille process for educational certificates, commercial documents, personal documents, and power of attorney.',
    icon: <FileText size={32} />,
    url: '/services/apostille',
    benefits: [
      'Recognition in 118 member countries of the Hague Convention',
      'Faster processing than embassy attestation',
      'Simplified single-step authentication process',
      'Eliminates the need for multiple attestations',
      'Cost-effective document legalization'
    ],
    process: [
      {
        step: 'Document Verification',
        description: 'We examine your documents to ensure they meet the requirements for apostille.'
      },
      {
        step: 'Notary Authentication',
        description: 'Documents are authenticated by a notary public if required.'
      },
      {
        step: 'State Department Authentication',
        description: 'Documents are sent to the appropriate state department for verification.'
      },
      {
        step: 'MEA Apostille',
        description: 'The Ministry of External Affairs applies the apostille certificate.'
      },
      {
        step: 'Delivery',
        description: 'Apostilled documents are safely delivered to you.'
      }
    ],
    documents: [
      'Educational certificates (degrees, diplomas, transcripts)',
      'Marriage certificates and birth certificates',
      'Commercial documents and export certificates',
      'Affidavits and power of attorney documents',
      'Medical certificates and police clearance certificates'
    ]
  },
  {
    id: 'attestation',
    title: 'Embassy Attestation',
    shortDescription: 'Official verification of documents by embassy/consulate for international recognition.',
    longDescription: 'Our Embassy Attestation services provide official verification of your documents by foreign embassies and consulates in India. This authentication is essential for documents to be legally recognized in countries that are not part of the Hague Apostille Convention.',
    icon: <BookOpen size={32} />,
    url: '/services/attestation',
    benefits: [
      'Legal recognition of documents in foreign countries',
      'Required for employment visas, higher education, and immigration',
      'Essential for business expansions across borders',
      'Necessary for property transactions in foreign countries',
      'Comprehensive handling of all document types'
    ],
    process: [
      {
        step: 'Notary Attestation',
        description: 'Documents are notarized by an authorized notary public.'
      },
      {
        step: 'State Government Authentication',
        description: 'Documents are verified by the appropriate state department.'
      },
      {
        step: 'MEA Attestation',
        description: 'The Ministry of External Affairs authenticates the documents.'
      },
      {
        step: 'Embassy Authentication',
        description: 'Final attestation by the embassy or consulate of the destination country.'
      },
      {
        step: 'Delivery',
        description: 'Fully attested documents are safely delivered to you.'
      }
    ],
    documents: [
      'Educational documents (degrees, diplomas, mark sheets)',
      'Personal documents (birth/marriage certificates)',
      'Commercial documents (incorporation certificates, power of attorney)',
      'Medical certificates and pharmaceutical documents',
      'Employment documents and certificates'
    ]
  },
  {
    id: 'visa-stamping',
    title: 'Visa Stamping',
    shortDescription: 'Comprehensive assistance for visa applications and stamping for various countries.',
    longDescription: 'Our Visa Stamping services provide end-to-end assistance for obtaining visas to various countries. We handle every step from application preparation to document submission, ensuring a smooth and hassle-free visa process for employment, business, tourist, and student visas.',
    icon: <Globe size={32} />,
    url: '/services/visa-stamping',
    benefits: [
      'Expert guidance on visa requirements for specific countries',
      'Higher success rate with professional application preparation',
      'Time-saving with our streamlined process',
      'Regular updates on application status',
      'Assistance with complex visa situations and requirements'
    ],
    process: [
      {
        step: 'Consultation',
        description: 'Initial assessment of your visa requirements and eligibility.'
      },
      {
        step: 'Document Preparation',
        description: 'Compilation and verification of all required documents.'
      },
      {
        step: 'Application Submission',
        description: 'Proper submission of the visa application to the relevant embassy/consulate.'
      },
      {
        step: 'Follow-up',
        description: 'Regular follow-up with the embassy/consulate for updates.'
      },
      {
        step: 'Visa Collection',
        description: 'Collection and delivery of the visa once approved.'
      }
    ],
    documents: [
      'Valid passport with minimum validity as per country requirements',
      'Photographs according to embassy specifications',
      'Financial statements proving sufficient funds',
      'Travel itinerary and accommodation details',
      'Employment letters or business documents as applicable'
    ]
  },
  {
    id: 'translation',
    title: 'Translation Services',
    shortDescription: 'Professional translation of documents in over 100 languages with certification.',
    longDescription: 'Our Translation Services provide professional, accurate translations of various documents in over 100 languages. We specialize in certified translations acceptable to government agencies, immigration departments, embassies, and academic institutions worldwide.',
    icon: <PenTool size={32} />,
    url: '/services/translation',
    benefits: [
      'Certified translations accepted by official institutions',
      'Native translators for accurate cultural context',
      'Specialized translators for technical, legal, and medical documents',
      'Quick turnaround with options for express service',
      'Confidentiality guaranteed for all documents'
    ],
    process: [
      {
        step: 'Document Evaluation',
        description: 'Initial assessment of the document and language requirements.'
      },
      {
        step: 'Translator Assignment',
        description: 'Assignment to a specialized native translator.'
      },
      {
        step: 'Translation',
        description: 'Professional translation of the document.'
      },
      {
        step: 'Quality Check',
        description: 'Thorough review by a second translator or editor.'
      },
      {
        step: 'Certification',
        description: 'Certification and notarization if required.'
      }
    ],
    documents: [
      'Educational documents (degrees, transcripts, certificates)',
      'Legal documents (contracts, agreements, affidavits)',
      'Personal documents (birth/marriage certificates, driver\'s licenses)',
      'Medical records and prescriptions',
      'Business documents (proposals, reports, presentations)'
    ]
  },
  {
    id: 'dataflow',
    title: 'DataFlow Services',
    shortDescription: 'Professional verification of credentials for healthcare professionals seeking employment abroad.',
    longDescription: 'Our DataFlow Services provide comprehensive verification of educational and professional credentials for healthcare professionals seeking employment in GCC countries and other regions. We ensure your credentials meet international standards and pass the rigorous DataFlow verification process.',
    icon: <BoxCheck size={32} />,
    url: '/services/dataflow',
    benefits: [
      'Expert guidance through the complex DataFlow process',
      'Higher success rate with correct document preparation',
      'Time-saving with our streamlined procedures',
      'Regular status updates on your verification',
      'Assistance with handling verification issues if they arise'
    ],
    process: [
      {
        step: 'Document Collection',
        description: 'Gathering all required credentials and supporting documents.'
      },
      {
        step: 'Preparation & Review',
        description: 'Thorough review and proper preparation of all documents.'
      },
      {
        step: 'Application Submission',
        description: 'Submission of documents to the DataFlow Group.'
      },
      {
        step: 'Verification Tracking',
        description: 'Regular follow-up and tracking of the verification process.'
      },
      {
        step: 'Report Delivery',
        description: 'Receipt and delivery of the final verification report.'
      }
    ],
    documents: [
      'Educational certificates and transcripts',
      'Professional licenses and registrations',
      'Experience certificates from previous employers',
      'Identity documents (passport, national ID)',
      'Professional training certificates and specialization documents'
    ]
  }
];