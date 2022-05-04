import Pill from '../components/Pill.jsx';
import {VscGlobe} from 'react-icons/vsc';
import {BsTwitter, BsDiscord} from 'react-icons/bs';
import './Project.css';

const Project = (props) => {
    return (
        <div className="Project">
            <div className="Project-img">
                <img src={props.img} alt="Project image" />
            </div>
            <h1>{props.name}</h1>
            <p title={props.description}>{props.description}</p>
            <Pill />
            <div className="Project-icons">
                <VscGlobe/>
                <BsTwitter/>
                <BsDiscord/>
            </div>
        </div>
    )
}

export default Project;