import Hands from '../Assets/hands-heart 1.png'
import Ordreliste from '../Assets/Frame 63.png'
import { useState } from 'react'
import './Favoritprodukter.css'
import ProduktBillede from '../Assets/image 7.png'
import Bin from '../Assets/Frame 63 (1).png'

const Favoriteprodukter = () => {
  const [Edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(prevState => !prevState);
  }
  return (
    <div className='fav'>
     <img src={Hands} alt="Favorit vector" />
        <h2>FAVORITPRODUKTER</h2>
        <span><a href="#" onClick={handleClick}>Redigér</a></span>  
        <div className="favoritecard">
          <div className="fav-produkt">
            <img src={ProduktBillede} alt="" />
            <span className='fav-navn'>DYLAN PUSLEPUDE</span>
            <div className="float-right">
            <img src={Edit ? Bin : Ordreliste} alt={Edit ? "Skraldespand vector" : "Ordreliste vector"} />
            </div>
          </div>
          <div className="fav-produkt">
            <img src={ProduktBillede} alt="" />
            <span className='fav-navn'>DYLAN PUSLEPUDE</span>
            <div className="float-right">
              <img src={Edit ? Bin : Ordreliste} alt={Edit ? "Skraldespand vector" : "Ordreliste vector"} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Favoriteprodukter