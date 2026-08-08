import {

  front,
  back,
  genai,
  aiml,
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  aws,
  docker,
  figma,
  mongodb,
  nodejs,
  redux,
  threejs,
  typescript,
  bootstrap,
  samaritans,
  oist,
  yashoda,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  pglife,
  sortingvisualiser,
  certApiTesting,
  certAwsGenai,
  certCcna,
  certCdacAi,
  certCdacBootcamp,
  certCppInfosys,
  certDigitalElectronics,
  certIbmFullstack,
  certMlCoursera,
  certPictImpetus,
  certPostman,
  certPowerbi,
  certProjectMgmt,
  certPythonUnstop,
  certSoftwareTesting,
  certTableau,
  projSalesEnquiry,
  projFinancialAdvisor,
  projPlacify,
  projCinebook,
  hackKurukshetra,
  hackInnohack,
  hackAgriai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    description:
      "Building responsive and scalable web applications using the MERN stack and modern technologies.",
    icon: "fullstack",
  },
  {
    title: "Backend Developer",
    description:
      "Designing secure APIs, managing databases, and building robust backend systems.",
    icon: "backend",
  },
  {
    title: "ML Developer",
    description:
      "Creating machine learning models and data-driven solutions for real-world impact.",
    icon: "ml",
  },

  {
    title: "Genai Developer",
    description:
      "Building generative AI applications and intelligent solutions using LLMs and modern AI tools.",
    icon: "genai",
  },
 
];

const education = [
  {
    title: "Bachelor of Technology in Computer Science Engineering (AI)",
    company_name: "Vishwakarma Institute of Information Technology, Pune",
    icon: oist,
    iconBg: "#fff",
    date: "2023-2027",
    points: [
      "Specialization in Artificial Intelligence with CGPA: 9.05/10",
      "Winner of Inter-College Hackathon Competition (2024) - AI-based Solution Development",
      "Finalist in National Coding Competition - Ranked in Top 50 across India",
      "Active Participant in Multiple Bug Bounty Competitions and Capture The Flag (CTF) Events",
      "Published technical articles on AI/ML implementations on industry platforms",
    ],
  },
  {
    title: "Class 12",
    company_name: "Loknete Subrao Kadam Jr. College, Satara",
    icon: yashoda,
    iconBg: "#fff",
    date: "2022-2023",
    points: [
      "Percentage: 80.67% | Secured 2nd Rank in College",
      "CET (Common Entrance Test) Score: 97.74 Percentile",
      "JEE Main Score: 87.06 Percentile",
      "Excellence in Physics and Mathematics with distinction grades",
    ],
  },
  {
    title: "Class 10",
    company_name: "Sushma Patil Vidyalaya Kamothe, Navi Mumbai",
    icon: samaritans,
    iconBg: "#fff",
    date: "2020-2021",
    points: [
      "Percentage: 96.00% | Secured 1st Rank in School (Topper)",
      "Distinguished Achievement in Science, Mathematics & English Subjects",
      "Winner of School-Level Science Fair with Innovative Project Presentation",
      "Recognized for Outstanding Academic Performance and Leadership Qualities",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Volunteer – Gandharv Fest",
    company_name: "Vishwakarma Institute of Information Technology",
    icon: oist,
    iconBg: "#fff",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Coordinated logistics for 3 large-scale college events with cross-functional teams.",
      "Managed 10+ volunteers to ensure smooth event execution and operations.",
      "Assisted in event setup, crowd management, and real-time issue resolution.",
      "Contributed to achieving approximately 95% attendee satisfaction through efficient coordination."
    ],
  },

  {
    title: "Web Developer – NSS Team",
    company_name: "Vishwakarma Institute of Information Technology",
        icon: oist,
    iconBg: "#fff",
    date: "Jun 2024 - Mar 2025",
    points: [
      "Developed and maintained 5+ web applications to improve user engagement and functionality.",
      "Conducted 10+ web development workshops, mentoring 50+ students and 5 junior developers.",
      "Collaborated with cross-functional teams to enhance application performance and user experience.",
      "Implemented responsive design and web optimization techniques for faster, scalable applications."
    ],
  },


  {
    title: "Software Development Engineer Intern",
    company_name: "Fluid Control Labs (FCL), Chakan",
    icon: oist,
    iconBg: "#fff",
    date: "Aug 2025 - Mar 2026",
    points: [
      "Developed a centralized MERN application for Sales Enquiry and NPD Tracking, replacing Excel-based workflows.",
      "Implemented JWT-based Role-Based Access Control (RBAC) for secure department-wise data management.",
      "Built KPI dashboards using React and Chart.js for real-time analytics and business insights.",
      "Automated Excel import/export using SheetJS, significantly reducing manual effort and improving operational efficiency.",
      "Collaborated with industry mentors and cross-functional teams to design scalable enterprise solutions."
    ],
  },

];

const extracurricular = [
  {
    title: "IBM Full Stack Software Developer",
    type: "Certification",
    icon: certIbmFullstack,
    iconBg: "#052FAD",
    date: "Mar 2026",
    points: ["Credential ID: OBLZPSQ8CN05", "15-course Professional Certificate"],
    credential: "https://coursera.org/verify/professional-cert/OBLZPSQ8CN05",
  },
  {
    title: "Machine Learning Specialization",
    type: "Certification",
    icon: certMlCoursera,
    iconBg: "#0056D2",
    date: "Jul 2025",
    points: ["Stanford Online & DeepLearning.AI", "Credential ID: OR9BTYKK45VU"],
    credential: "https://coursera.org/verify/specialization/OR9BTYKK45VU",
  },
  {
    title: "AWS Academy Graduate - Generative AI Foundations",
    type: "Certification",
    icon: certAwsGenai,
    iconBg: "#232F3E",
    date: "Oct 2025",
    points: ["12 hours", "Credential ID: c0e3b4a4-47ee-4ce5-9ea2-6265ec3c461a"],
    credential: "https://www.credly.com/badges/c0e3b4a4-47ee-4ce5-9ea2-6265ec3c461a",
  },
  // {
  //   title: "1.5K+ Connections on LinkedIn",
  //   type: "Achievements",
  //   icon: linkedin,
  //   iconBg: "#007BB5",
  //   date: "April 2023",
  //   points: ["Credential ID: Shubham Jadhav"],
  //   credential: "https://www.linkedin.com/in/Shubham Jadhav/",
  // },
  // {
  //   title: "Java (Basic), CSS, SQL (Basic)-HackerRank",
  //   type: "Certification",
  //   icon: hackerrank,
  //   iconBg: "#050C18",
  //   date: "2022-2023",
  //   points: [
  //     "Credential ID: aac000e38dc9",
  //     "Credential ID: a274bb1292eb",
  //     "Credential ID: b024370fa737",
  //   ],
  //   credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  // },
  // {
  //   title: "Web Development-Internshala",
  //   type: "Certification",
  //   icon: internshala,
  //   iconBg: "#1294C8",
  //   date: "Sept 2021",
  //   points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
  //   credential:
  //     "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  // },
  // {
  //   title: "Combat Sport-Karate",
  //   type: "Extracurricular(Hobby)/Combat Sport",
  //   icon: karate,
  //   iconBg: "#CCCFD8",
  //   date: "2006-2020",
  //   points: [
  //     "State level Gold medalist in Kumite.",
  //     "Renshi Cup National Championship Bronze medalist in Kumite.",
  //   ],
  // },
];

const certifications = [
  {
    title: "IBM Full Stack Software Developer",
    type: "Certification",
    icon: certIbmFullstack,
    iconBg: "#052FAD",
    date: "Mar 2026",
    points: [
      "Professional Certificate - 15 courses",
      "Credential ID: OBLZPSQ8CN05",
    ],
    credential: "https://coursera.org/verify/professional-cert/OBLZPSQ8CN05",
  },
  {
    title: "Machine Learning Specialization",
    type: "Certification",
    icon: certMlCoursera,
    iconBg: "#0056D2",
    date: "Jul 2025",
    points: ["Stanford Online & DeepLearning.AI", "Credential ID: OR9BTYKK45VU"],
    credential: "https://coursera.org/verify/specialization/OR9BTYKK45VU",
  },
  {
    title: "AWS Academy Graduate - Generative AI Foundations",
    type: "Certification",
    icon: certAwsGenai,
    iconBg: "#232F3E",
    date: "Oct 2025",
    points: ["12 hours", "Credential ID: c0e3b4a4-47ee-4ce5-9ea2-6265ec3c461a"],
    credential: "https://www.credly.com/badges/c0e3b4a4-47ee-4ce5-9ea2-6265ec3c461a",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    type: "Certification",
    icon: certCcna,
    iconBg: "#1BA0D7",
    date: "Jul 2024",
    points: ["Cisco Networking Academy", "Student-level credential"],
    credential:
      "https://drive.google.com/open?id=1UYigi-ej3OrRSUX1qPQnFpuJb_GyIrxC&usp=drive_copy",
  },
  {
    title: "Career Essentials in Project Management",
    type: "Certification",
    icon: certProjectMgmt,
    iconBg: "#0A66C2",
    date: "Feb 2025",
    points: [
      "Microsoft & LinkedIn Learning Path",
      "Credential ID: e23026571dfb1cdb99e44146f0013ec61bb6d66866c57caf09fedce094c966bd",
    ],
    credential:
      "https://drive.google.com/open?id=1FQkII-1IEIwbcbScKKi2NhNzHRn9bIPv&usp=drive_copy",
  },
  {
    title: "Getting Started with Software Testing",
    type: "Certification",
    icon: certSoftwareTesting,
    iconBg: "#0A66C2",
    date: "Nov 2025",
    points: [
      "LinkedIn Learning Path - 19h 30m",
      "Credential ID: 4f92c23775ecc9d67d289473ad9b6280617e23b581aa26a220ac3fd6e7568eae",
    ],
    credential:
      "https://drive.google.com/open?id=19BQQU6R1xLJWvqdxrHNsPFoYFUPD3Wt0&usp=drive_copy",
  },
  {
    title: "API Testing Foundations",
    type: "Certification",
    icon: certApiTesting,
    iconBg: "#0A66C2",
    date: "Nov 2025",
    points: [
      "LinkedIn Learning - 1h 35m",
      "Credential ID: 7e8914a2009cf69c6e92c8c64c7ee6278ac0f39155a354c2cbe40a5ad120ddbd",
    ],
    credential:
      "https://drive.google.com/open?id=1mWGlWwyDhfHt5XakC9qEBLHmKuo7QH6E&usp=drive_copy",
  },
  {
    title: "Postman Essential Training",
    type: "Certification",
    icon: certPostman,
    iconBg: "#FF6C37",
    date: "Nov 2025",
    points: [
      "LinkedIn Learning - 1h 45m",
      "Credential ID: 639cf640204501cc29050dd024e2c35e2254fecfa68ef88c1e90e3e4079ac345",
    ],
    credential:
      "https://drive.google.com/open?id=1Fuc8SBZCBq0gyJ424SP-Gco-AzTXbe5n&usp=drive_copy",
  },
  {
    title: "Complete Guide to Power BI for Data Analysts",
    type: "Certification",
    icon: certPowerbi,
    iconBg: "#F2C811",
    date: "Jan 2025",
    points: [
      "LinkedIn Learning / Microsoft Press - 7h 14m",
      "Credential ID: 2124623ce1fc475e31566db05a8fce905b9d6bda3968dd9c8da73ff241fb88f1",
    ],
    credential:
      "https://drive.google.com/open?id=1FlmnOcgealfYQiU9XPm97Qto0WI_oqAD&usp=drive_copy",
  },
  {
    title: "Tableau Essential Training",
    type: "Certification",
    icon: certTableau,
    iconBg: "#E97627",
    date: "Jan 2025",
    points: [
      "LinkedIn Learning - 4h 42m",
      "Credential ID: 5582d90a92c32a7847099faf7f209689bc6a97ae14d850be70638b76df22b9cc",
    ],
    credential:
      "https://drive.google.com/open?id=1EXlRNe4EdEFwhue7Ns5qFUR1gWy1pqge&usp=drive_copy",
  },
  {
    title: "Basic Certificate Course in Artificial Intelligence",
    type: "Certification",
    icon: certCdacAi,
    iconBg: "#1B4F9C",
    date: "Apr-May 2024",
    points: ["C-DAC Pune - FutureSkills PRIME", "Ref No: 04/2024/PUNE/AI/BRIDGE1485"],
    credential:
      "https://drive.google.com/open?id=1GLWlvkBHYnA_glJ1YTO1VPzxkz08VR5r&usp=drive_copy",
  },
  {
    title: "AI Bootcamp",
    type: "Certification",
    icon: certCdacBootcamp,
    iconBg: "#1B4F9C",
    date: "Sept 2024",
    points: [
      "C-DAC Pune with VIIT Pune - FutureSkills PRIME",
      "Ref No: FSP/BCMP/C-DAC/PUNE/AI001/2409/0077",
    ],
    credential:
      "https://drive.google.com/open?id=1ZfqeOIlRNs4H5WN_dsfn7pbgOrUrFQRn&usp=drive_copy",
  },
  {
    title: "PICT Impetus and Concepts '25",
    type: "Achievements",
    icon: certPictImpetus,
    iconBg: "#1E3A8A",
    date: "2025",
    points: ["Pune Institute of Computer Technology", "International-level Technical Event"],
    credential:
      "https://drive.google.com/open?id=1BbdrzcnlDiHhxB3adZcuARjEGPbwmo2C&usp=drive_copy",
  },
  {
    title: "C++ for Beginners",
    type: "Certification",
    icon: certCppInfosys,
    iconBg: "#007CC3",
    date: "Nov 2023",
    points: ["Infosys Springboard"],
    credential: "https://verify.onwingspan.com",
  },
  {
    title: "Digital Electronics",
    type: "Certification",
    icon: certDigitalElectronics,
    iconBg: "#007CC3",
    date: "Nov 2023",
    points: ["Infosys Springboard"],
    credential: "https://verify.onwingspan.com",
  },
  {
    title: "Basic Coding in Python",
    type: "Certification",
    icon: certPythonUnstop,
    iconBg: "#1C5FAD",
    date: "2024",
    points: ["Unstop"],
    credential:
      "https://drive.google.com/open?id=1rrWIHMzKT3PHYft_u9sMuTMNH_nzmCF7&usp=drive_copy",
  },
  // {
  //   title: "1.5K+ Connections on LinkedIn",
  //   type: "Achievement",
  //   icon: linkedin,
  //   iconBg: "#007BB5",
  //   date: "April 2023",
  //   points: ["Credential ID: Shubham Jadhav"],
  //   credential: "https://www.linkedin.com/in/Shubham Jadhav/",
  // },
  // {
  //   title: "Java (Basic), CSS, SQL (Basic) - HackerRank",
  //   type: "Certification",
  //   icon: hackerrank,
  //   iconBg: "#050C18",
  //   date: "2022-2023",
  //   points: [
  //     "Credential ID: aac000e38dc9",
  //     "Credential ID: a274bb1292eb",
  //     "Credential ID: b024370fa737",
  //   ],
  //   credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  // },
  // {
  //   title: "Web Development - Internshala",
  //   type: "Certification",
  //   icon: internshala,
  //   iconBg: "#1294C8",
  //   date: "Sept 2021",
  //   points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
  //   credential:
  //     "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  // },
];

const projects = [
  {
    name: "Sales & NPD Management Platform — Fluid Controls Pvt. Ltd.",
    description:
      "Centralized MERN Stack platform built during my Software Engineer Internship, used by 500+ users to manage sales enquiries, NPD workflows, KPI dashboards, and departmental records — replacing Excel-based processes. Implemented JWT-based RBAC for 5+ organizational roles and Excel import/export automation with validation and bulk processing, cutting manual effort by 80% and improving reporting accuracy by 50%.",
    icon: backend,
    tags: [
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "express.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "jwt-rbac", color: "green-text-gradient" },
    ],
    image: projSalesEnquiry,
    source_code_link: "https://sales-enquiry.vercel.app/",
    live_project_link: "https://sales-enquiry.vercel.app/",
  },
  {
    name: "Smart Financial Advisor Platform",
    description:
      "AI-powered financial management platform with 10+ features including voice navigation, OCR-based receipt scanning, expense tracking, financial calculators, community forums, and gamified financial-literacy modules. Uses LLM + RAG for an AI advisory chatbot and contextual query resolution, with Google OAuth 2.0 + JWT auth and real-time Socket.io communication on a MongoDB backend.",
    icon: aiml,
    tags: [
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
      { name: "llm-rag", color: "green-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: projFinancialAdvisor,
    source_code_link: "https://financial-advisior.vercel.app/",
    live_project_link: "https://financial-advisior.vercel.app/",
  },
  {
    name: "Placify — AI Powered Placement Preparation Platform",
    description:
      "AI placement-prep platform with real-time mock interviews (Technical, HR, Behavioral) powered by LLM + RAG for contextual questions and instant feedback. Includes an AI Career Roadmap Generator, a career-guidance chatbot for personalized learning paths, and an AI Resume Analyzer for ATS scoring, keyword-gap analysis, and optimization suggestions.",
    icon: genai,
    tags: [
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
      { name: "llm-rag", color: "green-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: projPlacify,
    source_code_link: "https://placify-one-self.vercel.app/",
    live_project_link: "https://placify-one-self.vercel.app/",
  },
  {
    name: "CineBook — Movie Ticket Booking & Theatre Management",
    description:
      "Full-stack MERN movie-ticket booking and theatre management system with JWT auth and role-based access for customers and admins. Features interactive seat selection, QR-based e-tickets, PDF ticket generation, snack and parking add-ons, plus an admin dashboard for movies, shows, bookings, and real-time revenue analytics.",
    icon: front,
    tags: [
      { name: "react", color: "green-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "express.js", color: "green-text-gradient" },
      { name: "mongodb-atlas", color: "pink-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: projCinebook,
    source_code_link: "https://movie-booking-system-mern-fawn.vercel.app/",
    live_project_link: "https://movie-booking-system-mern-fawn.vercel.app/",
  },
 {
  name: "Spotify Mini Project",
  description:
    "A fully functional Spotify music player web application built with vanilla HTML5, CSS3, and JavaScript. It includes play/pause, next/previous controls, volume control, progress bar seeking, song playlist management, and a responsive dark UI inspired by Spotify's design language.",
  icon: web,
  tags: [
    {
      name: "html5",
      color: "green-text-gradient",
    },
    {
      name: "css3",
      color: "green-text-gradient",
    },
    {
      name: "javascript",
      color: "pink-text-gradient",
    },
    {
      name: "responsive-ui",
      color: "green-text-gradient",
    },
  ],
  image: web,
  source_code_link: "https://github.com/shubham-031/Spotify_mini_project",
  live_project_link: "https://spotify-mini-project.vercel.app/",
},
  {
    name: "PG Life",
    description:
      "The PG-Life Web Application is a platform designed to facilitate the management and search for Paying Guest (PG) accommodations. It allows users to explore available PG options, view details, and connect with potential landlords or tenants.",
    icon: mobile,
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    source_code_link: "https://github.com/Shubham rajput2002/PG_Life",
    live_project_link: "https://github.com/Shubham rajput2002/PG_Life",
  },
  {
    name: "Sorting Visualizer",
    description:
      "The Sorting Visualizer is a web application that provides a visual representation of various sorting algorithms. It allows users to observe and understand how different sorting algorithms work by animating the sorting process.",
    icon: fullstack,
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: sortingvisualiser,
    source_code_link:
      "https://github.com/Shubham rajput2002/sorting-visualizer-project.github.io.git",
    live_project_link: "https://sorting-visuallizer.netlify.app/",
  },
];

const hackathons = [
  {
    title: "Kurukshetra 2025 - 1st Prize Winner",
    date: "August 2025",
    image: hackKurukshetra,
    points: [
      "Secured 1st Prize (Open Innovation) among 1000+ participants across India at the national-level hackathon.",
      "1st Prize",
      "National Level",
      "Open Innovation",
      "24-Hour Challenge",
    ],
    credential: "#",
  },
  {
    title: "InnoHack 2.0 - Top 5 Achievement",
    date: "July 30-31, 2025",
    image: hackInnohack,
    points: [
      "Secured Top 5 position among 250+ teams at Maharashtra's biggest hackathon.",
      "Top 5",
      "Innovation",
      "Teamwork",
      "Rapid Prototyping",
    ],
    credential: "#",
  },
  {
    title: "AgriAI Hackathon - Runner Up",
    date: "2025",
    image: hackAgriai,
    points: [
      "Secured Runner-Up position in agriculture technology hackathon focused on AI.",
      "Runner Up",
      "Agriculture Tech",
      "AI/ML",
      "Smart Farming",
      "Innovation",
    ],
    credential: "#",
  },

//   {
//   title: "10th Standard - 1st Rank",
//   date: "2021",
//   // image: web,
//   points: [
//     "Secured 1st Rank in Class 10 with 96.00% marks.",
//     "1st Rank",
//     "96.00%",
//     "Class 10",
//     "Academic Excellence",
//     "Sushma Patil Vidyalaya, Kamothe, Navi Mumbai",
//   ],
//   credential: "#",
// },

// {
//   title: "12th Standard - 2nd Rank",
//   date: "2023",
//   // image: web,
//   points: [
//     "Secured 2nd Rank in Class 12 with 80.67% marks.",
//     "Achieved 98 Percentile in MHT-CET Entrance Examination.",
//     "Academic Excellence",
//     "Loknete Subrao Kadam Jr. College, Satara",
//   ],
//   credential: "#",
// },


];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  certifications,
  projects,
  education,
  hackathons,
};
