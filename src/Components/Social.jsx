import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Social = () => {
  return(
    <div className="side-container">
      <div className='side-items'>
        <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
        <a href=""><FontAwesomeIcon icon={faGithub}/></a>
        <a href=""><FontAwesomeIcon icon={faCodepen}/></a>
      </div>
    </div>
  )
}


export default Social