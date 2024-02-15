
import Logo from '../Assets/BABYBOO.png';
import Søg from '../Assets/search 1.png'
import Profile from './Profile';
import './NavBar.css'


const Navbar = () => {   
  return (
    <nav className="navbar">
        <a className="navbar-brand" href="#">
            <img 
            className="logo" 
            src={Logo} 
            alt="Babyboo logo" />
        </a>
        <div className="valg">
            <span>SERIER</span>
            <span>VUGGE</span>
            <span>BØRNESENGE</span>
            <span>OPBEVARING</span>
            <span>HØJSTOL</span>
            <span>PUSLE</span>
            <span>TEKSTILER</span>
            <span>TILBEHØR</span>
            <span>RESERVEDELE</span>
        </div>
        <div className="search">
            Søg
            <img 
            src={Søg} 
            alt="lup" />
        </div>
        <div className="profile">
            <Profile />
        </div>
    </nav>
  )
}

export default Navbar