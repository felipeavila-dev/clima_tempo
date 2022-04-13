import React from 'react';

import { BsGithub } from "react-icons/bs";

import './style.css';

export const Footer = () => {
  return(
    <footer>
      <p>
        Desenvolvido com amor ❤️ | 
      </p>
      <a href='https://github.com/felipeavila-dev' target='_blank' className='icon'>
        <BsGithub /> /felipeavila-dev
      </a>
    </footer>
  );
}