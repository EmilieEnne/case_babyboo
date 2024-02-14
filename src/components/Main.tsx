import React from 'react'
import Bestillingsliste from './Bestillingsliste'
import Senesteordre from './Senesteordre'
import Favoriteprodukter from './Favoriteprodukter'
import Kampanger from './Kampanger'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <div className='velkommen'>
            Velkommen Babybob A/S
        </div>
        <div className="main-wrapper">
            <div className='Bestilling'>
                <Bestillingsliste />
            </div>
            <div className="Seneste">
                <Senesteordre />
            </div>
            <div className="Fav">
                <Favoriteprodukter />
            </div>
        </div>
        <div className="kampange-wrapper">
            <Kampanger />
        </div>
    </div>
  )
}

export default Main