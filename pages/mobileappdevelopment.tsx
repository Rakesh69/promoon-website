import DevolpmentService from '@/components/mobileappdevelopment/DevolpmentService';
import HeroSectionMobile from '@/components/mobileappdevelopment/HeroSectionMobile';
import MobileChooseUs from '@/components/mobileappdevelopment/MobileChoose';
import Industries from '@/components/WebDevelopment/Industries';
import React from 'react';

const mobileappdevelopment = () => {
  return (
    <div>
      <HeroSectionMobile />
      <DevolpmentService />
      <Industries />
      <MobileChooseUs />
    </div>
  );
};

export default mobileappdevelopment;
