import React from 'react'
import Typical from 'react-typical'
import Social from './Social'

const Home = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>
                    <span className='tags'>{'<'}</span>
                    Mariia Melnikova
                    <span className='tags'>{'/>'}</span>
                </h1>
                
                <Typical
                    className='typical-style'
                    steps={['I am a Software Engineer 💻', 500, 'Full Stack Web Developer 🖇', 500, 'Front End Web Developer ✨', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <Social />
        </div>
    )
}

export default Home