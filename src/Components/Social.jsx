import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useHoverIcons from './useHoverIcons'


const Social = () => {
  useHoverIcons('.fontawesome-icons');
  return(
    <div className="side-container">
      <div className='side-items'>
        <a href="https://www.linkedin.com/in/marlon-stevenson-510738109/"><FontAwesomeIcon icon={faLinkedin} className="fontawesome-icons"/></a>
        <a href="https://twitter.com/Maestvenlon"><FontAwesomeIcon icon={faTwitter} className="fontawesome-icons"/></a>
        <a href="https://github.com/marlybone"><FontAwesomeIcon icon={faGithub} className="fontawesome-icons"/></a>
        <a href=""><FontAwesomeIcon icon={faCodepen} className="fontawesome-icons"/></a>
      </div>
    </div>
  )
}


export default Social