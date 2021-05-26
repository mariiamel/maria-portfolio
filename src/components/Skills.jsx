import js from '../assets/js.svg'
import html from '../assets/html5.png'
import css from '../assets/css.png'
import api from '../assets/api.png'
import bootstrap from '../assets/bootstrap.png'
import express from '../assets/express.png'
import git from '../assets/git.png'
import mongodb from '../assets/mongodb.svg'
import nodejs from '../assets/nodejs.png'
import postgresql from '../assets/postgresql.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import sequelize from '../assets/sequelize.svg'
import typescript from '../assets/typescript.png'

export default function Skills () {
    return(
        <div className='skill-box'>
                <h1 className='skills-h1'>Skills</h1>
                <div className='skills'>
                    <div><img src={js} alt="js"/><p className="lang_text">JavaScript</p></div>
                    <div><img src={react} alt="react"/><p className="lang_text">React</p></div>
                    <div><img src={typescript} alt="typescript"/><p className="lang_text">Typescript</p></div>
                    <div><img src={python} alt="python"/><p className="lang_text">Python</p></div>
                    <div><img src={html} alt="html"/><p className="lang_text">HTML</p></div>
                    <div><img src={css} alt="css"/><p className="lang_text">CSS</p></div>
                    <div><img src={bootstrap} alt="bootstrap"/><p className="lang_text">Bootstrap</p></div>
                </div>
                <div className='skills'>
                    <div><img src={nodejs} alt="node"/><p className="lang_text">Node.js</p></div>
                    <div><img src={express} alt="express"/><p className="lang_text">Express</p></div>
                    <div><img src={mongodb} alt="mongodb"/><p className="lang_text">Mongodb</p></div>
                    <div><img src={sequelize} alt="sequelize"/><p className="lang_text">Sequelize</p></div>
                    <div><img src={postgresql} alt="postgresql"/><p className="lang_text">Postgresql</p></div>
                    <div><img src={api} alt="api"/><p className="lang_text">Api</p></div>
                    <div><img src={git} alt="git"/><p className="lang_text">Git</p></div>
                </div>
            </div>
    )
}

