import "pages/projects/CareerCue/CareerCue.scss"
import 'pages/projects/variables.scss'

import logo from '/careercue/Logo.png'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectPrize from "components/project-prize/ProjectPrize"
import { prizes } from "components/project-prize/prizes"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"

const CareerCue = () => {
    return (
        <div className="careercue-container">
            <div className="careercue-banner-container">
                <div className="careercue-banner">
                    <div className="careercue-banner-img">
                        <img src={logo}/>
                    </div>
                    <div className="careercue-banner-headings">
                        <div className="careercue-banner-heading1">
                            CareerCue
                        </div>
                        <p className="careercue-banner-heading2">
                            Get interview-ready with ease: <br/>
                            your success starts here!
                        </p>
                    </div>
                </div>
            </div>
            <ProjectInspo {...inspiration.careercue} />
            <ProjectDesc {...description.careercue} />
            <ProjectTech {...technologies.careercue} />
            <ProjectPrize {...prizes.careercue}/>
        </div>
    );
 };
 
 export default CareerCue;