import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './Projects.jsx';
import Separator from '../components/Separator.jsx';

import logo from './../assets/images/logo.png';
import projects from './../assets/images/svg/projects.svg';
import './Structure.css';

const Structure = () => {
    return (
        <div className="Structure">
            <div className="Sidebar">
                <div className="Sidebar-logo">
                    <img src={logo} alt="" />
                </div>
                <Separator />
                <div className="Sidebar-nav">
                    <h1 className="selected">Projects</h1>
                    <h1>Resources</h1>
                    <h1>About</h1>
                </div>
                <Separator />
                <div className="Sidebar-settings">
                    <h1>Projects</h1>
                    <input className="Sidebar-search" type="search" placeholder="Search for a project" />
                    <h1>Project Type</h1>
                    <input type="radio" id="projectTypeChoice1" name="project_type" value="1of1" />
                    <label className="label" htmlFor="projectTypeChoice1">1/1</label>
                    <input type="radio" id="projectTypeChoice2" name="project_type" value="generative"/>
                    <label className="label" htmlFor="projectTypeChoice2">Generative</label>
                </div>
                <Separator />
                <div className="Sidebar-submit-project">
                    <button >SUBMIT YOUR CCO PROJECT</button>
                </div>
            </div>
            <div className="Content">
                <Projects />
            </div>
        </div>
    )
}

export default Structure;