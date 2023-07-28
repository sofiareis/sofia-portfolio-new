import "pages/projects/alacrity/alacrity.scss"
import 'pages/projects/variables.scss'

import logo from '/alacrity/Logo.png'
import desc1 from '/alacrity/calendar.png'
import desc2 from '/alacrity/task.png'
import inspo from '/alacrity/home.png'
import tech from '/alacrity/tech.svg'


const Alacrity = () => {
    return (
        <div className="alacrity-container">
            <div className="alacrity-banner-container">
                <div className="alacrity-banner">
                    <div className="alacrity-banner-img">
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            <div className="alacrity-inspo-container">
                <div className="alacrity-inspo">
                    <div className="alacrity-inspo-column">
                        <div className="alacrity-title">
                            The App
                        </div>
                        <div className="alacrity-inspo-desc">
                            Alacrity is a web app meant to help students manage their time. It provides an interface for students to enter their due dates, plan work sessions and rearrange those work sessions to spread the work out more evenly.
                        </div>
                    </div>
                    <div className="alacrity-inspo-img">
                        <img src={inspo}/>
                    </div>
                </div>
            </div>
            <div className="alacrity-desc-container">
                <div className="alacrity-desc">
                    <div className="alacrity-title">
                        Product Description
                    </div>
                    <div className="alacrity-desc-container-column">
                        <div className="alacrity-desc-container-desc1">
                            <div className="alacrity-desc-desc1">
                                Alacrity contains a calendar view where it displays user’s tasks and users can manually move their workload around the calendar.
                                <br/>The app automatically optimizes their personal calendar using algorithms to spread work out as evenly as possible
                            </div>
                            <div className="alacrity-desc-desc1-img">
                                <img src={desc1}/>
                            </div>
                        </div>
                        <div className="alacrity-desc-container-desc2">
                            <div className="alacrity-desc-desc2-img">
                                <img src={desc2}/>
                            </div>
                            <div className="alacrity-desc-desc2">
                                Users can add tasks to the calendar by filling out the options which will then be presented on their calendar in the most optimized way.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alacrity-tech-container">
                <div className="alacrity-tech">
                    <div className="alacrity-tech-column">
                        <div className="alacrity-title">
                            Product Technologies
                        </div>
                        <div className="alacrity-tech-img">
                            <img src={tech}/>
                        </div>
                    </div>
                    <div className="alacrity-tech-desc">
                        <div className="alacrity-tech-front">
                            Frontend
                            <div className="alacrity-tech-label">
                                Figma UI design
                            </div>
                            <div className="alacrity-tech-label">
                                React
                            </div>
                            <div className="alacrity-tech-label">
                                Apache Server
                            </div>
                        </div>
                        <div className="alacrity-tech-back">
                            Backend
                            <div className="alacrity-tech-label">
                                Flask
                            </div>
                            <div className="alacrity-tech-label">
                                MySQL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default Alacrity;