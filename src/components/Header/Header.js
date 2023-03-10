import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display:'flex', alignItems:'center', color:'red', marginBottom:'20px'}}>
          <DiCssdeck size = "3rem" />
          <Span>Flash🍁Maple</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#vlog">
          <NavLink>Vlog</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#note">
          <NavLink>Note</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href={"mailto:liangli5100@gmail.com"} target="_blank">
        <AiOutlineMail size={"3rem"} color={'red'}/>
      </SocialIcons>
      <SocialIcons href={"https://github.com/beckham617"} target="_blank">
        <AiFillGithub size={"3rem"} color={'red'}/>
      </SocialIcons>
      <SocialIcons href={"https://www.linkedin.com/in/liangli7783180642/"} target="_blank">
        <AiFillLinkedin size={"3rem"} color={'red'}/>
      </SocialIcons>
      <SocialIcons href={"https://www.instagram.com/leonli_2014/"} target="_blank">
        <AiFillInstagram size={"3rem"} color={'red'}/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
