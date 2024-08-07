import './../../App.css'
import logo from './../../assets/images/icon.png'
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
                    <nav>
                    <img src={logo} alt="logo" />
                        <div>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/project'>Projects</Link>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Headers;