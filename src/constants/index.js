import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    OASIS,
    methodist,
    webel,
    heritage,
    python,
    linux,
    TF,
    karlot,
    asl,
    portflio
  } from "../assets";
  
  export const navLinks = [
    {
      id:"hero",
      title:"Home"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title:"Skills"
    },
   
    {
      id: "work",
      title: "Projects",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Reactjs Developer",
      icon: creator,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  
    {
      name: "git",
      icon: git,
    },
   
   
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "Shree Gurukul School Kasrawad",
      icon: methodist,
      iconBg: "#E6DEDD",
      date: "2019-2021",
      points: [
        "Passed 10th and 12th standard from CBSE board.",
        "Secured a total of 90% and 76% respectively."
      ],
    },
    {
      title: "College",
      company_name: "IES IPS Academy, Indore",
      icon: heritage,
      iconBg: "#E6DEDD",
      date: "Aug 2021-June 2025",
      points: [
        "Pursuing Bachelors of Technology in Computer Science and Engineering",
        "Secured a CGPA of 8.25",
        
      ],
    }
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
 
    {
      name: "Study Notion",
      description:
        "Full Stack Edtech Platform built using React and Redux functionality in fronted and Express...",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Node Js",
          color: "green-text-gradient",
        },
        {
          name: "Express Js",
          color: "pink-text-gradient",
        },

        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },

      ],
      image: asl,
      source_code_link: "htt",
    },
    {
      name: "Personal Portfolio",
      description:
        "My portfolio, built with React and Three.js, showcases my work using , interactive experiences, and...",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portflio,
      source_code_link: "https",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };