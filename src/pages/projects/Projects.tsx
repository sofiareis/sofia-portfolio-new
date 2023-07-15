import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import 'pages/projects/Projects.scss'
import sharity from 'assets/sharity.png'
import moko from 'assets/moko.png'
import renew from 'assets/renew.png'
import chessie from 'assets/chessie.png'
import alacrity from 'assets/alacrity.png'

const cards = [
    {
      title: 'Sharity',
      description: 'She + share + charity: a mobile app that connects users to womens shelters...',
      images: sharity,
      page: '/sharity',
  
    },
  
    {
      title: 'Moko',
      description: 'A mobile app that allows users to buy and sell fresh produce within their local communities...',
      images: moko,
      page: '/moko',
  
    },
 
    {
      title: 'Renew',
      description: 'A mobile app designed to provide support and resources for immigrants in a new country...',
      images: renew,
      page: '/renew',
  
    },
  
    {
      title: 'Chessie',
      description: 'A chess engine that features a hardware-accelerated chess algorithm and an Android app...',
      images: chessie,
      page: '/chessie',
  
    },
  
    {
      title: 'Alacrity',
      description: 'Alacrity is a web app meant to help students manage their time...',
      images: alacrity,
      page: '/alacrity',
  
    },
];
/*
    {
      title: 'Dancing Robot',
      description: 'A robot that moves like it is dancing...',
      images: tora,
      page: '/tora',
  
    },
    {
      title: 'Robot Dog',
      description: 'A robot that has dog life features (tail, voice control, movement)...',
      images: sven,
      page: '/sven'
    },
    {
      title: 'BobaBuddy',
      description: 'An app to determine which is your favourite Bubble Tea flavor...',
      images: boba,
      page: '/boba'
    }
  
  ];
*/

function Item(props: { value: string, image: string, title: string  }) {
    return (
    <li>
        <div className="project-list-items">
            <div className="project-list-title">
                <p>{props.title}</p>
            </div>
            <div className="project-list-image">
                <img src={props.image}></img>
            </div>
            <div className="project-list-about">
                <p>{props.value}</p>
            </div>
        </div>
    </li>
    );
 }

const Projects = () => {
    return (    
        <div>
            <p className="project-title">My Projects</p>
            <p className="project-subtitle">Feel free to take a look!</p>
       
            <ul className="project-list">
                {cards.map((item) => <Item key={item.title} value={item.description} image={item.images} title={item.title}/>)}
            </ul>
        </div>
    );
 };
 
 export default Projects;