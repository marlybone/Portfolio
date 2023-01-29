import React from 'react'

const Projects = () => {
  return(
      <div className='grid-container'>
        <div className='image-one-col-span-two'><img src="src/img/ss02.jpg"/></div>
        <div className='text-col-span-two'>
        <p>
          This is a project etc etc etc etc etc It's the tourist app
        </p>
        </div>
        <div className='image-two-col-span-two'><img src="src/img/ss01.jpg"/></div>
        <div className='text-two-col-span-two'>
          <h1>Project #1</h1>
         <p>
          This is a project etc etc etc
        </p>
        </div>
        <div className='image-three-col-span-two'><img src="src/img/ss03.jpg"/></div>
        <div className='text-three-col-span-two'>
         <p>
          This is a project etc etc etc
        </p>
        </div>
      </div>
  )
}


export default Projects