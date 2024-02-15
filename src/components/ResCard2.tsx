import React from 'react'
import Button from './ButtonDownload'
import Billeder from '../Assets/img-stack 1.png'


type Props = {}

const ResCard = (props: Props) => {
  return (
    <div className='card'>
      <img src={Billeder} alt="" />
      <p>Billedepakke</p>
      <Button />
    </div>
  )
}

export default ResCard