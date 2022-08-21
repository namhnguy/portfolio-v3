import React from 'react';
import { Container, Heading, useColorModeValue } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HamburgerIcon } from '@chakra-ui/icons';

const ExperienceSection = () => {
  return (
    <Container
      as='section'
      maxW={[
        'container.sm',
        'container.md',
        'container.lg',
        'container.lg',
        'container.lg',
      ]}
    >
      <Heading
        marginTop={20}
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
        Experience
      </Heading>
      <VerticalTimeline>
        <VerticalTimelineElement
          date='01.2021 - 05.2021'
          contentStyle={{
            background: useColorModeValue(
              'rgba(255,255,255,0.36)',
              'rgba(255,255,255,0.08)'
            ),
          }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HamburgerIcon />}
        >
          <h3>Front-End Developer Intern</h3>
          <h4>Codubee</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date='01.2021 - 05.2021'
          contentStyle={{
            background: useColorModeValue(
              'rgba(255,255,255,0.36)',
              'rgba(255,255,255,0.08)'
            ),
          }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HamburgerIcon />}
        >
          <h3>Game Developer</h3>
          <h4>XR Sports Group</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date='01.2021 - 05.2021'
          contentStyle={{
            background: useColorModeValue(
              'rgba(255,255,255,0.36)',
              'rgba(255,255,255,0.08)'
            ),
          }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HamburgerIcon />}
        >
          <h3>Front-End Developer</h3>
          <h4>Antra</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date='01.2021 - 05.2021'
          contentStyle={{
            background: useColorModeValue(
              'rgba(255,255,255,0.36)',
              'rgba(255,255,255,0.08)'
            ),
          }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<HamburgerIcon />}
        >
          <h3>Software Engineer</h3>
          <h4>Lockheed Martin</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default ExperienceSection;
