import "pages/projects/Sharity/Sharity.scss"
import 'pages/projects/variables.scss'
import logo from '/sharity/Logo.png'
import user1 from '/sharity/user1.png'
import user2 from '/sharity/user2.png'
import charity1 from '/sharity/charity1.png'
import charity2 from '/sharity/charity2.png'
import tech from '/sharity/sharityTech.svg'
import prize from '/sharity/prize.svg'

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
                    </div>
                    <div className="sharity-inspo-banner">
                        <p>Support charities.</p>
                        <p>Support women.</p>
                        <p>Support giving.</p>
                    </div>
                </div>
            </div>
            <div className="sharity-desc-container">
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
            <div className="sharity-tech-container">
                <div className="sharity-tech">
                    <div className="sharity-tech-column">
                        <div className="sharity-title">
                            Product Technologies
                        </div>
                        <div className="sharity-tech-img">
                            <img src={tech}/>
                        </div>
                    </div>
                    <div className="sharity-tech-desc">
                        <div className="sharity-tech-front">
                            Frontend
                            <div className="sharity-tech-label">
                                Figma UI design
                            </div>
                            <div className="sharity-tech-label">
                                React Native
                            </div>
                        </div>
                        <div className="sharity-tech-back">
                            Backend
                            <div className="sharity-tech-label">
                                Google Maps API
                            </div>
                            <div className="sharity-tech-label">
                                Node.js
                            </div>
                            <div className="sharity-tech-label">
                                Firebase
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sharity-prizes-container">
                <div className="sharity-prizes">
                    <div className="sharity-prizes-column">
                        <div className="sharity-title">
                            Product Prizes
                        </div>
                        <div className="sharity-prizes-desc">
                            <p>- Pinnacle Prize: Top Project</p>
                            <p>- Hootsuite #SocialForGood Award</p>
                            <p>- Telus Women's Health Award (Best Pitch)</p>
                        </div>
                    </div>
                    <div className="sharity-prize-img">
                        <img src={prize}/>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default Sharity;