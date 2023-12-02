import sharity from '/sharity2.png'
import moko from '/moko2.png'
import onepiece from '/onepiece.png'
import renew from '/renew2.png'
import chessie from '/chessmate2.png'
import alacrity from '/alacrity2.png'
import careercue from '/careercue2.png'
import patientviz from '/patientviz.png'
//import boba from '/GIF.gif'
//import robotdog from '/robotdog.png'
//import dancingrobot from '/dancingrobot.png'

export const cards = [
    {
      title: 'Cards Tracker',
      description: "A web app for managing your One Piece Card Game collection",
      images: onepiece,
      page: 'onepiece',

    },
    {
      title: 'Sharity',
      description: "(cmd-f Hackathon 2021) A mobile app that connects users to women's shelters",
      images: sharity,
      page: 'sharity',
  
    },

    {
      title: 'CareerCue',
      description: '(cmd-f Hackathon 2023) A web app that helps you practice for interviews by giving you customized feedback',
      images: careercue,
      page: 'careercue',
  
    },

    {
      title: 'PatientViz',
      description: 'A desktop app to help physicians of the BC Children’s Hospital with the triage process of patients',
      images: patientviz,
      page: 'patientviz',
    },
 
    {
      title: 'Renew',
      description: '(cmd-f Hackathon 2022) A mobile app designed to provide support and resources for immigrants in a new country',
      images: renew,
      page: 'renew',
  
    },

    {
      title: 'Moko',
      description: '(Pinnacle Hackathon 2021) A mobile app that allows users to buy and sell fresh produce within their local communities',
      images: moko,
      page: 'moko',
  
    },

    {
      title: 'ChessMate',
      description: 'A chess engine that features a hardware-accelerated chess algorithm and an Android app',
      images: chessie,
      page: 'chessmate',
  
    },
  
    {
      title: 'Alacrity',
      description: 'A web app to help students manage their time and accomplish tasks',
      images: alacrity,
      page: 'alacrity',
  
    },
/*
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
      description: 'An app to determine which is your favourite Bubble Tea flavor',
      images: boba,
      page: 'bobabuddy',
  
    },
    */
    
];

type Details = {
        title: string,
        overview: string,
        images: string,
        code?: string,
        description?: string;
        technologies: string;
        prizes?: string;
}

export const cardsdetails: {[key: string] : Details} = {

    'sharity': {
        title: 'Sharity',
        overview: "Inspired by the words: she, share, and charity, we created Sharity, a female empowerment donation app. Sharity promotes women empowerment in the community and sustainability by encouraging users to donate their used or new items to local female’s shelters. An additional feature is that the app allows for charities to sort through donation items, to obtain items to match their needs and ensure quality. Additionally, our team is passionate about raising awareness and bringing down the stigma around menstruation products. As the developers of Sharity, we have created our own fundraiser: Period Positivity, where users can donate money to this cause and support local women's health.",
        images: sharity,
        code: 'https://github.com/sofiareis/Sharity',
        description: "On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products.\n- Users can take pictures of their items, upload them to the app, and donate to selected organizations.\n- Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist.\n- Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations.\n\nOn the Charities side:\n- Organizations can swipe left and right on donation items they wish accept or decline\n- They may chat with users about donation pickup/drop-off information\n- Organizations can also edit their account and donation wishlist",
        technologies: "- Figma UI design\n- React Native frontend \n- Google Maps API to locate nearby shelters \n- Node.js and Firebase backend",
        prizes: "- Pinnacle Prize: Top Project \n- Hootsuite #SocialForGood Award \n- Telus Women's Health Award (Best Pitch)",
    },
  
    'moko': {
      title: 'Moko',
      overview: "Inspired by the words local and markets, moko is an app that aims to promote sustainable development by minimizing CO2 emissions from food transportation and encouraging eating local and fresh produce. Moko also strives to encourage discovery and support for local businesses and foster community bonding. Through moko, users can buy and sell fresh produce within their local communities.",
      images: moko,
      code: 'https://github.com/sofiareis/moko',
      description: "",
      technologies: "Frontend: \n- Figma (UI/UX design) \n- React Native (interactive interface) \n\nBackend: \n- Amazon EC2 server \n- Node.js and SQL \n- S3 (image storage) \n- Google Maps geocoding API",
      prizes: "",
  
    },
 
    'renew': {
      title: 'Renew',
      overview: 'In light of the war in Ukraine today, millions of Ukranians have fled into neighboring countries into a frightening and uncertain future. Our team wanted to create something to help refugees in similar situations as they navigate life in a new, unfamiliar country.',
      images: renew,
      code: 'https://github.com/sofiareis/renew',
      description: "Our project, renew, is an app designed to provide support and resources for immigrants in a new country. The app name was chosen to represent the fact that we want to help refugees as they start a new life in a new country, hence renew. The app features a community function where users are grouped into communities based on where they came from and where they have immigrated to. Within these communities, users can post and comment about any questions or resources for users to learn from each other. Additionally, there is a map feature which filters for nearby food banks, hospitals, and areas with recent criminal activity.",
      technologies: "- Figma (UI/UX design) \n- React Native and Android Studio (interactive interface) \n- Redux (state management) \n- Node.js (server-side platform) \n- Firebase (cloud storage) \n- Google Maps API",
      prizes: "- 3rd Place at cmd-f Hackathon 2022 \n- UBC Project Incubation Prize \n- SAP: Most Coherent UX/UI Design Using the UI5 SDK and/or Web Components",
    },

    'careercue': {
      title: 'CareerCue',
      overview: "The inspiration behind CareerCue came from recognizing the challenges and anxiety many people face when preparing for job interviews. The interview process can be stressful, and many people don't have the resources to know how to best prepare for the questions that may be asked. \nCareerCue is made for anyone who is looking to improve their interview skills. This includes beginners entering the workforce for the first time, underprivileged demographics who have limited access to career resources, moms looking to return to their careers after a long break, and people affected by the pandemic who are trying to improve their communication skills.",
      images: careercue,
      code: 'https://github.com/sofiareis/cmdf2023',
      description: "CareerCue provides a database of commonly asked behavioural interview questions across various industries. You can practice your responses by recording yourself and getting instant feedback to improve your answers. Our app provides customized feedback so you can see your strengths and weaknesses based on tone, clarity, word choice, and timing. \nYou can switch questions, restart the recording, try the same question again, and send a summary of your answers and feedback to your email for later review.",
      technologies: "- Figma (UI/UX design) \n- React (interface) \n- Webcam and speech-to-text libraries (record and transcribe user responses)  \n- Flask (server) \n- Cohere Classify API (analyze the user responses) \n- SMTP/SSL (email service)",
    },

    'patientviz': {
      title: 'PatientViz',
      overview: "Triage is a crucial tool in managing long waitlists as the triage process enables more equitable care and allows patients with the greatest and most urgent needs to be seen first (Moskop & Iserson, 2004). However, the triage process can be complicated, as referrals received by specialist physicians often differ in detail and length. \nThe goal of PatientViz is to help physicians with the triage process and minimize long waiting lists.",
      images: patientviz,
      description: "PatientViz allows the clinician to import patient intake form responses into the application, and visualize this data against the clinic’s patient population. Also, users are able to filter the data to be visualized by conditional subpopulations (e.g. patients taking certain medications, patients with a certain set of symptoms, etc.). Analytical statistics such as the correlation between medications and diagnoses within the clinic’s population are also presented in a drill-down view. \nThe application also automatically generate individual patient reports. These patient reports contain sections outlining different areas of interest for each patient’s case. Including their current medications and diagnoses information, cross examination of medications and diagnoses against the population, free-text notes, non-medical interventions, and root causes.",
      technologies: '- Electron \n- React',
  
    },
  
    'chessmate': {
      title: 'ChessMate',
      overview: 'ChessMate is a one player chess engine where the user plays against an AI opponent. Not only can the player play a game of chess, they can save their games to replay for analysis and pause games in the middle of playing. The majority of the processing is done on the ARM chip on the DE1-SoC with rendering and move input being done on an Android phone. The DE1 and the phone are supposed to communicate over Bluetooth. \nThis project aims to attract tech savvy people who are interested in learning how to play chess or improve their existing skill. Our design takes into consideration that not everyone has a pre-existing knowledge of chess, therefore it will perform move validation and automatically prevent illegal moves from being played.',
      images: chessie,
      code: 'https://github.com/sofiareis/ChessMate',
      description: "- Interactive user interface \n- AI provides potential moves \n- AI support for different levels of chess proficiency \n- Chess timer that enforces users to think on their feet \n- Ability to replay past games to allow users to analyse their strategy",
      technologies: "- Android Studio for the frontent \n- Node.js and MySQL backend \n- ARM chip on DE1-SoC",  
    },
  
    'alacrity': {
      title: 'Alacrity',
      overview: "Alacrity is a web app meant to help students manage their time. It provides an interface for students to enter their due dates, plan work sessions and rearrange those work sessions to spread the work out more evenly.",
      images: alacrity,
      code: 'https://github.com/sofiareis/Alacrity',
      description: "- Individual user accounts with data stored in MySQL database \n- Sign-in with Google authentication \n- Single calendar view \n- Manual movement of workload around calendar \n- Automatic optimization of personal calendar using algorithm to spread work out as evenly as possible",
      technologies: "- Apache server for frontend \n- MySQL database to store user and schedule block data \n- Flask (python) backend using mod_WSGI to connect to Apache server \n- React frontend with React Bootstrap",
    },

    /*

    'dancingrobot': {
      title: 'Dancing Robot',
      overview: "A robot that moves like it is dancing! To have to robot seemingly do multiple things at once, I broke each task down to smaller tasks and then cycled through all of the tasks in the master loop. The ultrasonic sensor, and the LCD updates took negligible time but the dance moves and music needed to be broken up into smaller tasks. All dance moves were comprised of “mini moves” and the “mini move” to be executed was chosen based on the iteration of the master loop. For the music, the note and pause were chosen based on the iteration of the master loop.",
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

    'bobabuddy': {
      title: 'BobaBudy',
      overview: "Bubble tea is one of the most popular drinks on campus, and you'd often see long lines at UBC's boba hotspots. What makes it special is the variety of flavours to choose from and the option to customize to perfection with different levels of sugar and ice. Although boba-lovers have their favourites, it can be hard for bubble tea beginners to decide what they want and this is where our app comes in!",
      images: boba,
      code: 'https://github.com/sofiareis/Boba-Buddy',
      description: "This app shows the menus of two bubble tea places at UBC, Coco and Pearl Fever, which allows people to choose ahead of time and compare the options at the different locations. In addition, it provides a simple quiz if you're having a bit of trouble choosing your drink. Based on a series of personality-based questions, your responses to the quiz will determine what drink you should get!",
      technologies: "-Flutter (Dart)",
    },
    */
};


