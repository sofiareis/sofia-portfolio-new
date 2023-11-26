import './ProjecPrize.scss'

const ProjectPrize = (prize: {prizes: string[], img: string, renew?: boolean}) => {
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
                                {prize.prizes.map((prize) =>(
                                        <div className="project-prizes-desc">
                                            <p>{prize}</p>
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