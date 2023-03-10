import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Blah..Blah..Blah..
        <br />
        Blah..Blah..Blah..
        <br />
        Blah..Blah..Blah..
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
