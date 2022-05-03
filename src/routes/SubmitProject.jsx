import { useState } from 'react';

import logo from './../assets/images/logo.png';
import './SubmitProject.css';
import './../App.css';
import airtable from 'airtable';

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: import.meta.env.VITE_LIMITED_ACCESS
});

const SubmitProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState((new Date()).toLocaleDateString('en-CA'));
  const [website, setWebsite] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [openseaLink, setOpenseaLink] = useState("");
  const [discordLink, setDiscordLink] = useState("");

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  }

  const handleProjectDescriptionChange = (event) => {
    setProjectDescription(event.target.value);
  }

  const handleReleaseDateChange = (event) => {
    setReleaseDate(event.target.value);
  }

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  }

  const handleTwitterLinkChange = (event) => {
    setTwitterLink(event.target.value);
  }

  const handleOpenseaLinkChange = (event) => {
    setOpenseaLink(event.target.value);
  }

  const handleDiscordLinkChange = (event) => {
    setDiscordLink(event.target.value);
  }

  const handleSubmitProject = (event) => {
    try {
    const base = airtable.base("appXEzEwljHYyfwh2");
    base("tblO2dXwK2yNOEqQd").create({
        "Project Name": projectName,
        "Project Description": projectDescription,
        "Release Date": releaseDate,
        "Website": website,
        "Twitter Link": twitterLink,
        "OpenSea Link": openseaLink,
        "Discord Link": discordLink
    }, function(err, record) {
      if (err) {
        console.error(err);
        alert("An error has occured.");
        return;
      }
      window.location.href = '/thank-you';
    });
    } catch(err) {
      console.log(err)
      alert(err)
    }

    event.preventDefault();
  }

  return (
    <main className="SubmitProject--Main">
      <div className="SubmitProject--Header">
        <a href="/"><img src={logo} className="SubmitProject--Logo" alt="logo" /></a>
      </div>
      <div className="SubmitProject--Form">
        <form onSubmit={handleSubmitProject}>
          <label>Project Name:</label><input placeholder="Project Name" type="text" name="name" onChange={handleProjectNameChange} value={projectName} />
          <label>Project Description:</label><textarea placeholder="Project Description" type="text" name="name" onChange={handleProjectDescriptionChange} value={projectDescription} />
          <label>Release Date:</label><input placeholder="Release Date" type="date" name="name" onChange={handleReleaseDateChange} value={releaseDate} />
          <label>Website:</label><input placeholder="Website" type="text" name="name" onChange={handleWebsiteChange} value={website} />
          <label>Twitter Link:</label><input placeholder="Twitter Link" type="text" name="name" onChange={handleTwitterLinkChange} value={twitterLink} />
          <label>OpenSea Link:</label><input placeholder="OpenSea Link" type="text" name="name" onChange={handleOpenseaLinkChange} value={openseaLink} />
          <label>Discord Link:</label><input placeholder="Discord Link" type="text" name="name" onChange={handleDiscordLinkChange} value={discordLink} />

          <button type="submit" value="Submit" className="SubmitProject--Form-Submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default SubmitProject;
