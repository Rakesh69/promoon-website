import ChooseUs from '@/components/WebDevelopment/ChooseUs';
import HeroSection from '@/components/WebDevelopment/HeroSection';
import Industries from '@/components/WebDevelopment/Industries';

import Tools from '@/components/WebDevelopment/Tools';
import React from 'react';
import Services from '@/components/Services';
import ServicesWeb from '@/components/WebDevelopment/Services';

const websitedevelopment = () => {
  return (
    <>
      <HeroSection />
      <ServicesWeb />
      <Tools />
      <Services />
      <Industries />
      <ChooseUs />
    </>
  );
};

export default websitedevelopment;
