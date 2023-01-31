import React from 'react'
import Imagecycler from './Imagecycler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const styles = {
    transform: 'translateX(100%)',
     color: 'white',
    direction: 'rtl'
  }

  const githubStyle = {
    fontSize:'2em',
    color:'white',  
  }
  
  const images = [
    'src/img/ss01.jpg',
    'src/img/ss02.jpg',
    'src/img/ss03.jpg'
  ]
  
  return(
    <div>
      <h1 style={{color:'white'}}>My Projects</h1>
      <div className='grid-container'>
        <div className='image-one-col-span-two'><Imagecycler className='places-proj' images={images}/></div>
        <h1 className='project-tags' style={styles}>Maps PlaceServices</h1>
        <a className='github-project-one' href="https://github.com/marlybone/GoogleMapDataVis" target="_blank">
        <FontAwesomeIcon icon={faGithub} style={githubStyle} />
        </a>
        <div className='text-col-span-two'>
        <p>
          I utilized the Google Maps API and WorldBank Open Data's CSV information to craft a data visualization on Google Maps that showcases relevant country data. To enhance the user experience, I integrated Google's PlaceServices to allow for searching and identifying popular tourist destinations within cities.
        </p>
        </div>
        <div className='image-two-col-span-two'><img src="src/img/weather01.jpg"/></div>
        <h1 className='project-tags' style={{transform: 'translateX(-100%)', color:'white'}}>Weather App</h1>
        <a className='github-project-two' href="https://github.com/marlybone/weather-app" target="_blank">
        <FontAwesomeIcon icon={faGithub} style={githubStyle} />
        </a>
        <div className='text-two-col-span-two'>
         <p>
          This is a project etc etc etc
        </p>
        </div>
        <div className='image-three-col-span-two'><img src="src/img/currcon01.jpg"/></div>
        <h1 className='project-tags' style={styles}>Currency Converter</h1>
        <a className='github-project-three' href="https://github.com/marlybone/CurrencyConverter" target="_blank">
        <FontAwesomeIcon icon={faGithub} style={githubStyle} />
        </a>
        <div className='text-three-col-span-two'>
         <p>
          This is a project etc etc etc
        </p>
        </div>
      </div>
    </div>
  )
}


export default Projects