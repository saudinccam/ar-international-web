import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Apostille from './pages/services/Apostille';
import Attestation from './pages/services/Attestation';
import VisaStamping from './pages/services/VisaStamping';
import Translation from './pages/services/Translation';
import DataFlow from './pages/services/DataFlow';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import WhatsAppButton from './components/layout/WhatsAppButton';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/apostille" element={<Apostille />} />
          <Route path="/services/attestation" element={<Attestation />} />
          <Route path="/services/visa-stamping" element={<VisaStamping />} />
          <Route path="/services/translation" element={<Translation />} />
          <Route path="/services/dataflow" element={<DataFlow />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </>
  );
}

export default App;