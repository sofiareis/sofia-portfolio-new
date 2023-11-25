import "pages/projects/Moko/Moko.scss"
import 'pages/projects/variables.scss'

import logo from '/moko/Logo.png'
import desc1 from '/moko/desc1.png'
import desc2 from '/moko/desc2.png'
import desc3 from '/moko/desc3.png'
import desc4 from '/moko/desc4.png'
import leaf1 from '/moko/leaf1.png'
import leaf2 from '/moko/leaf2.png'
import leaf3 from '/moko/leaf3.png'
import tech from '/moko/tech.svg'
import eco from '/moko/ecology.svg'
import ProjectTech from "components/project-tech/ProjectTech"
import { technologies } from "components/project-tech/technologies"


const Moko = () => {
    return (
        <div className="moko-container">
            <div className="moko-banner-container">
                <div className="moko-banner">
                    <div className="moko-banner-headings">
                        <div className="moko-banner-heading1">
                            <p>Welcome to</p>
                            <div className="moko-banner-img">
                                <img src={logo}/>
                            </div>
                        </div>
                        <p className="moko-banner-heading2">
                            market + local
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="moko-inspo-container">
                <div className="moko-inspo">
                    <div className="moko-inspo-column">
                        <div className="moko-title">
                            The Inspiration
                            <img className="moko-leaf" src={leaf1}/>
                        </div>
                        <div className="moko-inspo-desc">
                            Inspired by local farmers markets, moko is an app that aims to promote sustainable development by minimizing CO2 emissions from food transportation and encouraging eating local and fresh produce. Moko also strives to encourage discovery and support for local businesses and foster community bonding. Through Moko, users can buy and sell fresh produce within their local communities.
                        </div>
                    </div>
                    <div className="moko-inspo-img">
                        <img src={eco}/>
                    </div>
                </div>
            </div>
            <div className="moko-desc-container">
                <div className="moko-desc">
                    <div className="moko-title">
                        Product Description
                        <img className="moko-leaf" src={leaf2}/>
                    </div>
                    <div className="moko-desc-container-column">
                        <div className="moko-desc-container-buy">
                            <div className="moko-desc-buy">
                                Through Moko, users can buy and sell fresh produce within their local communities.
                                <br/>
                                The app’s home shows local vendors who are near the user, allowing them to add items to their cart.  
                            </div>
                            <div className="moko-desc-buy-img">
                                <img src={desc3}/>
                                <img src={desc4}/>
                            </div>
                        </div>
                        <div className="moko-desc-container-sell">
                            <div className="moko-desc-sell-img">
                                <img src={desc1}/>
                                <img src={desc2}/>
                            </div>
                            <div className="moko-desc-sell">
                                Moko also features a sell function where users can create their own store and sell their produce to other users.
                                <br/>
                                Users can track their carbon footprint by using the footprint function and check how they are minimizing CO2 emissions by buying and selling locally 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectTech {...technologies.moko} />
        </div>
    );
 };
 
 export default Moko;