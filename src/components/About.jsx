import my_photo from '../my-pic.png'

const About = () => {
    return(
        <div>
            <h1 className='about_me'>About Me</h1>
            <div className='about-container'>
            <img src={my_photo} className='my_pic' alt='my photo'/>
            <p className='about-text'>I am a solutions-driven software developer with a sharp, 
                analytical mind who is highly motivated by challenge.
                I am passionate about creating tangible solutions that make an impact on those around me, and love to learn and share my knowledge with others. 
                My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, 
                and exceptionally versatile when faced with ambiguity or road blocks.</p>
            </div>
        </div>
    )
}

export default About