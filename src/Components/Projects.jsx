import React from 'react'
import { useEffect, useState } from 'react'
import imagecycler from './Components/imagecycler'

const Projects = () => {
  const styles = {
    transform: 'translateX(100%)',
     color: 'white',
    direction: 'rtl'
  }
  
  
  return(
    <div>
      <h1 style={{color:'white'}}>My Projects</h1>
      <div className='grid-container'>
        <div className='image-one-col-span-two'><img src="src/img/ss02.jpg"/></div>
        <h1 className='project-tags' style={styles}>Maps PlaceServices</h1>
        <div className='text-col-span-two'>
        <p>
          Using google maps API and CSV data from WorldBank Open data I created data visualisation on google Maps to visualize certain country data. Additionally I incorporated PlaceServices to search for Tourist attractions in cities based on searching
        </p>
        </div>
        <div className='image-two-col-span-two'><img src="src/img/weather01.jpg"/></div>
        <h1 className='project-tags' style={{transform: 'translateX(-100%)', color:'white'}}>Project #1</h1>
        <div className='text-two-col-span-two'>
         <p>
          This is a project etc etc etc
        </p>
        </div>
        <div className='image-three-col-span-two'><img src="src/img/currcon01.jpg"/></div>
        <h1 className='project-tags' style={styles}>Project #1</h1>
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