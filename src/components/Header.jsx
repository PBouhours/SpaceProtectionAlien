import logo from '../data/photo/logo/logo.png';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <h1 className='title1'>Space Protection of Alien</h1>
      </div>
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
      </div>
    </div>
  );
};

export default Header;
