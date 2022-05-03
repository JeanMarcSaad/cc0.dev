import { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from './assets/images/logo.png';
import cc0 from './assets/images/cc0.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/submit-project">
        <button className="App-submit">SUBMIT YOUR CCO PROJECT</button>
      </Link>
      <div className="App-cc0">
        {/*p className="details">A project by <a href="https://twitter.com/worldofnoun/">World of Noun</a></p>*/}
        <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank"><img src={cc0} alt="logo" /></a>
      </div>
    </div>
  )
}

export default App
