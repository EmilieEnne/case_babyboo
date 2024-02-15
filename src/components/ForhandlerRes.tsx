import React from 'react'
import ResCard from './ResCard'
import ResCard2 from './ResCard2'
import ResCard3 from './ResCard3' 

type Props = {}

const ForhandlerRes = (props: Props) => {
  return (
    <div className='forhandler-wrapper'>
        Dine forhandler ressourcer for <strong>DYLAN puslepude</strong>
      <div>
        <ResCard />
        <ResCard2 />
        <ResCard3 />
      </div>    
    </div>
  )
}

export default ForhandlerRes