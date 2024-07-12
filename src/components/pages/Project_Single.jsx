
import './../../App.css'
import ProjectMain from './../main/ProjectMain'
import ams from './../../assets/images/AMS.jpeg'
import s_bota from './../../assets/images/s-bota.jpg'
import Headers from './../header/Headers'
import Footer from './../footer/Footer'
import { useEffect } from 'react'

function Project_Single(){

    useEffect(() => {
        document.title = 'KVJ | Project';
    }, []);

    return(
        <>
        <Headers />
            <main>
                
            </main>
        <Footer />
        </>
    )
}

export default Project_Single;
