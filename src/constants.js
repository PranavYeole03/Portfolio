// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import renderLogo from "./assets/tech_logo/render-logo.png";
import sqlLogo from "./assets/tech_logo/sql.png";
import Calculator from "./assets/ProjectImages/Calculator.png";
import Cricket from "./assets/ProjectImages/Cricket.png";
import oxGame from "./assets/ProjectImages/OX Game.png";
import ToDo from "./assets/ProjectImages/ToDo WebSite.png";
import logo from "./assets/ProjectImages/logo.png";
import SIBMT from './assets/Education/SIBMTLOGO.jpg';
import bytco from "./assets/Education/bytco.jfif";
import School from "./assets/Education/Abhinavlogo.png";
import College from "./assets/Education/CollegeLogo.jpg";

// Skill Type
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];


// Education Type
export const education = [
  {
    id: 0,
    img: SIBMT,
    school: "SIBMT,Pune",
    date: "Sep-2024 Pursuing",
    grade: "-",
    desc: "I am currently pursuing my Master's degree (MCA) in Computer Applications from Savitri Bai Phule University, Pune. Through this program, I am building a strong foundation in programming, software development, and core computer science concepts. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
    degree: "Master of Computer Applications(MCA)",
  },
  {
    id: 1,
    img: bytco,
    school: "Bytco College, Nashik",
    date: "June 2021 - April 2024",
    grade: "67.90%",
    desc: "I completed my Bachelor's degree in Computer Application (BCA) from Bytco College, Nashik. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. During my bachelor’s degree, I created several websites using HTML, CSS, and JavaScript, and I continue to enhance my skills through continuous learning.",
    degree: "Bachelor of Computer Application(BCA)",
  },
  {
    id: 2,
    img: College,
    school: "Science Junior College Lohoner",
    date: "July 2020 - May 2021",
    grade: "70%",
    desc: "I completed my class 12 education from Science Junior College, Lohoner under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "HSC",
  },
  {
    id: 3,
    img: School,
    school: "Dr. Kakasaheb Purnapatre Madhyamik Vidyalaya,Chalisgaon",
    date: "Apr 2015 - March 2016",
    grade: "78.80%",
    desc: "I completed my class 10 education from Abhinav School, Chalisgaon, under the SSC board, where I studied Science",
    degree: "SSC",
  },
];


// Project Type
export const projects = [
  {
    id: 0,
    title: "Calculator",
    description:
      "A fully functional calculator web application built using HTML, CSS, and vanilla JavaScript. It supports basic arithmetic operations (addition, subtraction, multiplication, and division) and displays results in real time with clear input/output formatting. The UI is responsive and user-friendly, making it suitable for both desktop and mobile use. Deployed on GitHub Pages for easy online access.",
    image: Calculator,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PranavYeole03/Calculator",
    webapp: "https://pranavyeole03.github.io/Calculator/",
  },
  {
    id: 1,
    title: "Cricket Game",
    description:
      "A fun, interactive cricket game built using HTML, CSS, and JavaScript, allowing users to play and simulate basic cricket actions through simple game logic and UI interactions.",
    image: Cricket,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PranavYeole03/Cricket-Games",
    webapp: "https://pranavyeole03.github.io/Cricket-Games/",
  },
  {
    id: 2,
    title: "Tic Tac Toe Games",
    description:
      "This is a Tic Tac Toe game implemented using HTML, CSS, and vanilla JavaScript. The game supports two-player gameplay in the same browser, with intuitive UI interactions, win/draw detection, and real-time result updates. Designed to be responsive and lightweight, it runs smoothly on both desktop and mobile devices. The project is deployed on GitHub Pages for quick online access.",
    image: oxGame,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PranavYeole03/TicTac",
    webapp: "https://pranavyeole03.github.io/TicTac/",
  },
    {
      id: 3,
      title: "ToDo WebSite",
      description:
        "A lightweight ToDo List application created with HTML, CSS, and vanilla JavaScript. This app allows users to add new tasks, mark tasks as complete, and delete tasks with immediate visual updates. It features a clean, user-friendly design and works smoothly across devices. The project is deployed using GitHub Pages for easy access.",
      image: ToDo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/PranavYeole03/ToDo",
      webapp: "https://pranavyeole03.github.io/ToDo/",
    },
    {
      id: 4,
      title: "ShopFinity (Blinkit Clone)",
      description:
        "Shopfinity is a full-stack e-commerce application developed using MongoDB, Express.js, React, and Node.js (MERN stack). The application allows users to browse products, view details, manage cart items, and interact with a responsive, user-friendly interface. The backend handles API requests, data management, and server-side logic, while the frontend delivers a smooth and modern shopping experience. The project is fully deployed and accessible online.",
      image: logo,
      tags: ["React JS", "Node.js", "MongoDB", "Express","API"],
      github: "https://github.com/PranavYeole03/ShopFinity-Full-Stack-MERN-Application-",
      webapp: "https://shopfinity-full-stack-mern-application-xqcx.onrender.com/",
    },
];
