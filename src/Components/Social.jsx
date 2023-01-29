import React from 'react'
import { useEffect , useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Social = () => {
  const icons = useRef(null);

  useEffect(() => {
    icons.current = document.querySelectorAll('.fontawesome-icons');
    icons.current.forEach(icon => {
      icon.addEventListener('mouseover',()=>{
        icon.style.top = '-3px';
      });
      icon.addEventListener('mouseout',()=>{
        icon.style.top = '0px';
      });
    });
    return () => {
      icons.current.forEach(icon => {
        icon.removeEventListener('mouseover',()=>{
          icon.style.top = '-3px';
        });
        icon.removeEventListener('mouseout',()=>{
          icon.style.top = '0px';
        });
      });
    };
  }, []);
    
  return(
    <div className="side-container">
      <div className='side-items'>
        <a href=""><FontAwesomeIcon icon={faLinkedin} className="fontawesome-icons"/></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} className="fontawesome-icons"/></a>
        <a href=""><FontAwesomeIcon icon={faGithub} className="fontawesome-icons"/></a>
        <a href=""><FontAwesomeIcon icon={faCodepen} className="fontawesome-icons"/></a>
      </div>
    </div>
  )
}


export default Social