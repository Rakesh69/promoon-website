import DevolpmentService from '@/components/mobileappdevelopment/DevolpmentService';
import HeroSectionMobile from '@/components/mobileappdevelopment/HeroSectionMobile';
import MobileChooseUs from '@/components/mobileappdevelopment/MobileChoose';
import Industries from '@/components/WebDevelopment/Industries';
import React from 'react';
import Services from '@/components/Services';

const mobileappdevelopment = () => {
  return (
    <div>
      <HeroSectionMobile />
      <DevolpmentService />
      <Services />
      <Industries />
      <MobileChooseUs />
    </div>
  );
};

export default mobileappdevelopment;
