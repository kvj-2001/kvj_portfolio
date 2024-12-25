import './../../App.css'
import logo from './../../assets/images/J_Logo.png'
import { Link } from "react-router-dom";
import {Component} from 'react'

const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

class Headers extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <header>
                    <nav className='navbar'>
                    <img src={logo} alt="logo" />
                        <div>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/project'>Projects</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Headers;