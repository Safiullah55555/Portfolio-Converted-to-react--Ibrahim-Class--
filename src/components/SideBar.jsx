import React from 'react'

const SideBar = () => {
  return (
    <div className='sidebar'>
      {/* <img src="./assets/safi.jpeg" alt="safi"> */}

      <h1>Its <span>Safi</span> Ullah.</h1>
      <ol>
        <li><i className="fa-brands fa-square-github"></i><a href="https://github.com/Safiullah55555">Github</a></li>
        <li><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/safi-ullah-563173327/">LinkedIn</a></li>
        <li><i className="fa-brands fa-square-whatsapp"></i><a href="https://web.whatsapp.com/">Whatsapp</a></li>
        <li><i className="fa-solid fa-envelope"></i><a href="mailto:safiullahsu2005@gmail.com?subject=Hello Safi&body=I%20would%20like%20to%20discuss...">Email</a></li>
      </ol>

    </div>
  )
}

export default SideBar