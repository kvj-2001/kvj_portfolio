
import './../../App.css'
import ProjectMain from './../main/ProjectMain'
import ams from './../../assets/images/AMS.jpeg'
import s_bota from './../../assets/images/s-bota.jpg'
import Headers from './../header/Headers'
import Footer from './../footer/Footer'
import { useEffect } from 'react'

function Project(){

    useEffect(() => {
        document.title = 'KVJ | Project';
    }, []);

    return(
        <>
        <Headers />
        <br/><br/><br/>
            <main>
                <p>Projects</p>
                <hr/>
                <div className="grid">
                    <ProjectMain image={s_bota} 
                        title="S - BOTA" 
                        technology="IOT | Arduino" 
                        description="This project is used for knowing the quality of the water..."
                        description1="Smart Water Bottle is an IOT based project. In this project we use an app for
                                    displaying the amount of TDS and pH values of the water and suggests the
                                    quality of drinking water as well as to improve the quality of the water if
                                    necessary."
                        reference="#"/>

                    <ProjectMain image={ams} 
                        title="Airport Management System" 
                        technology="SQL | Springboot" 
                        description="This application was built using springboot framework with sql database for CRUD operations"
                        description1="#"
                        reference="https://github.com/kvj-2001/AirportManagementSystem"/>
                </div>
            </main>
        <Footer />
        </>
    )
}

export default Project;
