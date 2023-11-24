import "pages/resume/Resume.scss"
import {work, projects, array, education, skills, skillsSmall} from "./ResumeInfo";
import { Link } from "react-router-dom";

const Resume = () => {
    const renderexperience = (array: ({heading: string; description: string;}[] | 
        {heading: string; wheredate: string; description: string[]; skill: string[]}[] |
        {description: string; link: string}[])) => {
        if (array === work){
            return(
                <div>
                    {array.map((info) => (
                        <div className="resume-info">
                            <p className="resume-headings">{info.heading}</p>
                            <p className="resume-where">{info.wheredate}</p>
                            <ul className="resume-list">
                            {info.description.map((list) => (
                                    <li className="resume-items">{list}</li>
                            ))}
                            </ul>
                            <div className="resume-skills">
                                <ul className="resume-skills-list">
                                    {info.skill.map((skill) => (
                                        <li className="resume-skills-item">
                                        {skill}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}  
                </div>     
            );
        } else if (array === education){
            return(
                <div>
                    {education.map((info) => (
                            <div className="resume-info">
                                <p className="resume-headings">{info.heading}</p>
                                <p className="resume-edu">{info.wheredate}</p>
                                <p className="resume-edu">{info.description}</p>
                            </div>
                        ))}  
                </div>  
            );   
        } else if (array == projects) {
            return(
                <div>
                    {projects.map((info) => (
                            <div className="resume-info">
                                <p className="resume-edu">{info.description}
                                    <Link to="/projects" className="resume-link">
                                        {info.link}
                                    </Link>  
                                </p>
                            </div>
                        ))}  
                </div>  
            );   
        }
        else { 
            return(
                <div className="skills-container-small">
                    {skillsSmall.map((info) => (
                        <div className="skills-info">
                            <p className="skills-heading">{info.heading}&nbsp;</p>
                            <p className="skills-lang">{info.description}</p>
                        </div>
                    ))}   
                </div>   
            );
        }
    }

    return (
        <div className="resume-container">
            <div className="resume-background">
                <div className="skills-container">
                    {skills.map((info) => (
                        <div className="skills-info">
                            <p className="skills-heading">{info.heading}&nbsp;</p>
                            <ul>
                            {info.description.map((skill) => (
                                <li>{skill.skill}</li>
                            ))}
                            </ul>
                        </div>
                    ))}   
                </div>
                <div className="skills-small">
                    <div className="resume-title-container">
                        <p className="resume-title">Technical Skills</p>
                    </div>
                    <div className="resume-column">
                        <div className="skills-container-small">
                            {skillsSmall.map((info) => (
                                <div className="skills-info">
                                    <p className="skills-heading">{info.heading}&nbsp;</p>
                                    <p className="skills-lang">{info.description}</p>
                                </div>
                            ))}   
                        </div>   
                    </div>   
                </div>
                <div className="resume-description">
                    {array.map((info) => (
                        <div>
                            <div className="resume-title-container">
                                <p className="resume-title">{info.title}</p>
                            </div>
                            <div className="resume-column">
                                {renderexperience(info.data)}
                            </div>
                        </div>
                    ))}        
                </div>
            </div>
        </div>
    );
 };
 
 export default Resume;