import './ProjectDesc.scss'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDesc = (project: {desc1: string, desc2: string, img1: string, img2: string, img3?: string, img4?: string, img5?: string, type: string, background?: string}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
      };

    return (
        project.type == '1'? 
            <div className="project-desc-container">
                <div className="project-desc">
                    <div className="project-desc-title">
                        Project Description
                    </div>
                    <div className="project-desc-column">
                        <div className="project-desc1-container">
                            <div className="project-desc1">
                                {project.desc1.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br /><br />
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="project-desc1-img">
                                <img src={project.img1}/>
                                <img src={project.img2}/>
                            </div>
                        </div>
                        <div className="project-desc2-container">
                            <div className="project-desc2-img">
                                <img src={project.img3}/>
                                <img src={project.img4}/>
                            </div>
                            <div className="project-desc2">
                                {project.desc2.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br /><br />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :
        project.type == '2'?
        <div className="project-desc-container" style={{backgroundColor: project.background}}>
            <div className="project-desc">
                <div className="project-desc-title">
                    Project Description
                </div>
                <div className="project-desc-column">
                    <div className="project-desc1-container">
                        <div className="project-desc1">
                            {project.desc1.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="project-desc1-img2">
                            <img src={project.img1}/>
                        </div>
                    </div>
                    <div className="project-desc2-container">
                        <div className="project-desc2-img2">
                        <img src={project.img2}/>
                        </div>
                        <div className="project-desc2">
                            {project.desc2.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        project.type == '3'?
            <div className="project-desc-container">
                <div className="project-desc">
                    <div className="project-desc-title">
                        Project Description
                    </div>
                    <div className="renew-desc-container">
                        <div className="renew-desc-img">
                            <img src={project.img1}/>
                            <img src={project.img2}/>
                        </div>
                        <div className="renew-desc">
                            {project.desc1.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        :
            <div className="project-desc-container">
                <div className="project-desc">
                    <div className="project-desc-title">
                        Project Description
                    </div>
                    <div className="project-desc-column">
                    <div className="project-desc1-container">
                        <div className="project-desc1">
                            {project.desc1.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </div>
                        <div className='project-slider'>
                            <Slider {...settings} >
                                <div className="op-desc-img">
                                    <img src={project.img1}/>
                                    <p>Search page</p>
                                </div>
                                <div className="op-desc-img">
                                    <img src={project.img2}/>
                                    <p>Card successfully added to wishlist</p>
                                </div>
                                <div className="op-desc-img">
                                    <img src={project.img3}/>
                                    <p>Card already in wishlist</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="project-desc2-container">
                        <div className='project-slider'>
                            <Slider {...settings}>
                                <div className="op-desc-img">
                                    <img src={project.img4}/>
                                    <p>Collection page</p>
                                </div>
                                <div className="op-desc-img">
                                    <img src={project.img5}/>
                                    <p>Missing Page</p>
                                </div>
                            </Slider>
                        </div>
                        <div className="project-desc2">
                            {project.desc2.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};
        
export default ProjectDesc;