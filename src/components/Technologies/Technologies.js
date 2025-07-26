import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiSpringboot, SiNextui } from 'react-icons/si';
import { AiOutlineCloud, AiOutlineDeploymentUnit } from "react-icons/ai";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have extensive hands-on experience with a broad spectrum of technologies, frameworks, and tools across the software development lifecycle. My expertise spans modern front-end and back-end stacks, cloud platforms, DevOps, databases, and third-party integrations, enabling me to deliver robust, scalable, and maintainable solutions.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Styled-Components, Redux, Axios, SWR, Lodash, Day.js, Moment.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiSpringboot size={"3rem"}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js, Java (Spring Boot, Spring Cloud), RESTful APIs, Microservices, NestJS, EJB, Servlet, Maven, Hibernate, JPA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"}/>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Relational DB: Oracle, MySQL, PostgreSQL, MSSQL, DB2<br />
            NoSQL DB: MongoDB, Redis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineCloud size={"3rem"}/>
        <ListContainer>
          <ListTitle>DevOps & Cloud</ListTitle>
          <ListParagraph>
            AWS (EKS, EC2, S3, ECR, RDS, Route53, SES, VPC), GCP, Docker, Kubernetes, Terraform, Ansible, Jenkins, Helm, GitHub Actions, Datadog, Nginx, Kong, Vault
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineDeploymentUnit size={"3rem"}/>
        <ListContainer>
          <ListTitle>CI/CD & Infrastructure</ListTitle>
          <ListParagraph>
            Jenkins, GitHub Actions, Helm, Terraform, Ansible, Docker Compose, OpenVPN, ELK Stack (Elasticsearch, Kibana), RabbitMQ
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextui size={"3rem"}/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, Visual Paradigm
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
