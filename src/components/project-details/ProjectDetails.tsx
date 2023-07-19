import "components/project-details/ProjectDetails.scss"
import { useParams } from "react-router-dom";
import {cardsdetails} from 'components/project-details/ProjectDetailsInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = () => {
    let {id} = useParams();
    let project = cardsdetails[id as keyof typeof cardsdetails];
    const renderprizes = () => {
        if(project.prizes){ 
            return(
            <div>
                <p className="details-heading">Product Prizes</p>
                <p>{project.prizes}</p>
            </div>
            );
        }
    }
    const rendercode = () => {
        if(project.code){ 
            return(
            <div className="details-code">
                <p>Checkout the code</p>
                <a target="_blank" href={project.code} className='details-'>
                    <FontAwesomeIcon icon={faGithub} className='details-git'/>
                </a>
            </div>
            );
        }
    }
    
    return (
    <div className="details-container">
        <p className="details-title">{project.title}</p>
        <div className="details-row">
            <div className="details-photo">
                <img src={project.images}></img>
            </div>
            <div className="details-overview">
                <p>{project.overview}</p>
            </div>
        </div>
        <div className="details-about">
            {rendercode()}
            <p className="details-heading">Product Description</p>
            <p>{project.description}</p>
            <p className="details-heading">Product Technologies</p>
            <p>{project.technologies}</p>
            {renderprizes()}
        </div>
    </div>
    );
 };
 
 export default ProjectDetails;