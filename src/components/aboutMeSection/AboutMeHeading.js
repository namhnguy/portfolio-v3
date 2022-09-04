import React from 'react';
import { Box, useColorModeValue, Heading, Image } from '@chakra-ui/react';
import ProfileImg from '../../assets/image/profile.jpg';
import Typical from 'react-typical';
import './AboutMeHeading.css';
import MotionContainer from '../common/MotionContainer';

const AboutMeHeading = () => {
  return (
    <>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        backgroundColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello! Welcome To My Web Portfolio!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <MotionContainer
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <Heading as='h2' size='xl'>
              Nam Nguyen
            </Heading>
          </MotionContainer>
          <Typical
            steps={['Web Developer, Game Developer, Blender Enthusist']}
            wrapper='p'
            className='typical'
          />
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Box
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            boxSize={'6.25rem'}
            display='inline-block'
            borderRadius='full'
            overflow='hidden'
          >
            <Image
              src={ProfileImg}
              alt='Profile Image'
              borderRadius='full'
              w='100%'
              h='100%'
              objectFit={'contain'}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMeHeading;
