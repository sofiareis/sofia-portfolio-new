import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectInspo.scss'
import { projectLinks } from 'components/Links';
import React from 'react';

const ProjectInspo = (project: {inspo: string, img: string, backgroundcolor: string, textcolor: string, link?: string, chess?: boolean, box?: boolean, renew?: boolean}) => {
    let boxImage = project.box? 'project-inspo-img' : 'project-inspo-img-box'
    boxImage = project.chess? 'chessmate-inspo-img' : boxImage;
   // const containerClass = project.renew? 'renew-tech-container' : 'project-tech-container';
    //const containerClass = project.alacrity? 'renew-tech-container' : 'project-tech-container';
    return (  
        project.renew? 
            <div className="renew-inspo-container">
                <div className="project-inspo">
                    <div className="project-desc-title">
                        The Inspiration
                    </div>
                    <div className="project-inspo-wrap1">
                        <div className="project-inspo-wrap2">
                           <div className="project-inspo-desc">
                                    {project.inspo.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                        {line}
                                        <br /> <br />
                                        </React.Fragment>
                                    ))}
                            </div>
                            <div className="project-code">
                                <p>Check out the code:</p>
                                <a target="_blank" href={project.link}>
                                    <FontAwesomeIcon icon={projectLinks.icon} className='project-link'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :
            <div className="project-inspo-container" style={{backgroundColor: project.backgroundcolor, color: project.textcolor}}>
                <div className="project-inspo">
                    <div className="project-desc-title">
                        The Inspiration
                    </div>
                    <div className="project-inspo-wrap1">
                        <div className="project-inspo-wrap2">
                            <div className="project-inspo-column">
                                <div className="project-inspo-desc">
                                    {project.inspo.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                        {line}
                                        <br /> <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                                {project.link ? 
                                <div className="project-code">
                                    <p>Check out the code:</p>
                                    <a target="_blank" href={project.link}>
                                        <FontAwesomeIcon icon={projectLinks.icon} className='project-link'/>
                                    </a>
                                </div>
                               : <> </>}
                            </div>
                        </div>
                        <div className={boxImage}>
                            <img src={project.img}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};
        
export default ProjectInspo;

/*
<div className="renew-inspo-container">
                <div className="project-inspo">
                    <div className="project-desc-title">
                        The Inspiration
                    </div>
                    <div className="project-inspo-desc">
                            {project.inspo}
                    </div>
                    <div className="project-code">
                            <p>Check out the code:</p>
                    <a target="_blank" href={project.link}>
                            <FontAwesomeIcon icon={projectLinks.icon} className='project-link'/>
                    </a>
                    </div>
                </div>
            </div>
        */