import AboutMeSection from './components/aboutMeSection/AboutMeSection.js';
import Donut from './components/donut/Donut.js';
import Nav from './components/nav/Nav.js';
import { Box, useColorModeValue } from '@chakra-ui/react';
import ExperienceSection from './components/experienceSection/ExperienceSection.js';
import SkillSection from './components/skillSection/SkillSection.js';
import ProjectSection from './components/projectSection/ProjectSection.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className='App'>
      <Box
        minH='100vh'
        backgroundColor={useColorModeValue('#f0e7db', '#20202380')}
      >
        <Nav />
        <Donut />
        <AboutMeSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
