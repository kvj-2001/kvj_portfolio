import './../../App.css'
import Headers from './../header/Headers'
import Footer from './../footer/Footer'
import photo from "./../../assets/images/photo.jpg"
import java from './../../assets/images/java1.png'
import python from './../../assets/images/python.png'
import clang from './../../assets/images/c1.png'
import cplus from './../../assets/images/c++.png'
import html from './../../assets/images/html.png'
import css from './../../assets/images/css.png'
import js from './../../assets/images/js.png'
import react from './../../assets/images/react1.png'
import spring from './../../assets/images/spring.png'
import flask from './../../assets/images/flask.png'
import macos from './../../assets/images/macos.png'
import windows from './../../assets/images/windows.png'
import mysql from './../../assets/images/mysql.png'
import { useEffect } from 'react'

function About(){

    useEffect(() => {
        document.title = 'KVJ | About';
    }, []);

    return(
        <>
            <Headers />
                <br/><br/><br/>
                <section id = "profile">
                    <p>
                    <h3>Veera Jayanth K</h3>
                    Welcome to my portfolio! I am a 2023 graduate with a strong passion for programming and problem-solving, specializing in both backend and frontend development.
                    With a solid foundation in computer science and hands-on experience in various projects, I thrive on creating efficient and scalable solutions. 
                    My expertise spans across multiple programming languages and frameworks, allowing me to craft seamless user experiences and robust server-side functionalities.
                    I am dedicated to continuous learning and staying updated with the latest industry trends to deliver high-quality, innovative, and reliable software solutions. 
                    Explore my work and see how I turn complex challenges into elegant, functional applications.
                    </p>
                    <div>
                    <img src={photo} alt="" />
                    </div>
                </section>

                <section id="experience">
                    <p>
                        <h3>Experience</h3>
                        <ul>
                            <li>Working as a Developer for Volvo Cars.</li>
                            <li>Developing the backensd API's of the client</li>
                        </ul>
                    </p>
                </section>

                <br/>

                <section id = "education">
                    <table>
                        <tr>
                            <th colspan="4">Education Details</th>
                        </tr>
                        <tr>
                            <td>Bachelor of Technology</td>
                            <td>KKR & KSR Institute of Technology and Sciences</td>
                            <td>2023</td>
                            <td>73 %</td>
                        </tr>
                        <tr>
                            <td>Intermediate MPC</td>
                            <td>Sri Venkateswara Junior College</td>
                            <td>2019</td>
                            <td>95 %</td>
                        </tr>
                        <tr>
                            <td>10th ICSE</td>
                            <td>Little Flower E.M. School</td>
                            <td>2017</td>
                            <td>86 %</td>
                        </tr>
                    </table>
                </section>
                
                <br/>

                <section id='skills'>
                    <table>
                        <tr>
                            <th id="heading" colspan="5">Skill Set</th>
                        </tr>
                        <tr>
                            <th>Programming Languages</th>
                            <td><img src={java} alt="" /></td>
                            <td><img src={python} alt="" /></td>
                            <td><img src={clang} alt="" /></td>
                            <td><img src={cplus} alt="" /></td>
                        </tr>
                        <tr>
                            <th>Frontend</th>
                            <td><img src={html} alt="" /></td>
                            <td><img src={css} alt="" /></td>
                            <td><img src={react} alt="" /></td>
                            <td><img src={js} alt="" /></td>
                        </tr>
                        <tr>
                            <th>Backend</th>
                            <td><img src={spring} alt="" /></td>
                            <td><img src={flask} alt="" /></td>
                        </tr>
                        <tr>
                            <th>Operating System</th>
                            <td><img src={macos} alt="" /></td>
                            <td><img src={windows} alt="" /></td>
                        </tr>
                        <tr>
                            <th>Databases</th>
                            <td><img src={mysql} alt="" /></td>
                        </tr>
                    </table>
                </section>
            <Footer />
        </>
    )
}

export default About;