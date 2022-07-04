import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import pdf from '../assets/mariia_melnikova_resume.pdf'

const Social = () => {
    return (
        <div className="social">
            <div><a href="https://www.linkedin.com/in/mariia-mel/" target="_blank" rel='noreferrer noopener'><FontAwesomeIcon className="icon-social" icon={faLinkedin} /></a></div>
            <div><a href="https://github.com/mariiamel" target="_blank" rel='noreferrer noopener'><FontAwesomeIcon className="icon-social" icon={faGithub} /></a></div>
            <div><a href="mailto: mariiamelnikova96@gmail.com"><FontAwesomeIcon className="icon-social" icon={faEnvelope} /></a></div>
            <div><a href={pdf} target="_blank" className="cv icon-social" rel='noreferrer noopener'>CV</a></div>
        </div>
    )
}

export default Social