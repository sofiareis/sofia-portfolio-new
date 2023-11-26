import './ProjectTech.scss'

const ProjectTech = (project: {front: string[], back: string[], img: string, backgroundcolor: string, label: string, textlabel: string, textcolor: string, renew?: boolean}) => {
    
    const containerClass = project.renew? 'renew-tech-container' : 'project-tech-container';
    return ( 
        <div className={containerClass} style={{backgroundColor: project.backgroundcolor, color: project.textcolor}}>
                <div className="project-tech">
                    <div className="project-desc-title">
                        Project Technologies
                    </div>
                    <div className="project-tech-wrap1">
                        <div className="project-tech-wrap2">
                            <div className="project-tech-column">
                                <div className="project-tech-img">
                                    <img src={project.img}/>
                                </div>
                            </div>
                        </div>
                        <div className="project-tech-desc">
                            <div className="project-tech-front">
                                <p>Frontend</p>
                                {project.front.map((tech) =>(
                                    <div className="project-tech-label" style={{backgroundColor: project.label, color: project.textlabel}}>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div className="project-tech-front">
                                <p>Backend</p>
                                {project.back.map((tech) =>(
                                    <div className="project-tech-label" style={{backgroundColor: project.label, color: project.textlabel}}>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProjectTech;