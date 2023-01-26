import React from 'react'

const Projects = () => {
  return(
  <section>
  <div className='the-grid'>
    <h1>Some of my Projects</h1>
    <div className="grid-container">  
      <div className="grid-items">
        <div className="project-card">
          <img src='' alt=''/>
            <h3>Project</h3>
          <div className='project-box'>
            <p>I built this using google maps API and Placeservices to get tourist attractions within a radius on the searched place.</p>
          </div>
            <a>
              <img/>
            </a>
        </div>
        <div className="project-card">
          <img src='' alt=''/>
            <h3>Project</h3>
            <div className='project-box'>
            <p>I built this using google maps API and Placeservices to get tourist attractions within a radius on the searched place.</p>
          </div>
            <a>
              <img/>
            </a>
        </div>
        <div className="project-card">
          <img src='' alt=''/>
            <h3>Project</h3>
            <div className='project-box'>
            <p>I built this using google maps API and Placeservices to get tourist attractions within a radius on the searched place.</p>
          </div>
            <a>
              <img/>
            </a>
        </div>
      </div>
        <div className="current--project">
          <div className="curr-project">
          </div>
        </div>
    </div>
  </div>
  </section>
  )
}


export default Projects