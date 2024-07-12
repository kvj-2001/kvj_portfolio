/* eslint-disable react/prop-types */
import './../../App.css'
import { useNavigate } from 'react-router-dom';

//project template
function ProjectMain(props){

    const navigate = useNavigate();

    const totalDetails = () => {
      navigate('/singleProject', { state: 
                        { ...props } 
                    });
    };

    return(
        <section className="sec">
            <div className="pro">
                <img src={props.image} alt="image" />
                <h5><span>Project Title</span>: {props.title}</h5>
                <p className="tech">{props.technology}</p>
                <p className="description">{props.description}</p>
                <button className="b2" onClick={totalDetails}>About Project</button>
                <button className="b2"><a href={props.reference}>View code</a></button>           
            </div>
        </section> 
    )
}

export default ProjectMain;