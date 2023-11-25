import "pages/projects/Sharity/Sharity.scss"
import 'pages/projects/variables.scss'
import logo from '/sharity/Logo.png'
import user1 from '/sharity/user1.png'
import user2 from '/sharity/user2.png'
import inspo from '/sharity/inspo.png'
import charity1 from '/sharity/charity1.png'
import charity2 from '/sharity/charity2.png'
import { projectLinks } from "components/Links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectTech from "components/project-tech/ProjectTech"
import { prizes } from "components/project-prize/prizes"
import { technologies } from "components/project-tech/technologies"
import ProjectPrize from "components/project-prize/ProjectPrize"

const Sharity = () => {
    return (
        <div className="sharity-container">
            <div className="sharity-banner">
                <div className="sharity-banner-headings">
                    <p className="sharity-banner-heading1">
                        She + share + charity: 
                    </p>
                    <p className="sharity-banner-heading2">
                        Empowering women through <br/>
                        donations and sustainability.
                    </p>
                    <p className="sharity-banner-heading3">
                        Welcome to Sharity.
                    </p>
                </div>
                <div className="sharity-banner-img">
                    <img src={logo}/>
                </div>
            </div>
            <div className="sharity-inspo-container">
                <div className="sharity-inspo">
                    <div className="sharity-inspo-column">
                        <div className="sharity-title">
                            The Inspiration
                        </div>
                        <div className="sharity-inspo-desc">
                            Inspired by the words: she, share, and charity, we created Sharity, a female empowerment donation app. Sharity promotes women empowerment in the community and sustainability by encouraging users to donate their used or new items to local female’s shelters. 
                        </div>
                        <div className="project-code">
                            <p>Check out the code!</p>
                            <a target="_blank" href={projectLinks.sharity}>
                                <FontAwesomeIcon icon={projectLinks.icon} className='home-icons'/>
                            </a>
                        </div>
                    </div>
                    <div className="sharity-inspo-banner">
                        <img src={inspo}/>
                    </div>
                </div>
            </div>
            <div className="project-desc-container">
                <div className="sharity-desc">
                    <div className="sharity-title">
                        Product Description
                    </div>
                    <div className="sharity-desc-desc-user">
                        <div className="sharity-desc-user-img">
                            <img src={user1}/>
                            <img src={user2}/>
                        </div>
                        <div className="sharity-desc-user">
                            On the user side:
                            
                            <p>- Sharity allows users to connect to women shelters and donate clothing articles and period products</p>
                            <p>- Users can take pictures of their items, upload them to the app, and donate to selected organizations</p>
                            <p>- Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist</p>
                            <p>- Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations</p>
                        </div>
                    </div>
                    <div className="sharity-desc-desc-charity">
                        <div className="sharity-desc-charity">
                            On the charities side: 
                            
                            <p>- Organizations can swipe left and right on donation items they wish accept or decline </p>
                            <p>- They may chat with users about donation pickup/drop-off information</p>
                            <p>- Organizations can also edit their account and donation wishlist</p>
                        </div>
                        <div className="sharity-desc-charity-img">
                            <img src={charity1}/>
                            <img src={charity2}/>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectTech {...technologies.sharity} />
            <ProjectPrize {...prizes.sharity}/>
        </div>
    );
 };
 
 export default Sharity;