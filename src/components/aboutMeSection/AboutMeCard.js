import React from 'react';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import MotionContainer from '../common/MotionContainer';

const AboutMeCard = () => {
  return (
    <>
      <MotionContainer
        whileHover={{
          scale: 1.2,
        }}
        width='fit-content'
      >
        <Heading
          marginTop={3}
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
          About Me
        </Heading>
      </MotionContainer>
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
          lineHeight='200%'
          backgroundColor={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}
        >
          <Text fontSize='lg'>
            I am a graduate from UT Dallas who is interested in web development
            and game development. My strength is working in front-end using
            React to develop SPA and web applications with responsiveness in
            mind. I am experienced with utilizing RESTful API and complying with
            REST architecture. I also have experience with latest technologies
            such as Next.js to take advantage of features such as server side
            rendering to improve load time. I also enjoy making 2D and 3D games
            using the Unity Engine.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default AboutMeCard;
