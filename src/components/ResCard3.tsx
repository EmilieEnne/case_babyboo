import React from 'react'
import Button from './ButtonDownload'
import Phone from '../Assets/mobile-design 1.png'


type Props = {}

const ResCard = (props: Props) => {
  return (
    <div className='card'>
      <img src={Phone} alt="Phone vector" />
      <p>SOME kampange</p>
      <Button />
    </div>
  )
}

export default ResCard