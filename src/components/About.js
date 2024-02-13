import headshot from './images/headshot.png';

export default function About() {
    return (
        <>
        <div id="about">
            <h2> About Me </h2>
            <div className= 'container'>
                <img src = {headshot} alt = "Headshot" className="aboutImg"/>    
                <div className = 'container2'>
                    <h3>
                        Hi! I am a sophomore at UNC Chapel Hill double majoring
                        in Computer Science and Mathematics with a minor in Neuroscience.
                    </h3>
                    <p>
                        I am passionate about leveraging technology to make a difference and aspire to apply my skills in problem-solving, teamwork, 
                        and creativity to create great products and leave an impact on the industry. Specifically, I am an advocate for 
                        diversity in technology -- as a woman pursuing a career in a male-dominated field, I am constantly seeking ways to encourage
                        diversity, whether as the DEI chair for Kappa Theta Pi (professional technology fraternity) or as the community outreach
                        coordinator for Girls Who Code @ UNC.  
                    </p>
                    <p>
                        Some fun facts about me are that I am from Manhattan, 
                        I once held the world's highest score in Subway Surfers, and in my 
                        free time I enjoy playing guitar, reading, and snowboarding.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}