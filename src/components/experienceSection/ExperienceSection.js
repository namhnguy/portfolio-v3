import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import ExperienceTimeline from './ExperienceTimeline';

const ExperienceSection = () => {
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
      <Heading
        marginTop={20}
        marginBottom={4}
        as='h3'
        fontSize='1.25rem'
        fontWeight='bold'
        lineHeight='1.33'
        textDecor='underline'
        textUnderlineOffset='0.375rem'
        textDecorationColor='#525252'
        textDecorationThickness='0.25rem'
      >
        Experience
      </Heading>
      <ExperienceTimeline />
    </Container>
  );
};

export default ExperienceSection;