import "pages/projects/chessmate/chessmate.scss"
import 'pages/projects/variables.scss'

import logo from '/chessmate/Logo.png'
import desc1 from '/chessmate/Achievements.png'
import desc4 from '/chessmate/Home.png'
import desc3 from '/chessmate/Landing.png'
import desc2 from '/chessmate/Matches.png'
import pawn from '/chessmate/pawn.png'
import tech from '/chessmate/tech.svg'


const ChessMate = () => {
    return (
        <div className="chessmate-container">
            <div className="chessmate-banner-container">
                <div className="chessmate-banner">
                    <div className="chessmate-banner-img">
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            <div className="chessmate-inspo-container">
                <div className="chessmate-inspo">
                    <div className="chessmate-inspo-column">
                        <div className="chessmate-title">
                            The App
                        </div>
                        <div className="chessmate-inspo-desc">
                            ChessMate is a one player chess engine where the user plays against an AI opponent. Not only can the player play a game of chess, they can save their games to replay for analysis and pause games in the middle of playing. The majority of the processing is done on the ARM chip on the DE1-SoC with rendering and move input being done on an Android phone. The DE1 and the phone are supposed to communicate over Bluetooth. 
                            <br/>This project aims to attract tech savvy people who are interested in learning how to play chess or improve their existing skill. Our design takes into consideration that not everyone has a pre-existing knowledge of chess, therefore it will perform move validation and automatically prevent illegal moves from being played.
                        </div>
                    </div>
                    <div className="chessmate-inspo-img">
                        <img src={pawn}/>
                    </div>
                </div>
            </div>
            <div className="chessmate-desc-container">
                <div className="chessmate-desc">
                    <div className="chessmate-title">
                        Product Description
                    </div>
                    <div className="chessmate-desc-container-column">
                        <div className="chessmate-desc-container-buy">
                            <div className="chessmate-desc-buy">
                                ChessMate has an interactive user interface with AI support for different levels of chess proficiency. It contains a chess timer that enforces users to think on their feet.
                            </div>
                            <div className="chessmate-desc-buy-img">
                                <img src={desc1}/>
                                <img src={desc2}/>
                            </div>
                        </div>
                        <div className="chessmate-desc-container-sell">
                            <div className="chessmate-desc-sell-img">
                                <img src={desc3}/>
                                <img src={desc4}/>
                            </div>
                            <div className="chessmate-desc-sell">
                                The app contains an achievement section where users can see which achievements they completed and which are in progress.
                                <br/>ChessMate allows users to reply past games so they can analyze their strategy and improve.                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chessmate-tech-container">
                <div className="chessmate-tech">
                    <div className="chessmate-tech-column">
                        <div className="chessmate-title">
                            Product Technologies
                        </div>
                        <div className="chessmate-tech-img">
                            <img src={tech}/>
                        </div>
                    </div>
                    <div className="chessmate-tech-desc">
                        <div className="chessmate-tech-front">
                            Frontend
                            <div className="chessmate-tech-label">
                                Figma UI design
                            </div>
                            <div className="chessmate-tech-label">
                                Android Studio
                            </div>
                        </div>
                        <div className="chessmate-tech-back">
                            Backend
                            <div className="chessmate-tech-label">
                                Node.js
                            </div>
                            <div className="chessmate-tech-label">
                                MySQL
                            </div>
                        </div>
                        <div className="chessmate-tech-back">
                            Hardware
                            <div className="chessmate-tech-label">
                                ARM chip
                            </div>
                            <div className="chessmate-tech-label">
                                DE1-SoC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default ChessMate;