import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    sql,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo_chu,
    ensaf_logo,
    Python,
    Flutter,
    JEE,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    {
        title: "Full-Stack Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Python",
        icon: Python,
    },
    {
        name: "JEE",
        icon: JEE,
    },
    {
        name: "Flutter",
        icon: Flutter,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Initiation internship - Mobile Development",
        company_name: "CHU-Fès",
        icon: logo_chu,
        iconBg: "#383E56",
        date: "August 2022 - September 2022",
        points: [
            "Modelising and Developing a mobile application using Flutter and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web ASP.net Developer",
        company_name: "ENSAF | Academic Exam Project",
        icon: ensaf_logo,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Jan 2023",
        points: [
            "Developing and maintaining a Car Rental system management web application using ASP.net and other related technologies.",
            "Collaborating with My deer colleagues including designer lovers, backend specialist to create high-quality web-site.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Java | Snake Game",
        company_name: "ENSAF | Academic pursuit",
        icon: ensaf_logo,
        iconBg: "#383E56",
        date: "Feb 2022",
        points: [
            "Following my academic studies, I as a computer science student and as a software developer student manage and try to have fun with Java a much bit, and create a simple snake game using Java, yet it still needs some improvement that I will further do them later on.",
        ],
    },
    {
        title: "Parking lot management system",
        company_name: "ENSAF | University year-end project",
        icon: ensaf_logo,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Present",
        points: [
            "Developing and maintaining mobile application using Flutter and other related technologies.",
            "Collaborating with my cross-functional colleague, partner in this project, to create a high-quality product.",
            "Implementing responsive design as well a AI model API for futher license plate recognition.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Although he still had a lot to learn and experience, He manage to do a great work concerning his internship objectives.",
        name: "Mr. Makhlouk Mounir",
        designation: "Head of Computer Systems Operations Department",
        company: "CHU-Fès",
        image: logo_chu,
    },
    {
        testimonial:
            "Great Work, precise analytics, Brilliant Student, A great Future is looking ahead of you",
        name: "My Academic teacher",
        designation: "University Internship supervisor",
        company: "ENSAF",
        image: ensaf_logo,
    },
];

const projects = [
    {
        name: "Car Rental",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "ASP.Net MVC",
                color: "blue-text-gradient",
            },
            {
                name: "SQLServer",
                color: "green-text-gradient",
            },
            {
                name: "Csharp",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/MehdiLaouina",
    },
    {
        name: "CHUbook Mobile App",
        description:
            "Mobile application that allows health services pharmacies to authenticate to their personnel interface to view, verify and manage in details patients descriptions.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "REST API",
                color: "green-text-gradient",
            },
            {
                name: "NodeJS",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/MehdiLaouina?tab=repositories&q=CHUbook&type=&language=&sort=",
    },
    {
        name: "Parking Lot Management System",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "NodeJS",
                color: "pink-text-gradient",
            },
            {
                name: "AI model",
                color: "orange-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/MehdiLaouina",
    },
];

export { services, technologies, experiences, testimonials, projects };