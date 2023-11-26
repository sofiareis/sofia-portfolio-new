import "./OnePiece.scss"
import 'pages/projects/variables.scss'
import logo from '/onepiece/onepiecelogo.png'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectInspo from "components/project-inspo/ProjectInspo"
import { inspiration } from "components/project-inspo/inspo"
import ProjectDesc from "components/project-desc/ProjectDesc"
import { description } from "components/project-desc/description"

const OnePiece = () => {
    return (
        <div className="onepiece-container">
            <div className="onepiece-banner-container">
                <div className="onepiece-banner">
                    <div className="onepiece-banner-img">
                        <img src={logo}/>
                    </div>
                    <div className="onepiece-banner-headings">
                        <div className="onepiece-banner-heading1">
                            One Piece
                        </div>
                        <p className="onepiece-banner-heading2">
                            CARDS TRACKER
                        </p>
                    </div>
                </div>
            </div>
            <ProjectInspo {...inspiration.onepiece} />
            <ProjectDesc {...description.onepiece} />
            <ProjectTech {...technologies.onepiece} />
        </div>
    );
};

export default OnePiece;