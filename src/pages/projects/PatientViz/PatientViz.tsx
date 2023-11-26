import "pages/projects/Patientviz/Patientviz.scss"
import 'pages/projects/variables.scss'

import doctor from '/patientviz/doctor.png'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"


const PatientViz = () => {
    return (
        <div className="patientviz-container">
            <div className="patientviz-banner-container">
                <div className="patientviz-banner">
                    <div className="patientviz-banner-img">
                        <img src={doctor}/>
                    </div>
                    <div className="patientviz-banner-headings">
                        <div className="patientviz-banner-heading1">
                            PatientViz
                        </div>
                        <p className="patientviz-banner-heading2">
                            Triage Help
                        </p>
                    </div>
                </div>
            </div>
            <ProjectInspo {...inspiration.patientviz} />
            <ProjectDesc {...description.patientviz} />
            <ProjectTech {...technologies.patientviz} />
        </div>
    );
 };
 
 export default PatientViz;