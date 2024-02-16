import React from 'react'
import Bestillingsliste from './Bestillingsliste'
import Senesteordre from './Senesteordre'
import Favoriteprodukter from './Favoriteprodukter'
import Kampanger from './Kampanger'
import './Main.css'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className='main'>
        <div className='velkommen'>
            VELKOMMEN BABYBOB A/S
        </div>
        <div className="main-wrapper">
            <div className="grid-container">
                <div className='grid-child best'>
                        <Bestillingsliste />
                </div>
                <div className="grid-child sen">
                    <Senesteordre />
                </div>
                <div className="grid-child fav">
                    <Favoriteprodukter />
                </div>
            </div>
            </div>
        <div className="kampange-wrapper">
            <Kampanger />
        </div>
    </div>
  )
}

export default Main