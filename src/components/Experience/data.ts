
import MhcockpitLogo from "../../assets/Images/Company/MHCOCKPITLOGO.png";
import kassaimg from "../../assets/Images/Company/kasalogo.png";
import reactImg from "../../assets/Images/stack/react.svg";
import nodeImg from "../../assets/Images/stack/NodeJs.svg";
import expressImg from "../../assets/Images/stack/Express.png";
import mongoImg from "../../assets/Images/stack/MongoDB.svg";
import jsImg from "../../assets/Images/stack/Javascript.svg";
import tailwindImg from "../../assets/Images/stack/Tailwind.png";
import htmlImg from "../../assets/Images/stack/HTML.png";
import cssImg from "../../assets/Images/stack/CSS.png";
import githubImg from "../../assets/Images/stack/icons8-github-144.png";
import gitImg from "../../assets/Images/stack/Git.svg";
import graphQLImg from "../../assets/Images/stack/Graphql.svg";
import nextJsImg from "../../assets/Images/stack/icons8-nextjs-144.png";
import reduxImg from "../../assets/Images/stack/Redux.svg";
import saasImg from "../../assets/Images/stack/Saas.svg";
import materailUIImg from "../../assets/Images/stack/MaterialUI.svg";
import bootstrapImg from "../../assets/Images/stack/Bootstrap.svg";
import bashImg from "../../assets/Images/stack/Bash.svg";
import javaImg from "../../assets/Images/stack/icons8-java-500.png";
import springImg from "../../assets/Images/stack/icons8-spring-boot-240.png";
import sprintBootImg from "../../assets/Images/stack/icons8-spring-boot-480.png";


const experiences = [
  {
    year: " April 2024 - July 2024",
    title: "react Stack Developer Intern",
    company: "MH Cockpit",
    location: "Chennai, India",
    logo: MhcockpitLogo,
    description:
      "Contributed to building scalable web applications at MH Cockpit, creating interactive dashboards and improving user experience with React-based solutions",
    story:
      "This is where the fire truly lit up 🔥 — my internship at MH Cockpit kickstarted everything. I wasn’t just coding; I was crafting SaaS dashboards, building secure login systems, and bringing dynamic React UIs to life. The thrill of transforming raw ideas into interactive, user-friendly interfaces was unmatched. From late-night debugging sessions to finally seeing my features go live 🚀 — this was the foundation of my developer journey 🧱⚙️, where I realized how much I love turning complexity into simplicity through code.",
    techStackImgs: [
      reactImg,
      nodeImg,
      mongoImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      nextJsImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
    ],
  },
  {
    year: "Sep 2024 - Present",
    title: "Full Stack Developer",
    company: "Kassapos Softwer Pvt. Ltd.",
    location: "Varanasi, India",
    logo: kassaimg,
    description:
      "Currently working at Kasspos Software Solutions, developing full-scale CRM, e-commerce, and shipping management systems using React, Next.js, .NET, and Flutter. Built responsive dashboards, admin panels, and optimized complex workflows across the MERN and .NET stacks",
    story:
      "At Kasspos Software Solutions, I’m working across the stack to build impactful solutions 🚀. From full CRM platforms (school, employee, and admin panels) to modern e-commerce and shipping management systems, I’ve contributed to both frontend and backend using React, Next.js, .NET, and Flutter. Whether it’s crafting pixel-perfect UIs, developing responsive landing pages, or handling EDI file integrations — I’ve been part of delivering end-to-end software solutions that scale",
    techStackImgs: [
      reactImg,
      nodeImg,
      expressImg,
      mongoImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      graphQLImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
      springImg,
      sprintBootImg,
      javaImg,
    ],
  }
  
];

const reverseExperienceData = [
  {
    ...experiences[2],
    story:
      "Today, I’m deep into Java and enterprise-scale backend work at Cognis Solutions 🚢. But just a few months ago, I was immersed in the MERN stack jungle 🌴. It’s incredible how fast the transition was — from building full-stack apps in JavaScript to crafting microservices in Spring Boot ☕. At Cognis, I’m learning the rigor of scalable systems and the elegance of strong typing. Backend mastery in progress! ⚙️📈",
  },
  {
    ...experiences[1],
    story:
      "Before diving into the world of Java, I was wielding the full power of the MERN stack at Aradhya Technologies ⚒️. I crafted CRMs for schools and employees and polished responsive designs. This phase helped me solidify my full-stack skills and taught me how to build production-ready dashboards with JS firepower 🔥. It laid a solid ground before stepping into more structured enterprise systems.",
  },
  {
    ...experiences[0],
    story:
      "And it all began here — at Growquest Consultancy 🧠. My first taste of full-stack development came in the form of SaaS dashboards and OCR integrations 🧾. I still remember the thrill of deploying my first secure login system. Debugging those early bugs, pushing commits at midnight 🌙 — this was the spark that set everything in motion. From here, my tech journey truly started 🔧🚀.",
  },
];

export { experiences, reverseExperienceData };
