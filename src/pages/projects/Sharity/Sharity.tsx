import "pages/projects/Sharity/Sharity.scss"
import 'pages/projects/variables.scss'
import logo from '/sharity/Logo.png'
import user1 from '/sharity/user1.png'
import user2 from '/sharity/user2.png'
import charity1 from '/sharity/charity1.png'
import charity2 from '/sharity/charity2.png'
import ProjectTech from "components/project-tech/ProjectTech"
import { prizes } from "components/project-prize/prizes"
import { technologies } from "components/project-tech/technologies"
import ProjectPrize from "components/project-prize/ProjectPrize"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"

const Sharity = () => {
    return (
        <div className="sharity-container">
            <div className="sharity-banner">
                <div className="sharity-banner-headings">
                    <p className="sharity-banner-heading1">
                        She + share + charity: 
                    </p>
                    <p className="sharity-banner-heading2">
                        Empowering women through <br/>
                        donations and sustainability.
                    </p>
                    <p className="sharity-banner-heading3">
                        Welcome to Sharity.
                    </p>
                </div>
                <div className="sharity-banner-img">
                    <img src={logo}/>
                </div>
            </div>
            <ProjectInspo {...inspiration.sharity} />
            <ProjectDesc {...description.sharity}/>
            <ProjectTech {...technologies.sharity} />
            <ProjectPrize {...prizes.sharity}/>
        </div>
    );
 };
 
 export default Sharity;