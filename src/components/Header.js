import {useState} from 'react'
import Fade from 'react-reveal/Fade';
import './Header.css'

export default function Header() {
    const [hamOpen, setHamOpen] = useState(false);

    function toggleHamburger(){
        setHamOpen(!hamOpen)
    }

    return (
        <div className={"Header"}>
            <div className="Header-web">
                <Fade top>
                    <div className="logo">
                        <h1>Fintex</h1>
                    </div>


                    <button className='Ham' onClick={toggleHamburger}><i class="fa-solid fa-bars"></i></button>

                    <div className="Header-menu">
                        <a href="facebook.com" className="menu-item">Home</a>
                        <a href="facebook.com" className="menu-item">About</a>
                        <a href="facebook.com" className="menu-item">Services</a>
                        <a href="facebook.com" className="menu-item">Documentation</a>
                        <a href="facebook.com" className="menu-item">Contact</a>
                    </div>

                    <button className='download'>Download</button>
                </Fade>

            </div>

            {
                hamOpen &&

            <div className='mobile-menu'>
                <Fade right>

                <button className='close' onClick={toggleHamburger}><i class="fa-regular fa-circle-xmark"></i></button>

                <a href="facebook.com" className="menu-item">Home</a>
                <a href="facebook.com" className="menu-item">About</a>
                <a href="facebook.com" className="menu-item">Services</a>
                <a href="facebook.com" className="menu-item">Documentation</a>
                <a href="facebook.com" className="menu-item">Contact</a>
                <button className='mDownload'>Download</button>
                </Fade>
            </div>
            }



        </div>
    )
}
