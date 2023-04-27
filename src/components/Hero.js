import "./Hero.css";
import Fade from 'react-reveal/Fade'

export default function Hero() {
    return (
        <>
            <div className="Hero-section">
                <div className="Hero">
                    <div className="Hero-text">
                        <Fade left>
                        <h1>Your Go-To Source To Manage Payment</h1>
                        </Fade>
                        <Fade right>
                        <h1 className="slanted-text"><i> For Your Business </i></h1>
                        </Fade>
                        <Fade bottom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                        </Fade>
                    </div>

                    <div className="Hero-elements">
                        <Fade left>
                        <button>Get Started </button>

                        <img src="../assets/newclients.png" alt="users" />

                        <p>25k+ Users</p>
                        </Fade>

                    </div>

                </div>
                <div className="Hero-image">
                    <div className="mobile-container"
                    >         
                    <Fade>      
                     <img src="../assets/Mobileapp-heor.png" alt="hero" className="mobile" />
                     </Fade>
                    </div>
                    <div className="row1">
                        <Fade>
                        <img src="../assets/card1.png" alt="hero" className="card" />
                       </Fade>
                       <Fade>
                        <img src="../assets/card.png" alt="hero" className="card2" />
                       </Fade>
                    </div>

                    <div className="row2">
                        <Fade bottom>
                        <img src="../assets/card2.png" alt="hero" className="card3" />
                        </Fade>
                        <Fade bottom>
                        <img src="../assets/App-Block01.png" alt="hero" className="card4" />
                        </Fade>
                    </div>
                </div>


            </div>
            <div className="hero-footer">
                <div className="hero-footer-text">
                    <Fade top>
                    <h2>Featured In:</h2>
                    </Fade>
                </div>
                <div className="hero-footer-images">
                    <Fade left>
                    <img src="../assets/acme.png" alt="hero" className="forbes" />
                    </Fade>
                    <Fade left>
                    <img src="../assets/Epic.png" alt="hero" className="techcrunch" />
                    </Fade>
                    <Fade left>
                    <img src="../assets/focal-point.png" alt="hero" className="techcrunch" />
                    </Fade>
                    <Fade left>
                    <img src="../assets/Cloudwatch.png" alt="hero" className="techcrunch" />
                    </Fade>
                </div>
            </div>
        </>
    );
}
