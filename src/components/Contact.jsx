import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import pdf from '../assets/mariia_melnikova_resume.pdf'

export default function Contact () {
    return(
        <div className='contact-component'>
            <h1 className="contact-me">Contact Me</h1>
                <div className="contact">
                    <div><a href="https://www.linkedin.com/in/mariia-mel/" target="_blank" rel='noreferrer noopener'><FontAwesomeIcon className="icon-social-contact" icon={faLinkedin} /></a></div>
                    <div><a href="https://github.com/mariiamel" target="_blank" rel='noreferrer noopener'><FontAwesomeIcon className="icon-social-contact" icon={faGithub} /></a></div>
                    <div><a href="mailto: mariiamelnikova96@gmail.com"><FontAwesomeIcon className="icon-social-contact" icon={faEnvelope} /></a></div>
                </div>
                    <p><a href={pdf} target="_blank" className="cv icon-social-contact" rel='noreferrer noopener'>Resume</a></p>
        </div>
    )
}

