import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Liang Li<br />
        Full-Stack Developer
      </SectionTitle>
      <SectionText>
        Experienced Full-Stack Developer with over 16 years of expertise in designing, developing, and maintaining large-scale web applications and information systems. Proficient in utilizing modern programming languages throughout the Software Development Life Cycle (SDLC) with Agile/Scrum methodologies. Possesses strong analytical and problem-solving skills, with a proven track record of making well-thought-out decisions. Excellent communication skills, a fast learner, and a collaborative team player.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:liangli5100@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
