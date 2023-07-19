import 'pages/projects/Projects.scss'
import {cards} from 'components/project-details/ProjectDetailsInfo'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Projects = () => {
    return (    
        <div>
          <p className="project-title">My Projects</p>
          <p className="project-subtitle">Feel free to take a look!</p>
          <Container className="project-list">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.title} xs={12} sm={6} md={4}>
                  <Card className="project-list-items">
                    <CardHeader
                      title={card.title}
                      titleTypographyProps={{ align: 'center' }}
                      className="project-list-title"
                    />
                    <CardMedia
                      className="project-list-image"
                      image={card.images}
                    />
                    <CardContent className="project-list-about">
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions className="project-list-action">
                      <Link to={card.page} className="project-list-view">
                        VIEW
                    </Link>  
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
    );
 };
 
 export default Projects;