import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import ExperienceTimeline from './ExperienceTimeline';
import MotionContainer from '../common/MotionContainer';

const ExperienceSection = () => {
  return (
    <Container
      id='exp-section'
      as='section'
      maxW={[
        'container.sm',
        'container.md',
        'container.lg',
        'container.lg',
        'container.lg',
      ]}
    >
      <MotionContainer
        whileHover={{
          scale: 1.2,
        }}
        width='fit-content'
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
      </MotionContainer>

      <ExperienceTimeline />
    </Container>
  );
};

export default ExperienceSection;
