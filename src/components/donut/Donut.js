import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import DonutMesh from './DonutMesh';

const Donut = () => {
  return (
    <Container
      maxW={[
        'container.sm',
        'container.md',
        'container.lg',
        'container.lg',
        'container.lg',
      ]}
      centerContent
    >
      <Box
        id='canvas-container'
        boxSize={{ base: '30rem', md: '40rem' }}
        marginTop={{ base: '-60px', md: '120px' }}
        marginBottom={{ base: '-140px', md: '-200px' }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <DonutMesh position={[-1.2, 0, 0]} />
          <DonutMesh position={[1.2, 0, 0]} />
        </Canvas>
      </Box>
    </Container>
  );
};

export default Donut;
