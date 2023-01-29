import React from 'react'
import './style.scss'
import CallToAction from '../shared/CallToAction'
import techImg from '../../images/tech-icons.png'
import Section from '../shared/section'
import { AiOutlineCloudDownload } from 'react-icons/ai'
const Skills = () => {
  return (
    <Section background='dark' id='skills'>
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={techImg} alt="" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam numquam iure, eos consequatur magnam soluta inventore autem harum! Sequi commodi voluptas neque delectus natus a quos dolorem deleniti est. Dolore excepturi reiciendis similique saepe!lorem10
                </p>
                <CallToAction text='Download CV' icon={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
    </Section>
  )
}

export default Skills
