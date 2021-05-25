// import logo from '../logo.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#FAEBD7'}}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    {/* <img src={logo} alt="logo"/> */}
                    LOGO
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="about" smooth={true} duration={1000}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="works" smooth={true} duration={1000}>Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar