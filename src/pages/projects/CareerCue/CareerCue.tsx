import "pages/projects/CareerCue/CareerCue.scss"
import 'pages/projects/variables.scss'

import logo from '/careercue/Logo.png'
import desc1 from '/careercue/desc1.png'
import desc2 from '/careercue/desc2.png'
import inspo from '/careercue/inspo.png'
import prize from '/careercue/prize.svg'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"
import ProjectPrize from "components/project-prize/ProjectPrize"
import { prizes } from "components/project-prize/prizes"


const CareerCue = () => {
    return (
        <div className="careercue-container">
            <div className="careercue-banner-container">
                <div className="careercue-banner">
                    <div className="careercue-banner-img">
                        <img src={logo}/>
                    </div>
                    <div className="careercue-banner-headings">
                        <div className="careercue-banner-heading1">
                            CareerCue
                        </div>
                        <p className="careercue-banner-heading2">
                            Get interview-ready with ease: <br/>
                            your success starts here!
                        </p>
                    </div>
                </div>
            </div>
            <div className="careercue-inspo-container">
                <div className="careercue-inspo">
                    <div className="careercue-inspo-column">
                        <div className="careercue-title">
                            The Inspiration
                        </div>
                        <div className="careercue-inspo-desc">
                        The inspiration behind CareerCue came from recognizing the challenges and anxiety many people face when preparing for job interviews. The interview process can be stressful, and many people don't have the resources to know how to best prepare for the questions that may be asked.
                        <br/>CareerCue is made for anyone who is looking to improve their interview skills. This includes beginners entering the workforce for the first time, underprivileged demographics who have limited access to career resources, moms looking to return to their careers after a long break, and people affected by the pandemic who are trying to improve their communication skills.
                        </div>
                    </div>
                    <div className="careercue-inspo-img">
                        <img src={inspo}/>
                    </div>
                </div>
            </div>
            <div className="careercue-desc-container">
                <div className="careercue-desc">
                    <div className="careercue-title">
                        Product Description
                    </div>
                    <div className="careercue-desc-container-column">
                        <div className="careercue-desc-container-record">
                            <div className="careercue-desc-record">
                                CareerCue provides a database of commonly asked behavioural interview questions across various industries. You can practice your responses by recording yourself and getting instant feedback to improve your answers.    
                            </div>
                            <div className="careercue-desc-record-img">
                                <img src={desc1}/>
                            </div>
                        </div>
                        <div className="careercue-desc-container-feed">
                            <div className="careercue-desc-feed-img">
                                <img src={desc2}/>
                            </div>
                            <div className="careercue-desc-feed">
                                Our app provides customized feedback so you can see your strengths and weaknesses based on tone, clarity, word choice, and timing. You can switch questions, restart the recording, try the same question again, and send a summary of your answers and feedback to your email for later review.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectTech {...technologies.careercue} />
            <ProjectPrize {...prizes.careercue}/>
        </div>
    );
 };
 
 export default CareerCue;