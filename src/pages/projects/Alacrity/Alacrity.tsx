import "pages/projects/Alacrity/Alacrity.scss"
import 'pages/projects/variables.scss'

import logo from '/alacrity/Logo.png'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"


const Alacrity = () => {
    return (
        <div className="alacrity-container">
            <div className="alacrity-banner-container">
                <div className="alacrity-banner">
                    <div className="alacrity-banner-img">
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            <ProjectInspo {...inspiration.alacrity} />
            <ProjectDesc {...description.alacrity} />
            <ProjectTech {...technologies.alacrity} />
        </div>
    );
 };
 
 export default Alacrity;