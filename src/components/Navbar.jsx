
import { Link } from 'react-router-dom'

const Navbar = () => {
        return (

                <div className="sticky-nav-options">


                        <Link to="/">About</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/clients">Clients</Link>


                        {/* <a href="#" className="active">About</a>
                        <a href="skills.html">Skills</a>
                        <a href="projects.html">Projects</a>
                        <a href="clints.html">Clients</a> */}
                </div>
        )
}

export default Navbar