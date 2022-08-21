import React from 'react';
import {
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Image,
  Box,
  Text,
} from '@chakra-ui/react';
import { projects } from './ProjectData';

const ProjectSection = () => {
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
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((item, i) => {
          return (
            <Flex
              key={`project-${i}`}
              justify='center'
              align='center'
              flexDir='column'
              backgroundColor='rgba(255,255,255,0.36)'
              _dark={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              p={2}
              boxShadow='0 4px 6px rgba(0,0,0,0.3)'
              borderRadius={5}
              transition='all 0.2s linear'
              _hover={{
                transform: 'scale(1.01)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.7)',
                zIndex: '10',
              }}
              pos='relative'
              zIndex='0'
            >
              <Image src={item.images[0]} alt='project images' />
              <Box
                p='8px 15px 2px'
                pos='relative'
                zIndex='-500'
                borderTop='5px solid #696969'
                borderRadius='0 0 5px 5px'
                backgroundColor='#696969'
                color='#fff'
              >
                {item.startDate}
              </Box>
              <Text
                textTransform='uppercase'
                letterSpacing='3px'
                marginTop='1rem'
                textAlign='center'
              >
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default ProjectSection;
