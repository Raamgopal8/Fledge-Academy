import React from 'react';
import ContactSection from './ContactSection';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      <div className="pt-24 pb-12">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
