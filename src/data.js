import { MdOutlineTaskAlt } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { GrDomain } from "react-icons/gr";
import { SiTask } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";


export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Development",
    info: "We offer website development services such as responsive design, content management systems, e-commerce functionality, and website maintenance.",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <TbDeviceMobileCode />,
    title: "Mobile Application Development",
    info: "We offer mobile application development services for iOS and Android platforms. Our experienced team of developers creates custom mobile apps that are user-friendly, scalable, and optimized for performance.",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiTask />,
    title: "Software Development",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <GrDomain />,
    title: "Domain Registration And Hosting",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/444",
  },
  // ,{
  //     id: 5,
  //     icon: <MdOutlineTaskAlt />,
  //     title: "Hello",
  //     info: "This is the day that the lord has made. We will rejoice!",
  //     path: "/programs/111"
  // },
];

export const values = [
  {
    id: 1,
    icon: <MdOutlineTaskAlt />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <MdOutlineTaskAlt />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <MdOutlineTaskAlt />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <MdOutlineTaskAlt />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "",
    answer:
    ""
  },
  {
    id: 2,
    question: "",
    answer:
      "",
  },
  {
    id: 3,
    question: "",
    answer:
      "",
  },
  {
    id: 4,
    question: "",
    answer:
      "",
  },
  {
    id: 5,
    question: "",
    answer:
      "",
  },
  {
    id: 6,
    question: "",
    answer:
      "",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Anisha Poudel",
    quote:
      " As an  former employee of TivraSoft, I can say with confidence that we have a fantastic team of developers and designers who are dedicated to delivering top-notch software solutions to our clients.",
    job: "Jr.Front-end Developer",
    avatar: require("./images/testimonials/Anisha.jpeg"),
  },
  {
    id: 2,
    name: "Dixika Thapa",
    quote:
      "Working as a Ui/UX designer at TivraSoft was a fulfilling experience. The company provides ample opportunities for professional growth, fosters creativity, and encourages collaboration",
    job: "UI/UX Designer",
    avatar: require("./images/testimonials/Dixika.jpeg"),
  },
  {
    id: 3,
    name: "Joyti Sharma",
    quote:
      "Fosters a collaborative and supportive environment. There is a strong sense of friendship among team members, and management is approachable and invested in employee growth. ",
    job: "Full-Stack Developer",
    avatar: require("./images/testimonials/Jyoti.jpeg"),
  },
  {
    id: 4,
    name: "Siddhartha Gautam",
    quote:
      "  TivraSoft provides an excellent work environment for Front End developers. Our focus on professional growth, collaboration, and quality work is commendable. It is a pleasure to be a part of their team.",
    job: "Front-End Developer",
    avatar: require("./images/testimonials/siddhartha.jpeg"),
  },
  {
    id: 5,
    name: "Ukesh Mahato",
    quote:
      "As a Backend Developer at TivraSoft, I can attest to their commitment to excellence in every project. The company's culture of innovation, teamwork, and support makes it a great place to work.",
    job: "Back-End Developer",
    avatar: require("./images/testimonials/ukesh.jpeg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Web Development",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Flutter ",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Basic Computer Course",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
  {
    id: 2,
    name: "Flutter ",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  }
];

const CEO = require("./images/testimonials/binodsir.jpg");
const MD = require("./images/testimonials/rupaksir.jpg");



export const team = [
  {
    id: 1,
    image: CEO,
    name: "Binod Shah",
    designation: "Project Manager",
    socials: [
      { icon: <IoPersonSharp />, link: "https://binodshah.com.np/" },
    ],
  },
  {
    id: 2,
    image: MD,
    name: "Rupak Chaudhary",
    designation: "Senior Developer and Techincal Head",
    socials: [
      { icon: <IoPersonSharp />, link: "https://rajendramahato.com.np/" },
    ],
  },
  // {
  //   id: 3,
  //   image: Staff,
  //   name: "Prashant Chaudhary",
  //   job: "Office Staff",
  //   socials: [
  //     "https://instagram.com/",
  //     "https://twitter.com/",
  //     "https://facebook.com/",
  //     "https://linkedin.com/",
  //   ],
  // },
];
