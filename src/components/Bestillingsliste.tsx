import Liste from '../Assets/Vector.png'
import './Bestillingsliste.css'

type Props = {}

const Bestillingsliste = (props: Props) => {
  return (
    <div className='Bestilling'>
        <img src={Liste} alt="Bestillingsliste vector" />
        Bestillingsliste 
        <span><a href="">Gå til bestillingslisten</a></span>  
        <div className="bestilcard">
            <div className='total'>
              <span className='total-produkt'>12 produkter</span>
              <span className='total-værdi'>Total: 4598,95 DKK</span>
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