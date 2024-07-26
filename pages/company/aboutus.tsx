import Container from '@/components/Container';
import AboutHeroSection from '@/components/AboutHeroSection';

import React from 'react';
import Member from '@/components/Member';
import OurCompany from '@/components/OurCompany';
import ProjectIdea from '@/components/ProjectIdea';
import ChooseUs from '@/components/ChooseUs';

const aboutus = () => {
  return (
    <Container>
      <AboutHeroSection />
      <Member />
      <OurCompany />
      <ProjectIdea />
      <ChooseUs />
    </Container>
  );
};

export default aboutus;
