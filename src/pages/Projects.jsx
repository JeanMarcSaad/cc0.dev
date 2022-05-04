import {useState, useEffect} from 'react';
import Project from '../components/Project.jsx';
import TestImg from '../testdata/image.jpg';
import './Projects.css';

const name = "The Boneys";
const description = "666 Randomly generated bags of bones with some special 1/1s. No DAO, no token, no rug, no worries!";

const Projects = () => {
    const [projects, setProjects] = useState([...Array(30).keys()]);

    useEffect(() => {
        fetch("https://api.airtable.com/v0/appXEzEwljHYyfwh2/Table%201?api_key=keypDV6ITmqV6q8Jp")
        .then(res => res.json())
        .then((results) => {
            let _projects = results.records.filter((record) => record.fields['OpenSea Link'] != null).map(async (result) => {
                let _projectSlug = result.fields['OpenSea Link'].split('collection/')[1];
                let res = await fetch(`https://api.opensea.io/api/v1/collection/${_projectSlug}`);
                let json = await res.json();
                let _projectImg = json.collection.featured_image_url?json.collection.featured_image_url:json.collection.image_url;
                return {
                    id: result.id,
                    name: result.fields['Project Name'],
                    description: result.fields['Project Description'],
                    img: _projectImg
                }
            });
            Promise.all(_projects)
            .then((_updatedProjects) => (
                setProjects(_updatedProjects)
            ));
        })

    }, []);

    return (
        <div className="Projects">
            {
                projects.map((project, idx) => (
                    <Project key={project.id?project.id:idx} img={project.img?project.img:TestImg} name={project.name?project.name:name} description={project.description?project.description:description} />
                ))
            }
        </div>
    )
};

export default Projects;