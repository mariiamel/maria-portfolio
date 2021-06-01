import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#FAEBD7'}}>
            <div className="container">
                <a className="navbar-brand" href="/">MM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="about" smooth={true} duration={1000}>about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="skills" smooth={true} duration={1000}>skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="works" smooth={true} duration={1000}>projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contact" smooth={true} duration={1000}>contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
