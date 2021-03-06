import logo from './../assets/images/logo.png';
import twitterLogo from './../assets/images/social/twitter.svg';
import './ThankYou.css';
import './../App.css';

const ThankYou = () => {
  return (
    <main className="ThankYou--Main">
      <div className="ThankYou--Header">
        <a href="/"><img src={logo} className="ThankYou--Logo" alt="logo" /></a>
      </div>
      <div className="ThankYou--Form">
        <h1>Thank you!</h1>
        <p>We'll be reviewing your project, and reaching out on twitter as soon as it is listed.<br/><br/>
        You can checkout the list of currently submitted & approved projects <a href="/projects">here</a>.<br/><br/>
        In the mean time, this project is being built by <a href="https://twitter.com/worldofnoun">World of Noun</a>, and you can follow us for updates!</p>
        <br/><a href="https://twitter.com/worldofnoun"><img src={twitterLogo}></img></a>
      </div>
    </main>
  );
}

export default ThankYou;
