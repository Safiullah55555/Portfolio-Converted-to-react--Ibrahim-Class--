import React from 'react'

const Projects = () => {
  return (
    <div>
      <h2>PROJECTS</h2>

      <div className="cards-container">
        <div className="card">
          {/* <img src="./assets/project blog web.png" className="card-img" alt=""> */}
          <p className="card-title">Blog website</p>
          <p className="card-info"><a href="https://github.com/Safiullah55555/blog-website"><i className="fa-brands fa-github"></i></a></p>
        </div>
        <div className="card">
          {/* <img src="./assets/project car web.png" className="card-img" alt=""> */}
          <p className="card-title">Mechanic Website</p>
          <p className="card-info"><a href="https://github.com/Safiullah55555/One-page-Site"><i className="fa-brands fa-github"></i></a><a href="https://safiullah55555.github.io/One-page-Site/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
        </div>
        <div className="card">
          {/* <img src="./assets/project Todo.jpg" className="card-img" alt=""> */}
          <p className="card-title">TODO App</p>
          <p className="card-info"><a href="https://github.com/Safiullah55555/Todo-App"><i className="fa-brands fa-github"></i></a></p>
        </div>
        <div className="card">
          {/* <img src="./assets/project symon.jpg" className="card-img" alt=""> */}
          <p className="card-title">Symon Says Game</p>
          <p className="card-info"></p>
        </div>
        <div className="card">
          {/* <img src="./assets/project lottery game.jpg" className="card-img" alt=""> */}
          <p className="card-title">Lottery Game</p>
          <p className="card-info"><a href="https://github.com/Safiullah55555/lottery-game"><i className="fa-brands fa-github"></i></a></p>
        </div>


      </div>


    </div>
  )
}

export default Projects