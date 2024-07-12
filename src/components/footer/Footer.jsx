import './../../App.css'
import linkdin from './../../assets/images/icons8-linkedin-48.png'
import github from './../../assets/images/icons8-github-50.png'
import hackerRank from './../../assets/images/hackerank.png'
import mail from './../../assets/images/icons8-gmail-48.png'

function Footer(){
    return(
        <>
            <footer>
                <h3>Contact Info</h3>
                <div>
                    <a href="https://www.linkedin.com/in/veerajayanth07/" target="_blank"><img src={linkdin} alt="LinkedIn" /></a>
                    <a href="mailto: veerajayanth07@gmail.com" target="_blank"><img src={mail} alt="Gmail" /></a>
                    <a href="https://github.com/kvj-2001" target="_blank"><img src={github} alt="GitHub" /></a>
                    <a href="https://www.hackerrank.com/profile/veerajayanth07" target="_blank"><img src={hackerRank} alt="HackerRank" /></a>
                </div>
            </footer> 
        </>
    )
}

export default Footer;