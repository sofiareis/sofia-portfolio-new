import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjecPrize.scss'
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

type prizes = {
    description: string;
    prize: string;
}

const ProjectPrize = (prize: {prizes: prizes[], img: string, renew?: boolean}) => {
    const containerClass = prize.renew? 'renew-prizes-container' : 'project-prizes-container';
    return ( 
        <div className={containerClass}>
                <div className="project-prizes">
                    <div className="project-desc-title">
                        Project Prizes
                    </div>
                    <div className="project-prizes-wrap1">
                        <div className="project-prizes-wrap2">
                            <div className="project-prizes-column">
                                {prize.prizes.map((item) =>(
                                        <div className="project-prizes-desc">
                                            <p id='title'><FontAwesomeIcon icon={faTrophy} className='project-prizes-icon'/> {item.prize}</p>
                                            <p>{item.description}</p>

                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="project-prize-img">
                            <img src={prize.img}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProjectPrize;