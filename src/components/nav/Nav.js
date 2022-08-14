import React from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import Logo from './Logo';
import ThemeToggleButton from './ThemeToggleButton';

const Nav = () => {
  return (
    <Box
      as='nav'
      pos='fixed'
      w='100%'
      zIndex={2}
      backgroundColor={useColorModeValue('#e9d5a1', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Container
        maxW={[
          'container.sm',
          'container.md',
          'container.lg',
          'container.lg',
          'container.lg',
        ]}
        display='flex'
        p={2}
        alignItems='center'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <NavDesktop />
        <Box flex={1} align='right'>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <NavMobile />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
