import React from 'react';
import { AiOutlineCloud } from "react-icons/ai";
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id={"tech"}>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Technologies blah..blah..blah..
      <br />
      Blah..Blah..Blah..
      <br />
      Technologies..
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databses
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={"3rem"}/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineCloud size={"3rem"}/>
        <ListContainer>
          <ListTitle>Cloud Service</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS and GCP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
