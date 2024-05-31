import CSSG from "./images/cssg.png"
import Accenture from "./images/accenture.png"
import GWC from "./images/gwc.png"
import KTP from "./images/ktp.png"
import Skills from "./Skills.js"
import DyslexiQuiz from "./images/dyslexiquiz.png"
import WebImage from "./images/webImage.jpg";
import './styles/Experience.css';
import { useState } from "react"

const experiences = [
    { id: 1, 
        content: <div className = "content container2 experienceContainer">
                    <h2 className="navyText">CS + Social Good</h2>
                    <img src={CSSG} alt="CSSG" />
                    <h3>Backend Developer</h3>
                </div>, 
        hoverContent: <div className = "hoverContent container2 experienceContainer">
                        <p className = "navyText">
                            Incoming backend developer on the Project Team for COMPASS, a campaign for 
                            domestic violence survivors in the local Chapel Hill area. (prev Education Team member)
                        </p>
                    </div>, 
    },
    { id: 2, 
        content: <div className = "content container2 experienceContainer">
                    <h2 className="navyText">Girls Who Code</h2>
                    <img src={GWC} alt="GWC" />
                    <h3>Teaching Assistant</h3>
                </div>, 
        hoverContent: <div className = "hoverContent container2 experienceContainer">
                        <p className = "navyText">
                        Mentors 20+ students in advanced python and object oriented programming to foster a welcoming environment for 
                        females to break into the tech industry. Previously boosted GWC membership by actively communicating with 
                        administration from 4 local schools to increase presence as Community Outreach Coordinator.
                        </p>
                    </div>, 
    },
    { id: 3, 
        content: <div className = "content container2 experienceContainer">
                    <h2 className="navyText">Kappa Theta Pi</h2>
                    <img src={KTP} alt="KTP" />
                    <h3>Director of Diversity, Equity, and Inequality</h3>
                </div>, 
        hoverContent: <div className = "hoverContent container2 experienceContainer">
                        <p className = "navyText">
                        Organize/lead DEI workshops and direct club involvement in school-wide DEI events (i.e. Women in Tech Week) for an 
                        organization of over 40 people to increase diversity in technology at UNC.
                        </p>
                    </div>, 
    },
    { id: 4, 
        content: <div className = "content container2 experienceContainer">
                    <h2 className="navyText">Accenture</h2>
                    <img src={Accenture} alt="Accenture" />
                    <h3>Student Leadership Program</h3>
                    <p>Women in Technology Track</p>
                </div>, 
        hoverContent: <div className = "hoverContent container2 experienceContainer">
                        <p className = "navyText">
                        1 of 100/3,000 selected to engage in professional/technological development.
                        Attended the Accenture leadership summit at the Atlanta Innovation Hub to showcase skills, 
                        gain exposure to the technology consulting world, and connect with other student leaders.
                        </p>
                    </div>, 
    },
]

export default function Experience() {
    return (
        <>
        <h2 className="expTitle">EXPERIENCE AND LEADERSHIP</h2>
        <div className="container">
            {experiences.map((exp) => (
                <ExperienceContainer key={exp.id} experience={exp} />
            ))}
        </div>
        
        <div id="projects">
            <h2>PROJECTS</h2>
            <div className="container">
                <div className="projectContainer container2">
                    <div className="titleContainer">
                        <h2>DyslexiQuiz</h2>
                        <a href="https://devpost.com/software/dyslexiquiz">
                        <img className = "projImg" src={DyslexiQuiz} alt="DyslexiQuiz"/>
                    </a>
                    </div>
                    <h3>HackNC 2023 Best UI/UX Hack</h3>
                    <p>
                        DyslexiQuiz is an IOS application built using Swift aimed towards improving
                        spelling, reading, and comprehension in children with dyslexia. My responsibilities
                        in this project included creating the home page, implementing a tab view, an 
                        creating and adding graphics into the application (Click on logo to view submission).
                    </p>
                </div>

                <div className="projectContainer container2">
                    <div className = "titleContainer">
                        <h2>Personal Website</h2>
                        <a href="https://github.com/Jordweinstein/react-portfolio.git">
                            <img className = "projImg" src={WebImage} alt = "Website" />
                        </a>
                    </div>
                    <h3>Website Created with React.js</h3>
                    <p>
                        This website was created using React.js, incorporating elements of CSS, HTML, and JSX. 
                        My favorite features are the responsive navbar and site (adjusts to screen size using
                        media queries), as well as the implementation of a backend using supabase to keep track
                        of contact inquiries. Click on the image above to view the github repository.
                    </p>
                </div>

            </div>
        </div>

        <Skills />
        </>

    )
}

function ExperienceContainer({ experience }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className = "experienceContainer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? experience.hoverContent : experience.content}
        </div>
    )
}
