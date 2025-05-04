import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialProof from './SocialProof';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pt-[88px]">
      <SocialProof />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;