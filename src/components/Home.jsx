import React from 'react'
import Typical from 'react-typical'

const Home = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1><span className='tags'>{'<'}</span>Maria Melnikova<span className='tags'>{'/>'}</span></h1>
                <Typical
                    className='typical-style'
                    steps={['I am a Software Engineer 💻', 500, 'Full Stack Web Developer 🖇', 500, 'Front End Web Developer ✨', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
        </div>
    )
}

export default Home