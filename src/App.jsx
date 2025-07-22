
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <div className="main">

        <SideBar />

        <div className="main-content">
          <Navbar />

          <div className="cards">
            <Outlet />
            {/* all pages are here. */}
          </div>


          <div className="footer">
            <div className="line"></div>
          </div>

        </div>

      </div>



    </>
  )
}

export default App
