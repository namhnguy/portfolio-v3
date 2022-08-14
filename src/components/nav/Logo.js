import React from 'react';
import { Image, Link, Text, Box } from '@chakra-ui/react';
import LogoImg from '../../assets/image/DynoMITE2.png';

const Logo = () => {
  return (
    <Link href='#' _hover={{ textDecor: 'none' }}>
      <Box
        display='inline-flex'
        fontWeight={'bold'}
        fontSize='xl'
        alignItems='center'
      >
        <Image
          boxSize={10}
          src={LogoImg}
          alt='My Logo'
          transition={'200ms ease'}
          _hover={{ transform: 'rotate(20deg)' }}
        />
        <Text ml={1}>Nam Nguyen</Text>
      </Box>
    </Link>
  );
};

export default Logo;
