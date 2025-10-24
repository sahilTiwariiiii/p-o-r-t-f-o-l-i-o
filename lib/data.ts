import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SDE Intern, Gounicrew",
    location: "On-site",
    description:
      "Designed and developed a full-fledged HRMS with SuperAdmin, CompanyAdmin/HR, and Employee dashboards; implemented role-based access, attendance, leave, payroll, and secure auth; contributed across API integration, data modeling, and deployment.",
    icon: React.createElement("img", {
      src: "/guclogo.png",
      alt: "Gounicrew",
      style: { width: "85%", height: "85%", objectFit: "contain", objectPosition: "center", borderRadius: "50%" },
    }),
    date: "Jul 2025 – Present",
  },
  {
    title: "Web Developer Intern, Tonny LLC",
    location: "New York, USA (Remote)",
    description:
      "Built and enhanced an eCommerce platform using the MERN stack; created responsive React UI components, integrated REST APIs, and collaborated via Git and agile sprints across time zones.",
    icon: React.createElement("img", {
      src: "/tonnyllc.jpg",
      alt: "Tonny LLC",
      style: { width: "85%", height: "85%", objectFit: "contain", objectPosition: "center", borderRadius: "50%" },
    }),
    date: "Dec 2023 – Mar 2024",
  },
  {
    title: "Web Developer Intern, Bambhari",
    location: "Mumbai, India",
    description:
      "Developed reusable React components for core flows, integrated REST APIs for dynamic course content, and assisted backend routes with Express.js and MongoDB.",
    icon: React.createElement("img", {
      src: "/bambhari.png",
      alt: "Bambhari",
      style: { width: "85%", height: "85%", objectFit: "contain", objectPosition: "center", borderRadius: "50%" },
    }),
    date: "Jul 2023 – Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "HRMS Platform",
    description:
      "Designed and developed a full-fledged HRMS platform with three user dashboards – SuperAdmin, CompanyAdmin/HR, and Employee – each with role-based access control and unique workflows.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: "/hrmsproject.png",
    linkToProject: "https://bitbucket.org/samratt/h-r-m-s-p-r-o-j-e-c-t/src/main/",
    sourceCodeUrl: "https://bitbucket.org/samratt/h-r-m-s-p-r-o-j-e-c-t/src/main/",
  },
  {
    title: "Lead Generation",
    description:
      "A Subscription-Based Lead Generation Platform where merchants can create and embed lead forms, manage leads, and track performance under paid plans. Each plan allows one form (500 leads/month) with monthly or yearly billing via Paypal.",
    tags: ["React.js", "Spring Boot", "PayPal"],
    imageUrl: "/leadgenerationproject.png",
    linkToProject: "https://bitbucket.org/samratt/l-e-a-d-g-e-n-e-r-a-t-i-o-n/src/main/",
    sourceCodeUrl: "https://bitbucket.org/samratt/l-e-a-d-g-e-n-e-r-a-t-i-o-n/src/main/",
  },
  {
    title: "Harigurus",
    description:
      "An intuitive event booking platform focused on simplifying scheduling of spiritual and cultural services such as Mundan and Namkaran ceremonies.",
    tags: ["Node.js", "React.js", "React Icons", "CSS"],
    imageUrl: "/firstfirst (1).png",
    linkToProject: "https://www.harigurus.com",
    sourceCodeUrl: "https://github.com/sahilTiwariiii/Harigurus-Project",
  },
  {
    title: "MERN eCommerce Website",
    description:
      "A full-featured, modern, and scalable eCommerce app built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes an admin dashboard for managing products, categories, and users, along with a payment gateway integration for smooth transactions.",
    tags: ["Node.js", "React.js", "MongoDB", "Redux", "Bootstrap"],
    imageUrl: "/peorra.png",
    linkToProject: "https://ecomm-wjlj.onrender.com/",
    sourceCodeUrl: "https://github.com/sahilTiwariiii/plexora",
  },
  {
    title: "Countries Explorer",
    description:
      "A dynamic web app built using pure JavaScript, where you can explore detailed country information. It fetches and displays real-time country data without relying on frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    imageUrl: "/lii.png",
    linkToProject: "https://restcountriessam.netlify.app/",
    sourceCodeUrl: "https://github.com/sahilTiwariiii/rest-countries",
  },
  {
    title: "Email Spam Classification",
    description:
      "Spam Classifier is a machine learning project that classifies emails as spam or not spam using NLP techniques. It utilizes the SMS Spam Collection Dataset to filter out unwanted messages.",
    tags: ["Numpy", "Pandas", "Python", "NLP"],
    imageUrl: "/email.png",
    linkToProject: "https://email-spam-classifier-sahil.streamlit.app",
    sourceCodeUrl: "https://github.com/sahilTiwariiii/Email-Spam-Classifier",
  },
  {
    title: "Laptop Price Prediction",
    description:
      "Predicts laptop prices based on features such as brand, RAM, weight, touchscreen, CPU brand, HDD, SSD, GPU brand, and operating system. The model uses these specifications to provide accurate price estimates.",
    tags: ["Numpy", "Pandas", "Python", "NLP"],
    imageUrl: "/laptop.png",
    linkToProject: "https://laptop-price-predictor-wawmgvq8mkuulb4dem2jea.streamlit.app/",
    sourceCodeUrl: "https://github.com/sahilTiwariiii/Laptop-Price-Predictor",
  },
  {
    title: "Diwali Sales Analysis",
    description:
      "Analyzed Diwali sales data using Python, Pandas, and Seaborn to uncover customer behavior and product trends. Visualizes patterns in gender, age, occupation, and product preferences during the festive season.",
    tags: ["Numpy", "Pandas", "Python"],
    imageUrl: "/diwa.png",
    linkToProject: "https://github.com/sahilTiwariiii/Diwali-analysis",
    sourceCodeUrl: "https://github.com/sahilTiwariiii/Diwali-analysis",
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "TypeScript",
  "Java",
  "JavaScript",
  "JavaScript (ES6+)",
  "REST APIs",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "React.js",
  "Redux",
  "Next.js",
  "MongoDB",
  "Socket.IO",
  "Linux",
  "Git & GitHub",
  "Postman",
  "Spring Boot",
  "Microservices",
  "AWS",
  "EC2",
  "CloudFront",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "SonarQube",
  "GCP",
  "Prometheus",
  "Grafana",
] as const;
