import {PiFlowerLotusThin} from "react-icons/pi";

export const skills = {
    Frontend: ["React", "Next.js", "Tailwind", "TypeScript", "Javascript", "Html", "Css", "Bootstrap"],
    Backend: ["Next.js", "Java", "SpringBoot", "MySql", "PostgreSQL", "REST APIs"],
    Tools: ["Git", "Github", "AWS", "Figma", "Docker", "JetBrains IDEs", "VS Code", "Postman", "DBavera"],
    Languages: ["English", "Sinhala", "Tamil"],
};

export const experience = [
    {
        title: "Full Stack Software Engineering Trainee",
        company: "Make It Viral Media and Technology",
        period: "2025 – 2026",
        desc: "Developed and maintained integration-based web applications using Next.js and REST APIs. " +
            "Resolved production issues, optimized API performance, " +
            "and collaborated within Agile sprint cycles to deliver scalable features and improvements.",
    },
];

export const education = [
    {
        degree: "Bachelor of Science in Software Engineering",
        school: "Birmingham City University ·",
        period: "2023 - 2024",
        desc: "Completed BSc (Hons) in Software Engineering with Second Class Honours (Upper Division)."
    },
    {
        degree: "Professional Higher National Diploma in Software Engineering",
        school: "UK Awards ·",
        period: "2022 - 2023",
        desc: "Completed Level 5 Professional Higher National Diploma in Software Engineering."
    },
    {
        degree: "Professional Diploma in Software Engineering",
        school: "UK Awards ·",
        period: "2021 - 2022",
        desc: "Completed Level 4 Professional Diploma in Software Engineering."
    },
    {
        degree: "Advanced Level",
        school: "Lumbini College ·",
        period: "2018 - 2019",
        desc: "Discontinued studies due to personal reasons."
    },
    {
        degree: "Ordinary Level",
        school: "Lumbini College ·",
        period: "2007 - 2017",
        desc: "Completed Ordinary Level education."
    }
];

import {
    IoMailSharp,
    IoCallSharp,
    IoLogoGithub,
} from "react-icons/io5";

import {FaLinkedinIn} from "react-icons/fa";
import {GiFeather, GiSriLanka} from "react-icons/gi";
import {AiOutlineGlobal} from "react-icons/ai";

export const social = [
    {
        icon: IoMailSharp,
        text: "shahulhameed.thabith@gmail.com",
        link: "mailto:shahulhameed.thabith@gmail.com",
    },
    {
        icon: IoCallSharp,
        text: "+94 76 655 3936",
        link: "tel:+94766553936",
    },
    {
        icon: GiSriLanka,
        text: "Colombo, Sri Lanka",
        link: "https://maps.google.com/?q=Small+Mosque+Road+Colombo+Sri+Lanka",
    },
    {
        icon: FaLinkedinIn,
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/thabithshahulhameed/",
    },
    {
        icon: IoLogoGithub,
        text: "GitHub",
        link: "https://github.com/thabith2001",
    },
    {
        icon: AiOutlineGlobal,
        text: "thabith.dev",
        link: "https://thabith-portfolio.vercel.app/",
    },
];


export const projects = [
    {
        icon: PiFlowerLotusThin,
        name: "Lotus Salon",
        desc: "Developed during my internship at Make It Viral Media and Technology," +
            " this SaaS analytics dashboard was built using Next.js, TypeScript, MongoDB," +
            " and Tailwind CSS. The platform includes secure authentication with NextAuth." +
            "js and Stripe payment gateway integration for subscription handling." +
            " Implemented features such as membership management, subscription management," +
            " analytics reporting, and responsive dashboard interfaces." +
            " The application provides real-time insights into user engagement," +
            " revenue tracking, and customer retention while delivering a seamless user experience across devices.",
        tags: ["Next.js", "TypeScript", "MongoDb", "Tailwind", "Stripe"],
        stars: 0,
        forks: 0,
        views: 0,
        github: "https://github.com/Thabith2001/lotus-nail-salon",
        live: "https://lotus-salon.vercel.app/",
    },

    {
        icon: GiFeather,
        name: "Music Streaming App",
        desc: "This is Pure Mobile Application developed using Java Gradle and Android Studio. this application had a liberary to save favourite songs and play them. It also had a feature to play music in the background and a notification to control the music. i have used google api ,facebook api to authenticate users and firebase to store user data and songs data. This application is still in development and i am planning to add more features to it in the future.",
        tags: ["Java Gradle", "Firebase", "RoomDb", "google api", "facebook api"],
        stars: 0,
        forks: 0,
        views: 0,
        github: "https://github.com/Thabith2001/Music-Streaming-Application",
        live: "",
    }
];

export  const datasets = {
    blueprint: {
        title: 'The Tech Stack Blueprint',
        subtitle:
            'Most Popular & Recruiter-Friendly',
        data: [
            { name: 'Frontend', value: 40 },
            { name: 'Backend', value: 35 },
            { name: 'Database & APIs', value: 15 },
            { name: 'DevOps & Tools', value: 10 },
        ],
    },

    lifecycle: {
        title: 'The Project Lifecycle',
        subtitle:
            'Great for Showcasing Full-Cycle Experience',
        data: [
            { name: 'UI/UX Development', value: 25 },
            { name: 'Application Logic', value: 35 },
            { name: 'API & Database', value: 25 },
            { name: 'Deployment & Maintenance', value: 15 },
        ],
    },

    workflow: {
        title: 'The "How I Work" Mix',
        subtitle:
            'Best for Personal Branding & Engineering Style',
        data: [
            { name: 'Problem Solving', value: 30 },
            { name: 'Frontend Engineering', value: 30 },
            { name: 'Backend Systems', value: 25 },
            { name: 'Performance & Scalability', value: 15 },
        ],
    },
};

export const COLORS = ['#4ade80', '#22c55e', '#16a34a', '#166534'];