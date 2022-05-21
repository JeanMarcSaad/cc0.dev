import { useState } from 'react';
import {BsGlobe, BsTwitter} from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import not_found from '../assets/images/not_found.png';
import Opensea from '../assets/images/svg/opensea.svg';
import OpenseaPink from '../assets/images/svg/opensea_pink.svg';
import './ProjectCard.css';

const cleanText = (text) => {
    let _text = text?text:"";

    _text = _text.replaceAll('\\r', ' ');
    _text = _text.replaceAll('\\n', ' ');
    if(_text.includes("One Noun")) {
        console.log(text);
        console.log(_text);
    }
    return _text;
}

const ProjectCard = (props) => {
    const [imageUrl, setImageUrl] = useState(props.project.image_url?props.project.image_url:not_found);
    const [name, setName] = useState(props.project.name);
    const [description, setDescription] = useState(props.project.description?cleanText(props.project.description):"No Description Available.");
    const [openSeaHovered, setOpenSeaHovered] = useState(false);

    return (
        <div className='project'>
            <div className='project__img'>
                <img src={imageUrl} />
            </div>
            <div className='project__info'>
                <h1>{name}</h1>
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
            <div className='project__links'>
                {props.project.external_link&&<BsGlobe className='project__icon' onClick={() => window.open(props.project.external_link, "_blank")}/>}
                {props.project.twitter_username&&<BsTwitter className='project__icon' onClick={() => window.open(`https://twitter.com/${props.project.external_link}`, "_blank")}/>}
                {props.project.opensea_url&&<img className='project__icon' src={openSeaHovered?OpenseaPink:Opensea} onMouseEnter={()=>setOpenSeaHovered(true)} onMouseLeave={()=>setOpenSeaHovered(false)} onClick={() => window.open(props.project.opensea_url, "_blank")}/>}
            </div>
        </div>
    )
}

export default ProjectCard;