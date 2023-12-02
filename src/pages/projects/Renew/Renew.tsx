import "pages/projects/Renew/Renew.scss"
import 'pages/projects/variables.scss'
import logo from '/renew/Logo2.png'
import ProjectPrize from "components/project-prize/ProjectPrize"
import { prizes } from "components/project-prize/prizes"
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"

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
            <ProjectInspo {...inspiration.renew} />
            <ProjectDesc {...description.renew} />
            <ProjectTech {...technologies.renew} />
            <ProjectPrize {...prizes.renew}/>
        </div>
    );
 };
 
 export default Renew;