import logo from './../assets/images/logo.png';
import projects from './../assets/images/svg/projects.svg';
import './Structure.css';

const Structure = () => {
    return (
        <div className="Structure">
            <div className="Header">
                <div className="Header-logo-div">
                    <img src={logo} alt="cc0.dev logo" />
                </div>
                <div className="Header-nav-div">
                    <div className="Header-nav-link selected">Projects</div>
                    <div className="Header-nav-link">Resources</div>
                    <div className="Header-nav-link">About</div>
                    <div className="Header-nav-link special">Submit Your CCO Project</div>
                </div>
            </div>
            <div className="Main">
                <div className="Sidebar">
                    <div className="Sidebar-title">
                        <img src={projects} alt="Title page" />
                        <input type="search" placeholder="Search for a CC0 project"/>
                    </div>
                </div>
                <div className="Content"></div>
            </div>
        </div>
    )
}

export default Structure;