
import Logo from '../Assets/BABYBOO.png';
import Søg from '../Assets/search 1.png'
import './NavBar.css'
import User from '../Assets/user-check 1.png';
import Globe from '../Assets/Vector (Stroke).png';
import Arrow from '../Assets/chevron-down 1.png';


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
            <div className="user">
                <img 
                src={User} 
                alt="user icon"
                />
                <span className='user'>
                Babybob
                </span>
            </div>
            <div className="land">
            <img src={Globe} alt="vector globe"/>
            <span>DK</span>
            <img src={Arrow} alt="arrow down" /> 
            </div>  
        </div>
    </nav>
  )
}

export default Navbar