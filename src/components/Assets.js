import './Assets.css';
import Fade from 'react-reveal/Fade'

export default function Assets() {
    return (
        <div className='Assets-section'>
            <div className='Assets-top'>
                <Fade left>
                    <div className='Assets-top-left'>
                        <h1>Everyone Should Have Access To Financial Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className='Assets-top-right'>
                        <p>Our commitment to excellence is reflected in our customer service. We are always here to help you with any questions or concerns you may have.</p>
                        <button>Get Started</button>
                    </div>
                </Fade>
            </div>

            <div className='Assets-bottom'>

                <Fade bottom>
                    <div className='Assets-col1'>
                        <div className='col1-left'>
                            <div className="icon">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h4>Anytime Transaction</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>



                        <div className='col1-right'>
                            <img src='../assets/App-Block01.png' alt='card' />
                        </div>

                    </div>
                </Fade>
                <Fade bottom>

                    <div className='Assets-col2'>
                        <div className='col2-top'>
                            <img src='../assets/App-Block02.png' alt='card' />
                        </div>
                        <div className='col2-bottom'>
                            <h1>280+</h1> <span>Integrations</span>
                            <p>Available API Connection</p>
                        </div>

                    </div>

                </Fade>

                <Fade bottom>

                    <div className='Assets-col3'>

                        <h3>Live States</h3>
                        <div className='col3-card'>
                            <div className='col3-icon'>
                            <i class="fa-solid fa-square-caret-down"></i>
                            </div>
                            <div className='col3-middle'>
                                <p>Total Outcome</p>
                                <h4>$632,000</h4>
                            </div>
                            <div className='col3-right'>
                                <p>+1.29%</p>

                            </div>
                        </div>

                        <div className='col3-card'>
                            <div className='col3-icon2'>
                            <i class="fa-solid fa-square-caret-up"></i>
                            
                            </div>
                            <div className='col3-middle'>
                                <p>Total Outcome</p>
                                <h4>$632,000</h4>
                            </div>
                            <div className='col3-right2'>
                                <p>+1.29%</p>

                            </div>
                        </div>


                    </div>

                </Fade>


            </div>

            <div className='Assets-footer'>

                <Fade left>

                    <div className='Assets-footer-left'>
                        <div className='footer-left-contain'>
                            <div className="Assets-footer-container">
                                <h1>Everyone Should Have Access To Financial Services</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                            </div>
                        </div>
                        <img src='./assets/mobDash.png' alt="card" />


                    </div>

                </Fade>

                <Fade right>

                    <img src='./assets/card3-800x509.png' alt="card" className='card-image-footer' />

                </Fade>
            </div>
        </div >
    )
}
