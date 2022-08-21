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
  );
};

export default ExperienceTimeline;
