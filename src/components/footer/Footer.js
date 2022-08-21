import React from 'react';
import {
  Container,
  Box,
  useColorModeValue,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as='footer'
      w='100%'
      zIndex={2}
      backgroundColor={useColorModeValue('orange.200', 'gray.500')}
      marginTop={20}
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
        flexDir='column'
      >
        <Link href='https://github.com/namhnguy' isExternal>
          <Image
            boxSize={7}
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            alt='github icon'
          />
        </Link>
        <Text>Contact Info: namhnguy@gmail.com</Text>
      </Container>
    </Box>
  );
};

export default Footer;
