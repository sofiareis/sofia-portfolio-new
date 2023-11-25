import './ProjecPrize.scss'

const ProjectPrize = (prize: {prizes: string[], img: string, renew?: boolean}) => {
    const containerClass = prize.renew? 'renew-prizes-container' : 'project-prizes-container';
    return ( 
        <div className={containerClass}>
                <div className="project-prizes">
                    <div className="project-prizes-column">
                        <div className="project-desc-title">
                            Product Prizes
                        </div>
                        {prize.prizes.map((prize) =>(
                                <div className="project-prizes-desc">
                                    <p>{prize}</p>
                                </div>
                            ))}
                    </div>
                    <div className="project-prize-img">
                        <img src={prize.img}/>
                    </div>
                </div>
            </div>
    );
};

export default ProjectPrize;