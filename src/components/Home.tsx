import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import logo from '../Assets/BABYBOO.png'


type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div className= "topBanner">
        Babyboo for professionals
      </div>
      <div className="header">
        <div className= "logo">
          <img src={logo} alt="Babyboo logo" />
        </div>
        <Navbar />
        <Profile />
      </div>
    </div>
  )
}

export default Home