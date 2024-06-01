import headshot from './images/headshot.png';
import Contact from "./Contact";
import Carousel from './Carousel';

export default function About() {
    const images = [
        'https://via.placeholder.com/800x400/ff5733/fff',
        'https://via.placeholder.com/800x400/33ff57/fff',
        'https://via.placeholder.com/800x400/5733ff/fff',
      ];
    return (
        <>
        <div>
            <div className= 'container' id= "about">
                <img src = {headshot} alt = "Headshot" className="aboutImg"/>    
                <div className = 'container2'>
                    <h3>
                        Hi! I am a rising junior at UNC Chapel Hill double majoring
                        in Computer Science and Mathematics with a minor in Neuroscience.
                    </h3>
                    <p>
                        My mix of majors and minors highlights my curiosity and eagerness for
                        exploring different fields. I am passionate about leveraging technology to make a difference and aspire to apply my skills 
                        in problem-solving, teamwork, and creativity to create great products and leave an impact on the industry. 
                    </p>
                    <p>
                        Specifically, I am 
                        an advocate for diversity in technology -- as a woman pursuing a career in a male-dominated field, I am constantly seeking ways 
                        to encourage diversity, whether as the director of DEI for Kappa Theta Pi (professional technology fraternity) or as a Teaching 
                        Assistant for Girls Who Code @ UNC. Take a look at <a href="./Experience">my experience</a> for more!!
                    </p>
                    <p>
                        <b>Fun facts:</b> I once held the highest Subway Surfers score in the country, I can type 143 words per minute, and I play the guitar.
                    </p>
                </div>
            </div>
            
            <div className = "container" id="travel" style={{color: 'white'}}>
                <div className = "travel-container">
                    <h2>My Travels</h2>
                    <h3>One of my favorite hobbies is traveling around the world seeing new sites, concerts, and cultures. Throughout my different journeys,
                        I have picked up some skills in photography. My excitement for exploring new places, immersing
                        myself in new cultures, and documenting everything along the way parallels to my passion for 
                        constantly embracing new knowledge and inspiring others along the way!! Take a look at some
                        of my favorite pictures I've taken :)
                    </h3>
                </div>
                <Carousel images={images} />
            </div>
            <Contact />
        </div>

        </>
    )
}