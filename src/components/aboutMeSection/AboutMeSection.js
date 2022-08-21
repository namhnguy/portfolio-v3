import React from 'react';
import { Container } from '@chakra-ui/react';
import AboutMeHeading from './AboutMeHeading';
import AboutMeCard from './AboutMeCard';

const AboutMeSection = () => {
  return (
    <Container
      as='section'
      maxW={[
        'container.sm',
        'container.md',
        'container.lg',
        'container.lg',
        'container.lg',
      ]}
    >
      <AboutMeHeading />
      <AboutMeCard />
    </Container>
  );
};

export default AboutMeSection;
