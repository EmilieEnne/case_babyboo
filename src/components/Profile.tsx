import User from '../Assets/user-check 1.png';
import Globe from '../Assets/Vector (Stroke).png';
import Arrow from '../Assets/chevron-down 1.png';


type Props = {}

function Profile({}: Props) {
  return (
    <div className="profile">  
        <span>
            <img src={User} alt="user icon" />
            Babybob
        </span>
        <span>
            <img src={Globe} alt="vector globe" />
            DK
            <img src={Arrow} alt="arrow down" />
        </span>
    </div>
  )
}

export default Profile