import Liste from '../Assets/Vector.png'
import './Bestillingsliste.css'
import ProduktCard from './ProduktCard'

type Props = {}

const Bestillingsliste = (props: Props) => {
  return (
    <div className='bestilling'>
        <img src={Liste} alt="Bestillingsliste vector" />
        <h2>BESTILLINGSLISTE</h2>
        <span><a href="">Gå til bestillingslisten</a></span>  
        <div className="bestilcard">
            <div className='total'>
              <span className='total-produkt'>12 produkter</span>
              <span className='total-værdi'>Total: 4598,95 DKK</span>
            </div>
            <div className="produkt">
              <div className='lys'>
                  <ProduktCard />
              </div>
              <div>
                  <ProduktCard />
              </div>
              <div className='lys'>
                  <ProduktCard />
              </div>
              <div>
                  <ProduktCard />
              </div>
            </div>
        </div>    
    </div>
  )
}

export default Bestillingsliste