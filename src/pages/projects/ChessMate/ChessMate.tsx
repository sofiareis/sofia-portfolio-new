import "pages/projects/ChessMate/ChessMate.scss"
import 'pages/projects/variables.scss'

import logo from '/chessmate/Logo.png'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"


const ChessMate = () => {
    return (
        <div className="chessmate-container">
            <div className="chessmate-banner-container">
                <div className="chessmate-banner">
                    <div className="chessmate-banner-img">
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            <ProjectInspo {...inspiration.chessmate} />
            <ProjectDesc {...description.chessmate}/>
            <ProjectTech {...technologies.chessmate} />
        </div>
    );
 };
 
 export default ChessMate;