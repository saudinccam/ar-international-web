export interface Testimonial {
  id: number;
  name: string;
  position?: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Software Engineer",
    content: "AR International made my UAE work visa process completely hassle-free. Their team handled all the document attestation perfectly, and I received updates at every step. Highly recommended for anyone moving abroad for work!",
    rating: 5,
    avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Nurse",
    content: "As a healthcare professional moving to Saudi Arabia, I needed both DataFlow verification and embassy attestation. AR International's expertise in handling these specialized processes saved me so much time and stress. Their service is worth every penny.",
    rating: 5
  },
  {
    id: 3,
    name: "Ahmed Khan",
    position: "Business Owner",
    content: "I've been using AR International's services for my company's document attestation needs for over 5 years. Their consistent quality and reliability have made them our only choice for all international documentation.",
    rating: 5,
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Lakshmi Nair",
    position: "Student",
    content: "I needed urgent apostille for my academic documents to study abroad. Despite the tight deadline, AR International delivered perfectly. The team was supportive throughout and kept me informed at every stage. Excellent service!",
    rating: 5
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "HR Manager",
    content: "We regularly send employees abroad and rely on AR International for all our visa and attestation requirements. Their professional approach and ability to handle bulk requests efficiently make them an invaluable partner for our company.",
    rating: 4,
    avatarUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Meera Patel",
    position: "Physician",
    content: "The DataFlow verification process seemed overwhelming until I approached AR International. Their step-by-step guidance and expert handling of my documents made the entire process smooth. I received my verification on time and secured my position in Dubai.",
    rating: 5
  },
  {
    id: 7,
    name: "Suresh Menon",
    position: "Civil Engineer",
    content: "AR International provided excellent translation services for my technical documents. The quality of translation was outstanding, with perfect attention to technical terminology. They also completed the work ahead of schedule!",
    rating: 5,
    avatarUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    name: "Fatima Begum",
    content: "I needed multiple documents attested for my family's relocation to Qatar. AR International handled everything from HRD attestation to embassy attestation perfectly. Their service is comprehensive and reliable.",
    rating: 4
  }
];