import logo from './logo/logo.png';
//import banner from './banner.jpg';
import './header.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img src={logo} alt='logo' className='logo-banner' />
        <h1 className='title1'>Space Protection of Alien</h1>
        <div>
          <li>
            <Link to='/propose'>Proposez votre alien</Link>
          </li>
        </div>
      </div>
<<<<<<< HEAD

      <div className='header-banner'>
        <div className='logo-container'>
          <img src={logo} alt='logo' className='logo-banner' />
        </div>
        <div className='title-container'>
          <h2 className='title2'>Bienvenue à l'intergalactique SPA !</h2>
          <p className='title-desc'>
            Adoptez votre nouvel Alien, Robot ou tout autre espèce...
          </p>
        </div>
=======
      <div className='title-container'>
        <h2 className='title2'>
          Bienvenue à l'intergalactique SPA ! Adoptez votre nouvel Alien ou tout autre espèce...
        </h2>
>>>>>>> 43fed56eb2854aded193af8fe90146c5a6315546
      </div>
      <div className='header-banner'></div>
    </div>
  );
};

export default Header;
