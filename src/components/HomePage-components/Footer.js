/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { UserAuth } from '../../context/AuthContext';


const Footer = () => {
  const {  contactSectionRef } = UserAuth();

  return (
    <footer class="footer" ref={contactSectionRef}>
  <div class="footer__addr">
    <h1 class="footer__logo">Adem Ladhari</h1>
        
    <h2>Contact</h2>
    
    <address>
      99303780
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email</a> 
      ladhari.adem5@gmail.com
      </address>
  </div>
  
  <ul class="footer__nav">
   
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">React</a>
        </li>
        
        <li>
          <a href="#">Firebase</a>
        </li>
        
        <li>
          <a href="#">Node.js</a>
        </li>
      
      
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  
</footer>
  );
};

export default Footer;
