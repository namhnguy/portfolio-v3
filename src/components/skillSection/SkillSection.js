import React from 'react';
import {
  Container,
  Heading,
  useColorModeValue,
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Icon } from '@iconify/react';
import { skills, responsive } from './SkillConstants';

const SkillSection = () => {
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
      paddingBottom={8}
      pos='relative'
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
        Skills
      </Heading>
      <Flex
        flexDirection='column'
        minWidth='0'
        border='1px solid rgba(0,0,0,0.125)'
        borderRadius='.25rem'
        marginTop={2}
      >
        <Flex
          gap='10px'
          p='.75rem 1.25rem'
          marginBottom='0'
          backgroundColor={useColorModeValue('blackAlpha.500', 'black')}
          borderBottom='1px solid rgba(0,0,0,.125)'
        >
          <Icon icon='twemoji:red-circle' width='10' height='10' />
          <Icon icon='twemoji:yellow-circle' width='10' height='10' />
          <Icon icon='twemoji:green-circle' width='10' height='10' />
        </Flex>
        <Box
          p='1.25rem'
          backgroundColor={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            removeArrowOnDeviceType={['mobile', 'tablet']}
            showDots={true}
            renderDotsOutside={true}
            className='skill-carousel'
            centerMode
          >
            {skills.map((item, i) => {
              return (
                <Box
                  key={i}
                  boxSize={'6.25rem'}
                  backgroundColor='gray.600'
                  borderRadius={10}
                  color='white'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDir='column'
                >
                  <Image boxSize={'48px'} src={item.class} />
                  <Text>{item.name}</Text>
                </Box>
              );
            })}
          </Carousel>
        </Box>
      </Flex>
    </Container>
  );
};

export default SkillSection;
