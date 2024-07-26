import HeroSectionOptimization from '@/components/SearchEngineOptimization/HeroSectionOptimization';
import OurSEOServices from '@/components/SearchEngineOptimization/OurSEOServices';
import WhyChooseService from '@/components/SearchEngineOptimization/WhyChooseService';
import React from 'react';
import Services from '@/components/Services';

const SearchEngineOptimization = () => {
  return (
    <div>
      <HeroSectionOptimization />
      <OurSEOServices />
      <Services />
      <WhyChooseService />
    </div>
  );
};

export default SearchEngineOptimization;
