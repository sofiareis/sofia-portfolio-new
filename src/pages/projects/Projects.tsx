import 'pages/projects/Projects.scss'
import 'pages/projects/variables.scss'
import {cards} from 'components/project-details/ProjectDetailsInfo'
import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Projects = () => {
    return (    
        <div className='project-container'>
          <p className="project-main-title">MY PROJECTS</p>
          <p className="project-subtitle">A compilation of my personal, hackathon, and school projects</p>
          <Container className="project-list">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.title} xs={12} sm={6} md={4}>
                  <Card className="project-list-items" classes={{ root: "custom-card-root" }} >
                  <Link to={card.page} className="project-list-view">
                    <CardMedia
                      className="project-list-image-container"
                      component="div"
                    >
                      <img
                        className="project-list-image"
                        src={card.images}
                        alt={card.title}
                      />
                    </CardMedia>
                    <CardContent className="project-list-about" style={{paddingBottom: '10px'}}>
                      <p className='project-list-title'>
                        {card.title.toUpperCase()}
                      </p>
                      <p className='project-list-desc'>
                        {card.description}
                      </p>
                    </CardContent>
                    </Link>  
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
    );
 };
 
 export default Projects;