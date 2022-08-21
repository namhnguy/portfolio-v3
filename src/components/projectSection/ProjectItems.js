import React from 'react';
import {
  SimpleGrid,
  Flex,
  Image,
  Box,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { projects } from './ProjectData';

import './ProjectItems.css';
import ProjectModalDetails from './ProjectModalDetails';

const ProjectItems = () => {
  const [data, setData] = React.useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectSelect = (item) => {
    setData(item);
    onOpen();
  };

  return (
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
            onClick={() => handleProjectSelect(item)}
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
      <ProjectModalDetails data={data} isOpen={isOpen} onClose={onClose} />
    </SimpleGrid>
  );
};

export default ProjectItems;
