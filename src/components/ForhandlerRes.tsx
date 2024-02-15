import React from 'react'
import ResCard from './ResCard'
import ResCard2 from './ResCard2'
import ResCard3 from './ResCard3' 
import ResCard4 from './ResCard4'
import './ForhandlerRes.css'


type Props = {}

const ForhandlerRes = (props: Props) => {
  return (
    <div className='forhandler-wrapper'>
        <p className='forhandler-title'>Dine forhandler ressourcer for <strong>DYLAN puslepude</strong></p>
      <div>
        <ResCard />
        <ResCard2 />
        <ResCard3 />
        <ResCard4 />
      </div>    
    </div>
  )
}

export default ForhandlerRes