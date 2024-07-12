import './../../App.css'
import Headers from './../header/Headers'
import Main from './../main/Main'
import Footer from './../footer/Footer'
import { useEffect } from 'react'

function Home(){

    useEffect(() => {
        document.title = 'KVJ | Home';
    }, []);

    return(
        <>
            <Headers />
            <br/><br/><br/>
            <Main />
            <Footer />
        </>
    )
}

export default Home;