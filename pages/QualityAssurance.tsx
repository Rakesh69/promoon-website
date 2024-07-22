import HeroSectionQuality from '@/components/QualityAssurance/HeroSectionQuality';
import OurTesting from '@/components/QualityAssurance/OurTesting';
import QualityService from '@/components/QualityAssurance/QualityService';
import WhyChooseQuality from '@/components/QualityAssurance/WhyChooseQuality';
import React from 'react';

const QualityAssurance = () => {
  return (
    <div>
      <HeroSectionQuality />
      <QualityService />
      <OurTesting />
      <WhyChooseQuality />
    </div>
  );
};

export default QualityAssurance;
