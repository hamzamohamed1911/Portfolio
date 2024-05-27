import { FaHtml5 ,FaCss3Alt  ,FaBootstrap ,FaReact   } from "react-icons/fa";
import { SiTailwindcss ,SiRedux ,SiNextdotjs,SiFirebase   } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";

export const Links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
    
  ];
  import { FaLinkedin ,FaInstagram ,FaGithub ,FaFacebook} from "react-icons/fa";

const classes = "h-10 w-10 transition-all hover:-translate-y-2 hover:scale-110 duration-300 fill-blue-500 hover:fill-blue-700"
export const icons = [
    {
        url:"https://github.com/hamzamohamed1911",
        ico:  <FaGithub className={classes}/>,
        alt: "github"
    },
    {
        url:"https://www.facebook.com/hamza.mohamed.376/",
        ico:  <FaFacebook className={classes}/>,
        alt: "facebook"
    },
    {
        url:"https://www.instagram.com/hamza.mohamed1911/",
        ico:  <FaInstagram className={classes}/>,
        alt: "instagram"
    },
    {
        url:"https://www.linkedin.com/in/hamza-m-417ab2105",
        ico: <FaLinkedin className={classes}/>,
        alt: "linkedin"
    },
    
    
];
export const SKILLS = 
[
 { id:1,ico:<FaHtml5 className="h-8 w-8"/> , skill : "HTML & HTML5 " },
{ id:2,ico:<FaCss3Alt  className="h-8 w-8"/>,skill : "	CSS & SASS " } , 
{ id:3,ico:<SiTailwindcss className="h-8 w-8"/>, skill : "CSS module & TAILWIND CSS" }  ,
{ id:4,ico:<FaReact className="h-8 w-8"/>, skill : "Material UI " },
{ id:5,ico:<FaBootstrap className="h-8 w-8"/>, skill : "BOOTSTRAP" },
{ id:6,ico:<IoLogoJavascript className="h-8 w-8"/>, skill : "JAVASCRIPT Fundamentals + ES6" }, 
{ id:7,ico:<TbBrandTypescript className="h-8 w-8"/>, skill : "Typescript" },
 { id:8,ico:<FaGithub className="h-8 w-8"/>, skill : "Git and GitHub" },
 { id:9,ico:<FaReact className="h-8 w-8"/>, skill : "REACT.JS" },
  { id:10,ico:<SiRedux className="h-8 w-8"/>, skill : "Redux and redux toolkit" },
 { id:11,ico:<FaReact className="h-8 w-8"/>, skill : "Context Api" }, 
 { id:12,ico:<SiNextdotjs className="h-8 w-8"/>, skill : "NEXT.JS 14" },
 { id:13,ico:<FaReact className="h-8 w-8"/>, skill : "Tan-stack & React-query" }, 
 { id:14,ico:<SiFirebase  className="h-8 w-8"/>, skill : "FireBase" },
 { id:15,ico:<TbBrandFramerMotion className="h-8 w-8"/>, skill : "FramerMotion" }
]
export const PROJECTS = [
    
    {id:1 ,description:'responsive website Built with Next.js, Tailwind CSS, Framer Motion, and state management via useReducer and Context API and fireBase.' , color:"from-blue-500 to-blue-600" ,title:"NIKE APP" ,src:"/project1.jpg", DomainLink:"https://nike-app-eta.vercel.app/",GithubLink:"https://github.com/hamzamohamed1911/nikeApp"},
    {id:2 ,description:'responsive website Built with Next.js, Tailwind CSS, Framer Motion and typeScript.' ,color:"from-blue-600 to-blue-700" ,title:"CarHub" ,src:"/project2.jpg", DomainLink:"https://hamzacarhub.vercel.app/" ,GithubLink:"https://github.com/hamzamohamed1911/CarHub-App"}, 
    {id:3 , description:'responsive website Built with React.js and react-router 6.4, Tailwind CSS, Framer Motion.',color:"from-blue-700 to-blue-800" ,title:"Movies project" ,src:"/project3.png", DomainLink:"https://movies-gamma-silk.vercel.app/" ,GithubLink:"https://github.com/hamzamohamed1911/movies"},
    {id:4 , description:'React  website Built with Next.js, Tailwind CSS, Framer Motion, and state management via useReducer and Context API and fireBase.',color:"from-blue-800 to-blue-900" ,title:"Next.js project" ,src:"/project4.jpg", DomainLink:"https://github.com/hamzamohamed1911/meals-store" ,GithubLink:"https://github.com/hamzamohamed1911/meals-store"},
    {id:5 , description:'using React concepts essentials with Tailwind CSS',color:"from-blue-900 to-blue-950" ,title:"Task App" ,src:"/project4.jpg", DomainLink:"https://taskproject-two.vercel.app/" ,GithubLink:"https://github.com/hamzamohamed1911/taskproject.git"},

]