import React from 'react';
import Navbar from './Navbar';
import './Home.css'


type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div className= "topBanner">
        Babyboo for professionals
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home