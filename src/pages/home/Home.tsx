import "pages/home/Home.scss"
import sofia from 'assets/sofia.jpeg'

const Home = () => {
    return (
    <div className="home-container">
        <div className="home-me">
            <img src={sofia}></img>
        </div>
        <div className="home-about">
            <p>Hello there!!</p>
            <p> I am a computer engineering student at The University of British Columbia. My passion is software programming and I have experience in full-stack development and data analysis. I love to write code and explore what software engineering can offer us – programming is like trying to solve a puzzle that just keeps going and require my full focus!</p>
        </div>
    </div>
    );
 };
 
 export default Home;