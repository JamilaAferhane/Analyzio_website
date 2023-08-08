import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="bleu-rectangle"/>
                    <motion.h1
                    initial = {{y:"2rem",opacity:0}}
                    animate={{y:0, opacity: 1}}>
                        Analyse <br/>
                        Your PDFs <br/>
                        Effeciently
                    </motion.h1>
                </div>

                <div className=" flexColStart hero-des ">
                    <span >Unlock the potential of your PDFs with our  semantic and partial analysis.</span>
                    <span className='pink'>Extract valuable insights and gain a deeper understanding of your documents effortlessly.</span>
                    <span >Revolutionize the way you interact with PDFs today.</span>
                </div>

            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div className="image-container"
                initial={{x:"7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration:2,
                    type:"spring"

                }}
                >
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
