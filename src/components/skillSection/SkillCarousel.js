import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Icon } from '@iconify/react';
import { skills, responsive } from './SkillData.js';
import { useColorModeValue, Box, Text, Flex, Image } from '@chakra-ui/react';

const SkillCarousel = () => {
  return (
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
        backgroundColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
  );
};

export default SkillCarousel;
