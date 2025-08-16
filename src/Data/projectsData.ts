import overlayImg from "../assets/Images/HelperImgs/overlay.png";
import Ecommainimg from "../assets/Images/HelperImgs/Ecommain.png";
import EcomSecImg from "../assets/Images/Projects/EcomMainMg.png";

 import mainImgPortfolio from "../assets/Images/Projects/PortfolioMainImg.png";
 import moviimainimgone from "../assets/Images/Projects/moviimain.png";
import secImgPortfolio from "../assets/Images/Projects/image.png";
import moviesec from "../assets/Images/Projects/moviesec.png";
import agroMainImg from "../assets/Images/Projects/agro.png";
import agrosecSecImg from "../assets/Images/Projects/agrosec.png";
import Img01 from "../assets/Images/Numbers/01.svg";
import Img02 from "../assets/Images/Numbers/02.svg";
import Img03 from "../assets/Images/Numbers/03.svg";
import Img04 from "../assets/Images/Numbers/04.svg";

const projectData = [
  {
    techStack: "React.js, Locomotive Scroll, Framer Motion",
    projectName: "Portfolio 2025",
    mainImg: secImgPortfolio,
    secImg: mainImgPortfolio,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "",
    svgNumberImg: Img01,
  },
  {
    techStack: "React, Node.js, Express, MongoDB",
    projectName: "Ecommerce For Stationery", 
    mainImg: Ecommainimg,
    secImg: EcomSecImg,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "https://www.penskart.com/",
    svgNumberImg: Img02,
  },
  {
    techStack: "React, Node.js, Express, MongoDB, Whatsapp API",
    projectName: "Movie show ",
    mainImg: moviimainimgone,
    secImg: moviesec,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "https://movieshower.netlify.app/",
    svgNumberImg: Img03,
  },
  {
    techStack: "React, Node.js, Express, MongoDB",
    projectName: "Agro Web",
    mainImg: agrosecSecImg,
    secImg: agroMainImg,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "https://mhagro.mhcglobal.info/",
    svgNumberImg: Img04,
  },
];

export default projectData;
