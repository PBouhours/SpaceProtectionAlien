import logo from './logo/logo.png';
//import banner from './banner.jpg';
import './header.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Video from './video.mp4';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img src={logo} alt='logo' className='logo-banner' />
        <h1 className='title1'>Space Protection of Alien</h1>
        <div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/propose'>Proposez votre alien</Link>
          </li>
        </div>
      </div>
      <div className='title-container'>
<<<<<<< HEAD
        <div>
          <video
            class='video'
            autoplay='true'
            loop='true'
            muted='true'
            src={Video}
          ></video>
        </div>
        <h2 className='title2'>
          Bienvenue à l'intergalactique SPA ! Adoptez votre nouvel Alien ou tout
          autre espèce...
        </h2>
=======
        <h2 className='title2'>Bienvenue à l'intergalactique SPA !</h2>
>>>>>>> 01c90dca89c9bad3ef99b3170a17bc2a40ba5646
      </div>
      <div className='header-banner'></div>
    </div>
  );
};

export default Header;
