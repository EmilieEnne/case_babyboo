import Liste from '../Assets/Vector.png'
import './Bestillingsliste.css'
import ProduktCard from './ProduktCard'
import Produkt from './ProduktCard'

type Props = {}

const Bestillingsliste = (props: Props) => {
  return (
    <div className='bestilling'>
        <img src={Liste} alt="Bestillingsliste vector" />
        BESTILLINGSLISTE
        <span><a href="">Gå til bestillingslisten</a></span>  
        <div className="bestilcard">
            <div className='total'>
              <span className='total-produkt'>12 produkter</span>
              <span className='total-værdi'>Total: 4598,95 DKK</span>
            </div>
            <div className='produkt'>
                <ProduktCard />
                {/**Det ser ikke ud til at jeg kan få api kaldet til at fungere
                 * jeg kan identificere hvorfor. Jeg tror ikke der er fejl i 
                 * logikken/koden, jeg tror det er min forståelse med React der
                 * er problemet. 
                */}
            </div>
            <div className="produkt-dark">
                <ProduktCard />
            </div>
            <div className='produkt'>
              <img src="" alt="" /> {/*img url fra API*/}
              <span className='navn'>NAVN</span> {/**navn fra API */}
              <span>1 stk</span>
              <span>-12%</span>
              <span>499,99 DKK</span>
            </div>
            <div className='produkt-dark'>
              <img src="" alt="" /> {/*img url fra API*/}
              <span className='navn'>NAVN</span> {/**navn fra API */}
              <span>1 stk</span>
              <span>-12%</span>
              <span>499,99 DKK</span>
            </div>
        </div>    
    </div>
  )
}

export default Bestillingsliste