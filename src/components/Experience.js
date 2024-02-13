import CSSG from "./images/cssg.png"
import Accenture from "./images/accenture.png"
import GWC from "./images/gwc.png"
import KTP from "./images/ktp.png"

export default function Experience() {
    return (
        <div id = "experience" >
            <h2 style = {{ color: 'navy' }}> Experience and Leadership </h2>
            <div className = "container">
                <div className = "experienceContainer">
                    <h2 className = "navyText">CS+Social Good</h2>
                    <img className="projImg" src={CSSG} alt="CSSG" />
                    <h3 className = "navyText">Backend Developer</h3>
                    <p className = "navyText">
                        Incoming backend developer on the Project Team for COMPASS, a campaign for 
                        domestic violence survivors in the local Chapel Hill area. (prev Education Team member)
                    </p>
                </div>
                <div className = "experienceContainer">
                    <h2 className = "navyText">Girls Who Code</h2>
                    <img className="projImg" src={GWC} alt="Girls Who Code" />
                    <h3 className = "navyText">Teaching Assistant</h3>
                    <p className = "navyText">
                        Supports over 20 girls bi-weekly in the advanced section of coding classes. Specifically 
                        aids in Python and other programming concepts. (Prev Community Outreach Coordinator)
                    </p>
                </div>
                <div className = "experienceContainer">
                    <h2 className = "navyText">Kappa Theta Pi</h2>
                    <img className="projImg" src={KTP} alt="Kappa Theta Pi" />
                    <h3 className = "navyText">Diversity, Equity, and Inclusion Chair</h3>
                    <p className = "navyText">
                    One of 12 members out of 100+ applicants accepted into the pre-professional technology 
                    fraternity. Organizes and leads DEI-related activities and events for an organization of over 40 
                    people.
                    </p>
                </div>
                <div className = "experienceContainer">
                    <h2 className = "navyText">Student Leaders Program</h2>
                    <img className="projImg" src={Accenture} alt="Accenture" />
                    <h3 className = "navyText">Women in Technology Track</h3>
                    <p className = "navyText">
                    1 of 100/3,000 applicants selected to engage in professional/technological 
                    development under mentorship of Accenture leadership. Invited to leadership summit in April.
                    </p>
                </div>
            </div>
        </div>
    )
}