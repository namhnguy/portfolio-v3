import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import MotionContainer from '../common/MotionContainer';

const NavDesktop = () => {
  return (
    <Stack
      direction={'row'}
      display={{ base: 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems='center'
      flexGrow={1}
    >
      <MotionContainer whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.2 }}>
        <Link p={2} href='#' _hover={{ textDecor: 'none' }}>
          Home
        </Link>
      </MotionContainer>
      <MotionContainer whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.2 }}>
        <Link p={2} href='#about-section' _hover={{ textDecor: 'none' }}>
          About Me
        </Link>
      </MotionContainer>
      <MotionContainer whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.2 }}>
        <Link p={2} href='#exp-section' _hover={{ textDecor: 'none' }}>
          Experience
        </Link>
      </MotionContainer>
      <MotionContainer whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.2 }}>
        <Link p={2} href='#skill-section' _hover={{ textDecor: 'none' }}>
          Skills
        </Link>
      </MotionContainer>
      <MotionContainer whileTap={{ scale: 1.5 }} whileHover={{ scale: 1.2 }}>
        <Link href='#project-section' _hover={{ textDecor: 'none' }}>
          Projects
        </Link>
      </MotionContainer>
    </Stack>
  );
};

export default NavDesktop;
