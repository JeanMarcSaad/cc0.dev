import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { useNavigate  } from "react-router-dom";
import project_data from './Projects.json';
import cc0 from '../assets/images/cc0.png';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate ();

    useEffect(() => {
      setProjects([...new Set(project_data)].sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }));
    }, [])

    const searchCallback = (evt) => {
        let _searchQuery = evt.target.value.toLowerCase().trim();
        if(_searchQuery == "")
            setProjects([...new Set(project_data)].sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            }));
        else {
            setProjects([...new Set(project_data)].filter((proj) => {
                return proj.name.toLowerCase().trim().includes(_searchQuery);
            }).sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
              }));
        }
    }

    return (
        <div className="projects">
            <div className="projects__header">
                <h1><span style={{fontSize: "14pt", marginRight: "2%", cursor: "pointer"}} onClick={()=>navigate('/')}><BsFillArrowLeftCircleFill/></span>Projects</h1>
                <p style={{color: "white"}}>The following {projects.length} Projects have been declared as <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" style={{fontSize: "12pt", margin: "0"}}><u style={{textDecorationColor: "#DB3585"}}><b>CC0</b></u></a>, and have therefore been placed in the public domain.</p>
                <p><Link to='/submit-project' className='styled'>Submit your project</Link></p>
            </div>
            <div className="projects__body">
                <input type="search" className='projects__search' placeholder='Search for a CC0 Project' onChange={searchCallback}/>
                <div className='projects__list'>
                {
                    projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))
                }
                </div>
            </div>
            {/* <div className="App-cc0">
                <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank"><img src={cc0} alt="logo" /></a>
            </div> */}
        </div>
    )
}

export default Projects;
