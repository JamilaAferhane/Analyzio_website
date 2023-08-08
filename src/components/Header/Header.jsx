import React, {useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

function Header() {
    const [menuOpened, setMenuOpened] = useState(false)
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }
  return (
    <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="" />

            <OutsideClickHandler 
            onOutsideClick={()=> setMenuOpened(false)}>

            <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                <a href="/">
                    Home 
                </a>
                <a href="/SemanticAnalysis">
                    Semantic Analysis
                </a>
                <a href="PartialAnalysis">
                    Partial Analysis
                </a>
                <a href="/AboutUs">
                    About Us
                </a>
                <button className='button' onClick={scrollToBottom}>
                    Contact
                </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick = { () => setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
            </div>
        </div>
        
    </section>
  )
}

export default Header
 