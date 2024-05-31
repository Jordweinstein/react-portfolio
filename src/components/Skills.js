import java from './images/java.png';
import css from './images/css.png';
import html from './images/html.png';
import react from './images/react.png';
import swift from './images/swift.png';
import javascript from './images/javascript.png';


export default function Skills() {
    return (
        <>
        <div id="skills">
            <h2>SKILLS AND LANGUAGES</h2>
            <div className="container">
                <div className = "skillContainer">
                    <img className="skillImg" src = {java} alt = "java"/>
                    <h4>Java</h4>
                </div>
                <div className = "skillContainer">
                    <img className="skillImg" src = {html} alt = "html"/>
                    <h4>HTML</h4>
                </div>
                <div className = "skillContainer">
                    <img className="skillImg" src = {css} alt = "css"/>
                    <h4>CSS</h4>
                </div>
                <div className = "skillContainer">
                    <img className="skillImg" src= {react} alt = "react"/>
                    <h4>React</h4>
                </div>
                <div className = "skillContainer">
                    <img className="skillImg" src = {swift} alt = "swift"/>
                    <h4>Swift</h4>
                </div>
                <div className = "skillContainer">
                    <img className="skillImg" src = {javascript} alt = "javascript"/>
                    <h4>Javascript</h4>
                </div>
            </div>
        </div>
        </>
    )
}