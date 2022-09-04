import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';

const ExperienceTimeline = () => {
  return (
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
          Developed a movie recommendation web application that lets user search
          for popular movies based on their criteria.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='05.2021 - 08.2021'
        contentStyle={{
          background: useColorModeValue(
            'rgba(255,255,255,0.36)',
            'rgba(255,255,255,0.08)'
          ),
        }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<HamburgerIcon />}
      >
        <h3>Game Developer Intern</h3>
        <h4>XR Sports Group</h4>
        <p>
          Worked in an agile environment to make a web based golf game for an
          influencer group.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='08.2021 - 06.2022'
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
          Worked in an agile environment to develop a component library for
          developers to use in their React application.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='06.2022 - current'
        contentStyle={{
          background: useColorModeValue(
            'rgba(255,255,255,0.36)',
            'rgba(255,255,255,0.08)'
          ),
        }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<HamburgerIcon />}
      >
        <h3>Software Engineer Associate</h3>
        <h4>Lockheed Martin</h4>
        <p>
          As part of the Lockheed Martin, I work on exciting projects for our
          users.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
