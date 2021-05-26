// import my_photo from '../my-pic.png'
import my_photo from '../my-img.jpg'

export default function About () {
    return(
        <div className='about'>
            <h1 className='about_me'>About Me</h1>

            <div className='about-container'>
                <img src={my_photo} className='my_pic' alt='my_photo'/>

                <div className='about-text'>
                <p>I am a solutions-driven software developer with a sharp, 
                    analytical mind who is highly motivated by challenge.</p>
                <p>I'm always looking to grow as a developer and continue adding frameworks and technologies to my toolbelt.</p> 
                <p>My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, 
                    and exceptionally versatile when faced with ambiguity or road blocks.</p>
            </div>
            </div>
        </div>
    )
}
