import React from 'react'

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <div className="wrapper">
          <ul className="nav-items">
            <a className="items" href="#home">Home</a>
            <a className="items" href="#about">About</a>
            <a className="items" href="projects">Projects</a>
            <a className="items" href="contact">Contact</a>
            <a className="items" href="blog"></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar