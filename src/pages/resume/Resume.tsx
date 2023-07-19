import "pages/resume/Resume.scss"
import {work, projects, array, education} from "./ResumeInfo";

const Resume = () => {
    const renderexperience = (array: ({heading: string; description: string;}[] | 
        {heading: string; wheredate: string; description: string[];}[])) => {
        if (array === work || array === projects){
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

        } else { 
            return(
                <div className="skills-container">
                    {array.map((info) => (
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
            {array.map((info) => (
                <div>
                    <div className="resume-row">
                        <div className="resume-title-container">
                            <p className="resume-title">{info.title}</p>
                        </div>
                        <div className="resume-column">
                            {renderexperience(info.data)}
                        </div>
                    </div>
                    <hr className="resume-line"/>
                </div>
            ))}        
        </div>
    );
 };
 
 export default Resume;

 /*

  <div className="resume-row">
                <p className="skills-title">Technical Skills</p>
                <div className="resume-column">
                    {skills.map((info) => (
                        <div className="skills-info">
                            <p className="skills-heading">{info.heading}</p>
                           {info.description}
                        </div>
                    ))}       
                </div>   
            </div>
            <div className="resume-row">
                <p className="resume-title">Work Experience</p>
                <div className="resume-column">
                    {work.map((info) => (
                        <div className="resume-info">
                            <p className="resume-headings">{info.heading}</p>
                            <p className="resume-where">{info.wheredate}</p>
                            <ul className="resume-list">
                            {info.description.map((list) => (
                                    <li className="resume-items">{list}</li>
                            ))}
                            </ul>
                        </div>
                    ))}       
                </div>
            </div>
            <rt className="resume-line"/>
            <div className="resume-row">
                <p className="resume-title">Projects</p>
                <div className="resume-column">
                    {projects.map((info) => (
                        <div className="resume-info">
                            <p className="resume-headings">{info.heading}</p>
                            <p className="resume-where">{info.wheredate}</p>
                            <ul className="resume-list">
                            {info.description.map((list) => (
                                    <li className="resume-items">{list}</li>
                            ))}
                            </ul>
                        </div>
                    ))}       
                </div>
            </div>
*/