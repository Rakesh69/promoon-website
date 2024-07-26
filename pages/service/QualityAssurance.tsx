import HeroSectionQuality from '@/components/QualityAssurance/HeroSectionQuality';
import OurTesting from '@/components/QualityAssurance/OurTesting';
import QualityService from '@/components/QualityAssurance/QualityService';
import WhyChooseQuality from '@/components/QualityAssurance/WhyChooseQuality';
import React from 'react';
import Services from '@/components/Services';

const QualityAssurance = () => {
  return (
    <div>
      <HeroSectionQuality />
      <QualityService />
      <Services />
      <OurTesting />
      <WhyChooseQuality />
    </div>
  );
};

export default QualityAssurance;
