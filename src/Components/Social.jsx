import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useHoverIcons from './useHoverIcons'
import styled from "styled-components"

const SocialContainer = styled.div`
@media (max-width: 500px){
  display: flex;
  bottom: 0;
  margin: 0 auto;
  flex-direction: row;
  position: relative;
  padding: 5px;
}
`;


const Social = () => {
  useHoverIcons('.fontawesome-icons');
  return(
  <SocialContainer>
    <div className="side-container">
      <div className='side-items'>
        <a href="https://www.linkedin.com/in/marlon-stevenson-510738109/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="fontawesome-icons"/></a>
        <a href="https://twitter.com/Maestvenlon" target='_blank'><FontAwesomeIcon icon={faTwitter} className="fontawesome-icons"/></a>
        <a href="https://github.com/marlybone" target='_blank'><FontAwesomeIcon icon={faGithub} className="fontawesome-icons"/></a>
        <a href="" target='_blank'><FontAwesomeIcon icon={faCodepen} className="fontawesome-icons"/></a>
      </div>
    </div>
  </SocialContainer>
  )
}


export default Social