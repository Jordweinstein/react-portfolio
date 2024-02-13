import DyslexiQuiz from "./images/dyslexiquiz.png"
import WebImage from "./images/webImage.jpg";

export default function Projects() {
    return (
        <div id="projects">
            <h2>Projects</h2>
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
                    <a href="https://github.com/Jordweinstein/react-portfolio.git">
                        <img className = "projImg" src={WebImage} alt = "Website" />
                    </a>
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
    )
}