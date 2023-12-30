import DyslexiQuiz from "./images/dyslexiquiz.png"
import WebImage from "./images/webImage.jpg";
import CSSG from "./images/cssg.png";

export default function Projects() {
    return (
        <div id="projects">
            <h2>Projects and Experiences</h2>
            <div className="container">

                <div className="container2">
                    <h2>DyslexiQuiz</h2>
                    <a href="https://devpost.com/software/dyslexiquiz">
                        <img className = "projImg" src={DyslexiQuiz} alt="DyslexiQuiz"/>
                    </a>
                    <h3>HackNC 2023 Best UI/UX Hack</h3>
                    <p>
                        DyslexiQuiz is an IOS application built using Swift aimed towards improving
                        spelling, reading, and comprehension in children with dyslexia. My responsibilities
                        in this project included creating the home page, implementing a tab view, an 
                        creating and adding graphics into the application (Click on logo to view submission).
                    </p>
                </div>

                <div className="container2">
                    <h2>Personal Website</h2>
                    <img className = "projImg" src={WebImage} alt = "Website" />
                    <h3>Website Created with React.js</h3>
                    <p>
                        This website was created using React.js, incorporating elements of CSS, HTML, and JSX.
                        Click on the image above to view the github repository with the code.
                    </p>
                </div>
                <div className = "container2">
                    <h2>CS+Social Good</h2>
                    <img className="projImg" src={CSSG} alt="CSSG" />
                    <h3>Education Team Member</h3>
                    <p>
                        Accepted into the organization's education team, engaging in a rigorous curriculum of
                        full-stack development. Technologies and languages taught include HTML/CSS, Javascript, 
                        Next.js, and Supabase.
                    </p>

                </div>

            </div>
        </div>
    )
}