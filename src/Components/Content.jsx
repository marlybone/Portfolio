import React from 'react'

const Content = () => {
  return(
    <div className="content-section">
      <div className='picture-me'>
        <img src="src/img/img.jpg"/>
      </div>
      <div className ='content-container'>   
        <div className='items-content'>
          <h1>Marlon Stevenson</h1>
          <h2>Frontend Developer</h2>
          <h3>Javascript | React | CSS | HTML </h3>
          <p>Description, short, to the point</p>
          <button>Resume</button>
        </div>
      </div>
    </div>
  )
}


export default Content