import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { FaCertificate } from 'react-icons/fa'; // Import a certificate icon

const Education = () => (
  <Section id="education">
    <SectionDivider />
    <SectionTitle main>Education & Certifications</SectionTitle>
    <SectionText>
      <strong>Computer Systems BTech Program (part-time)</strong><br />
      BCIT, Vancouver, Canada (2018–Present)
      <br /><br />
      <strong>Master’s degree in Software Engineering</strong><br />
      Nankai University, Tianjin, China (2013–2015)
      <br /><br />
      <strong>Bachelor’s degree in Electronic Information Engineering</strong><br />
      Tianjin University of Technology, Tianjin, China (2004–2008)
      <br /><br /><br />
      <strong>Oracle Certified Professional, Java SE 6 Programmer</strong>
      <a
        href="https://www.credly.com/badges/09a3d947-32d2-47ec-a5e7-7374a78161be/linked_in_profile"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: '8px', color: '#0073b1', verticalAlign: 'middle' }}
        title="View OCJP Certification on Credly"
      >
        <FaCertificate size={20} />
      </a>
      <br />
      Oracle, Tianjin, China (2015)
    </SectionText>
  </Section>
);

export default Education; 