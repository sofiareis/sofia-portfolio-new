import sharity from 'assets/sharity.png'
import moko from 'assets/moko.png'
import renew from 'assets/renew.png'
import chessie from 'assets/chessie.png'
import alacrity from 'assets/alacrity.png'
import robotdog from 'assets/robotdog.png'
import dancingrobot from 'assets/dancingrobot.png'
import careercue from 'assets/careercue.png'
import boba from 'assets/GIF.gif'
import patientviz from 'assets/patientviz.jpeg'

export const cards = [
    {
      title: 'Sharity',
      description: 'She + share + charity: a mobile app that connects users to womens shelters...',
      images: sharity,
      page: 'sharity',
  
    },
  
    {
      title: 'Moko',
      description: 'A mobile app that allows users to buy and sell fresh produce within their local communities...',
      images: moko,
      page: 'moko',
  
    },
 
    {
      title: 'Renew',
      description: 'A mobile app designed to provide support and resources for immigrants in a new country...',
      images: renew,
      page: 'renew',
  
    },

    {
      title: 'CareerCue',
      description: 'CareerCue helps you practice for interviews by hearing you respond to questions...',
      images: careercue,
      page: 'careercue',
  
    },

    {
      title: 'PatientViz',
      description: 'A Desktop application to help physicians with the triage process...',
      images: patientviz,
      page: 'patientviz',
  
    },
  
    {
      title: 'Chessie',
      description: 'A chess engine that features a hardware-accelerated chess algorithm and an Android app...',
      images: chessie,
      page: 'chessie',
  
    },
  
    {
      title: 'Alacrity',
      description: 'Alacrity is a web app meant to help students manage their time...',
      images: alacrity,
      page: 'alacrity',
  
    },

    {
      title: 'Dancing Robot',
      description: 'A robot that moves like it is dancing...',
      images: dancingrobot,
      page: 'dancingrobot',
  
    },

    {
      title: 'Robot Dog',
      description: 'A robot that has dog life features (tail, voice control, movement)...',
      images: robotdog,
      page: 'robotdog',
  
    },

    {
      title: 'BobaBudy',
      description: 'An app to determine which is your favourite Bubble Tea flavor...',
      images: boba,
      page: 'bobabuddy',
  
    },
];

type Details = {
        title: string,
        overview: string,
        images: string,
        code?: string,
        description: string;
        technologies: string;
        prizes?: string;
}

export const cardsdetails: {[key: string] : Details} = {

    'sharity': {
        title: 'Sharity',
        overview: "Inspired by the words: she, share, and charity, we created Sharity, a female empowerment donation app. Sharity promotes women empowerment in the community and sustainability by encouraging users to donate their used or new items to local female’s shelters. An additional feature is that the app allows for charities to sort through donation items, to obtain items to match their needs and ensure quality. Additionally, our team is passionate about raising awareness and bringing down the stigma around menstruation products. As the developers of Sharity, we have created our own fundraiser: Period Positivity, where users can donate money to this cause and support local women's health.",
        images: sharity,
        code: 'https://github.com/sofiareis/Sharity',
        description: 'On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products.\nUsers can take pictures of their items, upload them to the app, and donate to selected organizations. Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist. Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the Charities side: Organizations can swipe left and right on donation items they wish accept or decline They may chat with users about donation pickup/drop-off information Organizations can also edit their account and donation wishlist',
        technologies: "Figma UI design",
        prizes: "Pinnacle Prize: Top Project",
    },
  
    'moko': {
      title: 'Moko',
      overview: 'A mobile app that allows users to buy and sell fresh produce within their local communities...',
      images: moko,
      code: 'https://github.com/sofiareis/Sharity',
      description: "On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products. Users can take pictures of their items, upload them to the app, and donate to selected organizations. Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist. Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the Charities side: Organizations can swipe left and right on donation items they wish accept or decline They may chat with users about donation pickup/drop-off information Organizations can also edit their account and donation wishlist",
      technologies: "Figma UI design",
      prizes: "Pinnacle Prize: Top Project",
  
    },
 
    'renew': {
      title: 'Renew',
      overview: 'A mobile app designed to provide support and resources for immigrants in a new country...',
      images: renew,
      code: 'https://github.com/sofiareis/Sharity',
      description: "On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products. Users can take pictures of their items, upload them to the app, and donate to selected organizations. Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist. Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the Charities side: Organizations can swipe left and right on donation items they wish accept or decline They may chat with users about donation pickup/drop-off information Organizations can also edit their account and donation wishlist",
      technologies: "Figma UI design",
      prizes: "Pinnacle Prize: Top Project",
    },

    'careercue': {
      title: 'CareerCue',
      overview: '',
      images: careercue,
      code: '',
      description: '',
      technologies: ''
    },

    'patientviz': {
      title: 'PatientViz',
      overview: '',
      images: patientviz,
      code: '',
      description: '',
      technologies: '',
  
    },
  
    'chessie': {
      title: 'Chessie',
      overview: 'A chess engine that features a hardware-accelerated chess algorithm and an Android app...',
      images: chessie,
      code: 'https://github.com/sofiareis/Sharity',
      description: "On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products. Users can take pictures of their items, upload them to the app, and donate to selected organizations. Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist. Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the Charities side: Organizations can swipe left and right on donation items they wish accept or decline They may chat with users about donation pickup/drop-off information Organizations can also edit their account and donation wishlist",
      technologies: "Figma UI design",  
    },
  
    'alacrity': {
      title: 'Alacrity',
      overview: 'Alacrity is a web app meant to help students manage their time...',
      images: alacrity,
      code: 'https://github.com/sofiareis/Sharity',
      description: "On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products. Users can take pictures of their items, upload them to the app, and donate to selected organizations. Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist. Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations. On the Charities side: Organizations can swipe left and right on donation items they wish accept or decline They may chat with users about donation pickup/drop-off information Organizations can also edit their account and donation wishlist",
      technologies: "Figma UI design",
    },

    'dancingrobot': {
      title: 'Dancing Robot',
      overview: '',
      images: dancingrobot,
      code: '',
      description: "",
      technologies: "",
    },

    'robotdog': {
      title: 'Robot Dog',
      overview: '',
      images: robotdog,
      code: '',
      description: '',
      technologies: '',
    },

    'bobabudy': {
      title: 'BobaBudy',
      overview: '',
      images: boba,
      code: '',
      description: "",
      technologies: "",
    },
};
