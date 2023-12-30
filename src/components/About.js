import headshot from './images/headshot.png';

export default function About() {
    return (
        <>
        <div id="about">
            <h2> About Me </h2>
            <div className= 'container'>
                <img src = {headshot} alt = "Headshot" className="aboutImg"/>    
                <div className = 'container2'>
                    <h4>
                        Hi! I am a sophomore at UNC Chapel Hill double majoring
                        in Computer Science and Mathematics with a minor in Data Science.
                    </h4>
                    <p>
                        I am passionate about leveraging technology to make a difference and aspire to apply my skills in problem-solving, teamwork, 
                        and creativity to create great products. 
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