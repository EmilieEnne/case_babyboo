import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';


type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div className= "topBanner">
        <h3>Babyboo for professionals</h3>
      </div>
      <div className="header">
        <div className= "logo">
          <img src="Assets/BABYBOO.png" alt="Babyboo logo" />
        </div>
        <Navbar />
        <Profile />
      </div>
    </div>
  )
}

export default Home