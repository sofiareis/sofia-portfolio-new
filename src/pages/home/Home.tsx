import "pages/home/Home.scss"
import { CssBaseline, Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from 'components/footer/Links';

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