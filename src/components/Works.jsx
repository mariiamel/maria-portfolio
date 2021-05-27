export default function Works () {
    return (
        <div>
            <h1 className='works'>Works</h1>

            <div className='works-container'>

                {/* <div className='single-work'>
                    <h1>Scheduler app</h1>
                    <img />
                    <p>Description here</p>
                    <a>view LIVE</a>
                    <button>view on github</button>
                </div> */}

                <div className='single-work work-left'>
                    <h1>Trip Tracker</h1>
                    {/* <img /> */}
                    <p>
                        MERN Full-Stack Web Application allowing users to stay organized while traveling.
                        <p>Tech: React, Javascript, Node.js, Express.js, Mongoose, MongoDB, Bcrypt, Axios, JWT, HTML and CSS
                        Implemented MongoDB database with Mongoose ODM and Express.js on the Back end and React on the Front end
                        Dynamically integrated asynchronous Axios API calls with minimization efforts to reduce latency and increase app’s speed and overall smoothness
                        Built JSON Web Tokens for users authentication</p>
                    </p>
                    <button>
                        {/* <a href='' target="_blank" rel='noreferrer noopener'>view LIVE</a> */}
                    </button>
                    
                    <button>
                        {/* <a href="" target="_blank" rel='noreferrer noopener'>view on github</a> */}
                    </button>
                </div>

                <div className='single-work work-right'>
                    <h1>CoffeeMe</h1>
                    {/* <img /> */}
                    <p>
                    Full- Stack Web Application allowing users to search for the coffeeshops and add them to favorite list.
                    <p>Tech: Javascript, EJS, Sequelize, Postgres, Express.js, Node.js, API, axios
                    Coded a User login system, storing encrypted information in cookies and SQL, to allow a specific user experience while maintaining user privacy
                    Exported data from APIs to SQL database utilizing Javascript and EJS to render searched coffeeshops where readability and organization are maximized Implemented the entire site through sequelize, following full RESTful routing, giving the user access to full CRUD functionality on the site</p>
                    </p>
                    <p>Login: username: test, email: test@gmail.com, password:test</p>
                    <button>
                        <a href='https://second-project-coffeeme.herokuapp.com/' target="_blank" rel='noreferrer noopener'>view LIVE</a>
                    </button>
                    
                    <button>
                        <a href="https://github.com/mariiamel/Project_2" target="_blank" rel='noreferrer noopener'>view on github</a>
                    </button>
                </div>

                <div className='single-work work-left'>
                    <h1>Guess Where</h1>
                    {/* <img /> */}
                    <p>
                    Front-End Web Game.
                    Challenge yourself to see if you can guess where the item is hidden
                    <p>Tech: Javascript, HTML, CSS(Flexbox) and DOM manipulation
                    Developed an interactive gaming application with functional Javascript logic that allows a user to guess on its attributes against a computer opponent Built unique Javascript functionality to keep track of user’s level, attempts, items to guess that is based on real value
                    </p></p>
                    <button>
                        <a href='https://mariiamel.github.io/' target="_blank" rel='noreferrer noopener'>view LIVE</a>
                    </button>
                    
                    <button>
                        {/* <a href="" target="_blank" rel='noreferrer noopener'>view on github</a> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

