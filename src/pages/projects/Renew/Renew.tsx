import "pages/projects/Renew/Renew.scss"
import 'pages/projects/variables.scss'
import logo from '/renew/Logo.png'
import desc2 from '/renew/desc2.png'
import desc3 from '/renew/desc3.png'
import vector2 from '/renew/vector2.png'
import tech from '/renew/tech.svg'
import prize from '/renew/prize.svg'

const Renew = () => {
    return (
        <div className="renew-container">
            <div className="renew-banner-container">
                <div className="renew-banner">
                    <div className="renew-banner-img">
                        <img src={logo}/>
                    </div>
                    <div className="renew-banner-headings">
                        <p className="renew-banner-heading1">
                            Renew = new life for refuges
                        </p>
                        <p className="renew-banner-heading2">
                            Provide support and resources for<br/>
                            immigrants in a new country
                        </p>
                    </div>
                </div>
            </div>
            <div className="renew-inspo-container">
                <div className="renew-inspo">
                    <div className="renew-inspo-column">
                        <div className="renew-title">
                            The Inspiration
                        </div>
                        <div className="renew-inspo-desc">
                            In light of the war in Ukraine today, millions of Ukranians have fled into neighboring countries into a frightening and uncertain future. Our team wanted to create something to help refugees in similar situations as they navigate life in a new, unfamiliar country. 
                        </div>
                    </div>
                </div>
            </div>
            <div className="renew-desc-container">
                <div className="renew-desc">
                    <div className="renew-title">
                        Product Description
                    </div>
                    <div className="renew-desc-container-feat">
                        <div className="renew-desc-feat-img">
                            <img src={desc2}/>
                            <img src={desc3}/>
                        </div>
                        <div className="renew-desc-feat">
                            Our project, renew, is an app designed to provide support and resources for immigrants in a new country. The app name was chosen to represent the fact that we want to help refugees as they start a new life in a new country, hence renew.<br/>
                            The app features a community function where users are grouped into communities based on where they came from and where they have immigrated to. Within these communities, users can post and comment about any questions or resources for users to learn from each other. Additionally, there is a map feature which filters for nearby food banks, hospitals, and areas with recent criminal activity.    
                        </div>
                    </div>
                </div>
            </div>
            <div className="renew-tech-container">
                <div className="renew-tech">
                    <div className="renew-tech-column">
                        <div className="renew-title">
                            Product Technologies
                        </div>
                        <div className="renew-tech-img">
                            <img src={tech}/>
                        </div>
                    </div>
                    <div className="renew-tech-desc">
                        <div className="renew-tech-front">
                            Frontend
                            <div className="renew-tech-label">
                                Figma UI design
                            </div>
                            <div className="renew-tech-label">
                                React Native
                            </div>
                            <div className="renew-tech-label">
                                Redux
                            </div>
                        </div>
                        <div className="renew-tech-back">
                            Backend
                            <div className="renew-tech-label">
                                Google Maps API
                            </div>
                            <div className="renew-tech-label">
                                Node.js
                            </div>
                            <div className="renew-tech-label">
                                Firebase
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="renew-prizes-container">
                <div className="renew-prizes">
                    <div className="renew-prizes-column">
                        <div className="renew-title">
                            Product Prizes
                        </div>
                        <div className="renew-prizes-desc">
                            <p>- 3rd Place at cmd-f Hackathon 2022</p>
                            <p>- UBC Project Incubation Prize </p>
                            <p>- SAP: Most Coherent UX/UI Design Using the UI5 SDK and/or Web Components</p>
                        </div>
                    </div>
                    <div className="renew-prize-img">
                        <img src={prize}/>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default Renew;