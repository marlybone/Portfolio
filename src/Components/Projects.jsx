import React from 'react'

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
        <h1 className='project-tags' style={styles}>Project #1</h1>
        <div className='text-col-span-two'>
        <p>
          This is a project etc etc etc etc etc It's the tourist app
        </p>
        </div>
        <div className='image-two-col-span-two'><img src="src/img/ss01.jpg"/></div>
        <h1 className='project-tags' style={{transform: 'translateX(-100%)', color:'white'}}>Project #1</h1>
        <div className='text-two-col-span-two'>
         <p>
          This is a project etc etc etc
        </p>
        </div>
        <div className='image-three-col-span-two'><img src="src/img/ss03.jpg"/></div>
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