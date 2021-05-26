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
                    <img />
                    <p>Description here</p>
                    <button>
                        <a href='' target="_blank" rel='noreferrer noopener'>view LIVE</a>
                    </button>
                    
                    <button>
                        <a href="" target="_blank" rel='noreferrer noopener'>view on github</a>
                    </button>
                </div>

                <div className='single-work work-right'>
                    <h1>CoffeeMe</h1>
                    <img />
                    <p>Description here</p>
                    <button>
                        <a href='https://second-project-coffeeme.herokuapp.com/' target="_blank" rel='noreferrer noopener'>view LIVE</a>
                    </button>
                    
                    <button>
                        <a href="https://github.com/mariiamel/Project_2" target="_blank" rel='noreferrer noopener'>view on github</a>
                    </button>
                </div>

                <div className='single-work work-left'>
                    <h1>Guess Where</h1>
                    <img />
                    <p>Description here</p>
                    <button>
                        <a href='https://mariiamel.github.io/' target="_blank" rel='noreferrer noopener'>view LIVE</a>
                    </button>
                    
                    <button>
                        <a href="" target="_blank" rel='noreferrer noopener'>view on github</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

