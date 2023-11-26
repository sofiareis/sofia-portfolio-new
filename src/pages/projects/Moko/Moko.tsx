import "pages/projects/Moko/Moko.scss"
import 'pages/projects/variables.scss'

import logo from '/moko/Logo.png'
import desc1 from '/moko/desc1.png'
import desc2 from '/moko/desc2.png'
import desc3 from '/moko/desc3.png'
import desc4 from '/moko/desc4.png'
import leaf1 from '/moko/leaf1.png'
import leaf2 from '/moko/leaf2.png'
import leaf3 from '/moko/leaf3.png'
import tech from '/moko/tech.svg'
import eco from '/moko/ecology.svg'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"


const Moko = () => {
    return (
        <div className="moko-container">
            <div className="moko-banner-container">
                <div className="moko-banner">
                    <div className="moko-banner-headings">
                        <div className="moko-banner-heading1">
                            <p>Welcome to</p>
                            <div className="moko-banner-img">
                                <img src={logo}/>
                            </div>
                        </div>
                        <p className="moko-banner-heading2">
                            market + local
                        </p>
                    </div>
                    
                </div>
            </div>
            <ProjectInspo {...inspiration.moko} />
            <ProjectDesc {...description.moko}/>
            <ProjectTech {...technologies.moko} />
        </div>
    );
 };
 
 export default Moko;