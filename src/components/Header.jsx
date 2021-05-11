import logo from '../data/photo/logo/logo.png';
import banner from '../data/photo/banner.jpg';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <img src={logo} alt='logo' className='logo-banner' />
        <h1 className='title1'>Space Protection of Alien</h1>
      </div>
      <div className='title-container'>
        <h2 className='title2'>
          Bienvenue à l'intergalactique SPA ! Adoptez votre nouvel Alien, Robot
          ou tout autre espèce...
        </h2>
      </div>
      <div className='header-banner'></div>
    </div>
  );
};

export default Header;
