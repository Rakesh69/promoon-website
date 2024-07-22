import ChooseUs from '@/components/WebDevelopment/ChooseUs';
import HeroSection from '@/components/WebDevelopment/HeroSection';
import Industries from '@/components/WebDevelopment/Industries';
import Services from '@/components/WebDevelopment/Services';
import Tools from '@/components/WebDevelopment/Tools';
import React from 'react';

const websitedevelopment = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Tools />
      <Industries />
      <ChooseUs />
    </>
  );
};

export default websitedevelopment;
