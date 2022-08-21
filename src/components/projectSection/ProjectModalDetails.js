import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Icon } from '@iconify/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Flex,
  Image,
  Box,
  Text,
  Tooltip,
  Link,
} from '@chakra-ui/react';

const ProjectModalDetails = ({ data, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={['sm', 'sm', 'xl']}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex gap={2}>
            {data?.title}
            <Link href={data?.url} isExternal>
              <ExternalLinkIcon boxSize={'24px'} />
            </Link>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
              backgroundColor={useColorModeValue(
                'whiteAlpha.500',
                'whiteAlpha.200'
              )}
            >
              <AwesomeSlider animation='cubeAnimation'>
                {data.images &&
                  data.images.map((image, i) => {
                    return <div key={`project-image-${i}`} data-src={image} />;
                  })}
              </AwesomeSlider>
            </Box>
          </Flex>
          <Text marginTop={10}>{data?.description}</Text>
        </ModalBody>
        <ModalFooter justifyContent='center' gap={5}>
          {data.technologies &&
            data.technologies.map((tech, i) => {
              return (
                <Tooltip key={`project-tech-${i}`} label={tech.name}>
                  <Image boxSize={'32px'} src={tech.class} />
                </Tooltip>
              );
            })}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModalDetails;
