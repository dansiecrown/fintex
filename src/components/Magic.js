import "./Magic.css"
import Fade from 'react-reveal/Fade'



export default function Magic() {
    return (
        <div className="Magic">
            <div className="Magic-top">
                <Fade left>
                <div className="Magic-top-left">
                    <h1>How we are killing it with some magic</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                </div>

                </Fade>

                <Fade right>

                <div className="Magic-top-right">
                    <p>Our commitment to excellence is reflected in our customer service. We are always here to help you with any questions or concerns you may have. </p>
                    <button>Get Started</button>
                </div>

                </Fade>
            </div>

            <div className="Magic-cards-container">
                <div className="Magic-cards">
                    <Fade bottom>
                    <div className="Magic-card">
                        <div className="Magic-card-icon">
                            <i class="fa-solid fa-credit-card"></i>
                        </div>
                        <div className="Magic-card-text">
                            <h3>Payment Methods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="Magic-card">
                        <div className="Magic-card-icon">
                            <i class="fa-solid fa-tags"></i>
                        </div>
                        <div className="Magic-card-text">
                            <h3>Split Payments</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="Magic-card">
                        <div className="Magic-card-icon">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <div className="Magic-card-text">
                            <h3>Subscriptions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className="Magic-card">
                        <div className="Magic-card-icon">
                            <i class="fa-solid fa-wallet"></i>
                        </div>
                        <div className="Magic-card-text">
                            <h3>E-Wallet</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="Magic-card">
                        <div className="Magic-card-icon">
                            <i class="fa-regular fa-terminal"></i>
                        </div>
                        <div className="Magic-card-text">
                            <h3>Dreveloper's API </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="Magic-card">
                        <div className="Magic-card-icon">
                            <i class="fa-brands fa-codepen"></i>
                        </div>
                        <div className="Magic-card-text">
                            <h3>Integration</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>

            <Fade top>

            <div className="Newsletter">
                <div className="newsletter-icon">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="newsletter-text">
                    <h3>Subscribe to our newsletter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="newsletter-input">
                    <input type="text" placeholder="Enter your email address" />
                    <button><i class="fa-regular fa-paper-plane"></i></button>
                </div>
            </div>

            </Fade>

        </div>
    )
}
