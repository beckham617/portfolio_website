import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import OpenaiImage from '../Openai/OpenaiImage';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Accomplishments = () => (
  <div>
    Accomplishments
    <OpenaiImage/>
  </div>
);

export default Accomplishments;
