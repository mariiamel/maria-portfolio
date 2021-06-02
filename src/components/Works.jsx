import guess from '../assets/guess.png'
import coffeeme from '../assets/coffeeshop.png'
import tripTracker from '../assets/trip-tracker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Works () {
    return (
        <div>
            <h1 className='works'>Projects</h1>
            <div className='works-container'>

                <div className='single-work work-left'>
                    <h1>Trip Tracker</h1>
                    <span className='project'>
                        <img src={tripTracker} alt='trip tracker project'  className='trip'/>

                        <p><b>MERN Full-Stack Web Application</b> allowing users to stay organized while traveling.</p>
                        <p>Implemented MongoDB database with Mongoose ODM and Express.js on the Back end and React on the Front end</p>
                        <p>Dynamically integrated asynchronous Axios API calls with minimization efforts to reduce latency and increase app’s speed and overall smoothness</p>
                        <p>Built JSON Web Tokens for users authentication</p>
                        
                        <p><b>Tech:</b> React, Javascript, Node.js, Express.js, Mongoose, MongoDB, Bcrypt, Axios, JWT, HTML and CSS</p>
                        <p><b>Login:</b> email - user@new.com, password - usernew</p>

                        <a href='https://triptracker.netlify.app/' target="_blank" rel='noreferrer noopener' className='btn-left'>Demo</a>
                        <a href="https://github.com/mariiamel/project3_client" target="_blank" rel='noreferrer noopener' className='btn-left'>
                            <FontAwesomeIcon className="icon-social" icon={faGithub} />
                        </a>
                    </span>
                </div>

                <div className='single-work work-right'>
                    <h1>CoffeeMe</h1>
                    <span className='project'>
                        <img src={coffeeme} alt='coffee me project' className='coffeee'/>
                        <p><b>Full- Stack Web Application</b> allowing users to search for the coffeeshops and add them to favorite list.</p>
                        <p>Coded a User login system, storing encrypted information in cookies and SQL, to allow a specific user experience while maintaining user privacy</p>
                        <p>Exported data from APIs to SQL database utilizing Javascript and EJS to render searched coffeeshops where readability and organization are maximized Implemented the entire site through sequelize, following full RESTful routing, giving the user access to full CRUD functionality on the site</p>
                        <p><b>Tech:</b> Javascript, EJS, Sequelize, Postgres, Express.js, Node.js, API, axios</p>
                        <p><b>Login:</b> username: test, email: test@gmail.com, password:test</p>
                        
                        <a href='https://second-project-coffeeme.herokuapp.com/' target="_blank" rel='noreferrer noopener' className='btn-right'>Demo</a>
                        <a href="https://github.com/mariiamel/Project_2" target="_blank" rel='noreferrer noopener' className='btn-right'>
                            <FontAwesomeIcon className="icon-social" icon={faGithub} />
                        </a>
                    </span>
                </div>

                <div className='single-work work-left'>
                    <h1>Guess Where</h1>
                    <span className='project'>
                        <img src={guess} alt='guess where game' className='guess'/>

                        <p><b>Front-End Web Game.</b></p>
                        <p>Challenge yourself to see if you can guess where the item is hidden</p>
                        <p>Developed an interactive gaming application with functional Javascript logic that allows a user to guess on its attributes against a computer opponent</p>
                        <p>Built unique Javascript functionality to keep track of user’s level, attempts, items to guess that is based on real value</p>
                        <p><b>Tech:</b> Javascript, HTML, CSS(Flexbox) and DOM manipulation</p>

                        <a href='https://mariiamel.github.io/' target="_blank" rel='noreferrer noopener' className='btn-left'>Demo</a>
                        <a href="https://github.com/mariiamel/Guess-where-Game" target="_blank" rel='noreferrer noopener' className='btn-left'>
                            <FontAwesomeIcon className="icon-social" icon={faGithub} />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

