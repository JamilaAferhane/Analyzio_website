import React from 'react'
import './Footer.css'
import { MdEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { MdHome } from 'react-icons/md';


function Footer() {
  return (
    <div>
      <section className="f-wrapper">

        <div className="paddings innerWidth flexCenter f-container">

            {/**left side */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="logo" width={200}/>
                <span className="secondaryText">
                Our vision is to simplify documents
                <br/>
                analysis for all people
                </span>
            </div>

            {/** right side */}
            <div className="flexColStart f-right">
                <span className='primaryText contact'>Contact</span>

                <div className='f-menu'>

                <div className='flexStart item'>
                <MdHome size={26} color="#23BFE6" />
                <span className='secondaryText'>Rabat, Morocco</span>
                </div>

                <div className='flexStart item'>
                <MdEmail size={24} color="#23BFE6" />
                <span className='secondaryText'>afjam91@gmail.com</span>
                </div>

                <div className='flexStart item'>
                <MdPhone size={24} color="#23BFE6" />
                <span className='secondaryText'>+212 652735089</span>
                </div>

                </div>

            
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
