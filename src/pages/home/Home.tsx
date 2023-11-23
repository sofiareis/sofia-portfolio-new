import "pages/home/Home.scss"
import { CssBaseline, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from 'components/footer/Links';

import sofia from '/Sofia1.png'
import { skills } from "./Skills";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-hello">
                <div className="home-intro">
                    <p className="home-intro-title">Hello there, I’m Sofia!</p>
                    <p className="home-intro-subtitle">I'm a recent computer engineering graduate from The University of British Columbia with a passion for software development.</p>
                    <div className="home-intro-contact">
                        {links.map((link) => (
                        <a target="_blank" href={link.href}>
                            <FontAwesomeIcon icon={link.icon} className='home-icons'/>
                        </a>
                        ))}
                    </div>
                </div>
                <div className="home-intro-img">
                    <img src={sofia}></img>
                </div>
             </div>
             <div className="home-about">
                <p className="home-about-title">ABOUT ME</p>
                <p className="home-about-text">
                    Throughout my engineering academic journey, I developed a strong foundation in full-stack development, expanding my experience in frontend and backend.
                </p>
                <ul className="home-timeline">
                    <li className="home-timeline-item">
                        <a className="home-about-subtitle">Ensemble Systems</a>
                        <p>
                            I had the opportunity to improve my skills during my internship at Ensemble Systems, where I worked with mobile and web development. On the frontend, I developed my skills using technologies like React, JavaScript, TypeScript, and Tailwind CSS and gained valuable insights into developing user-friendly software solutions. On the backend, I leveraged technologies such as Node.js, GraphQL, NestJS, and Prisma to build a full-stack internal platform that now serves over 200 employees. Moreover, by working with Flutter, I enhanced my mobile development abilities and worked with cross-platform support by writing native Android (Kotlin) and iOS (Swift) code.
                        </p>
                    </li>
                    <li className="home-timeline-item">
                        <a className="home-about-subtitle">Ansys</a>
                        <p>     
                            My role as an R&D verification engineer at Ansys provided me with software testing skills and I further increased my programming abilities, particularly in Python. My primary responsibility was developing and maintaining automated tests in Python to ensure the reliability and quality of their Lumerical simulation software. In addition to automation, I delved into regression testing using the Squish testing tool and performed manual testing on release candidate software builds. I was able to improve my teamwork skills as I frequently engaged with cross-functional engineering teams to replicate and troubleshoot customer issues.
                        </p>
                    </li>
                    <li className="home-timeline-item">
                        <a className="home-about-subtitle">IRP</a>
                        <p>     
                            Write about IRP
                        </p>
                    </li>
                </ul>
             </div>
             <div className="home-skills">
                <p className="home-about-title">SKILLS</p>
                <ul className="home-skills-list">
                    {skills.map((skill) => (
                        <li className="home-skills-item">
                        {skill.skill}
                    </li>
                    ))}
                </ul>
             </div>
        </div>
    );
 };
 
 export default Home;


 /*

 const Home = () => {
    return (
        <Grid container component="main" className="home-container">
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className="home-image"/>
            <Grid item xs={12} sm={8} md={5} className="home-about-container" >
                <div className="home-about">
                    <div className="home-writing">
                        <p>Hello there!</p>
                        <p>My name is Sofia Bandeira dos Reis and I am a recent computer engineering graduate from The University of British Columbia. My passion is software programming and I have experience in full-stack development. I love to write code and explore what software engineering can offer us – programming is like trying to solve a puzzle that just keeps going and require my full focus!</p>
                        <p>Feel free to explore my main projects and my resume.</p>
                    </div>
                    <div className="home-contact">
                        <p>Contact me / Follow me</p>
                        {links.map((link) => (
                        <a target="_blank" href={link.href}>
                            <FontAwesomeIcon icon={link.icon} className='home-icons'/>
                        </a>
                        ))}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
 };
 
 export default Home;

 */