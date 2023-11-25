import "pages/projects/Renew/Renew.scss"
import 'pages/projects/variables.scss'
import logo from '/renew/Logo.png'
import desc2 from '/renew/desc2.png'
import desc3 from '/renew/desc3.png'
import tech from '/renew/tech.svg'
import prize from '/renew/prize.svg'
import ProjectPrize from "components/project-prize/ProjectPrize"
import { prizes } from "components/project-prize/prizes"
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"

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
            <ProjectTech {...technologies.renew} />
            <ProjectPrize {...prizes.renew}/>
        </div>
    );
 };
 
 export default Renew;