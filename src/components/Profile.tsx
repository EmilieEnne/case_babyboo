import User from '../Assets/user-check 1.png';
import Globe from '../Assets/Vector (Stroke).png';
import Arrow from '../Assets/chevron-down 1.png';
import './Profile.css'


type Props = {}

function Profile({}: Props) {
  return (
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
  )
}

export default Profile