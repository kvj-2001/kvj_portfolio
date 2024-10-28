/* eslint-disable react/no-unescaped-entities */
import work from './../../assets/images/work.jpg'
import pdf from './../../assets/images/KVJ - OCT Resume.pdf'
import './../../App.css'

function Main(){
    return(
        <section id="hero">
                <div>
                <h1 id = 'hi'>Hi, I am <br/></h1>
                    <h1>Veera Jayanth Kuppam </h1>
                    <p>I'm an Engineering Graduate, and enthusiatic of learning the new skills and using them to solve the Industry Relevant Problems.</p>
                    <a href={pdf} view="KVJ - OCT Resume.pdf"><button className="button">View resume</button></a>
                    <a href={pdf} download="KVJ - OCT Resume.pdf"><button className="button">Download resume</button></a>
                </div>
                <img src={work} />
        </section>  
    )
}

export default Main;