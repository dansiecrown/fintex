import Fade from "react-reveal/Fade"
import "./Experience.css"

export default function Experience() {
    return (
        <div className='experience'>
            <div className='stats'>
                <p >Stats speaks for themselves</p>

                <div className='col1'>
                    <h1>98%</h1>
                    <p>User Satisfaction</p>
                </div>
                <div className='col2'>
                    <h1>5M</h1>
                    <p>Users woldwide</p>
                </div>
                <div className='col3'>
                    <h1>4.8</h1>
                    <p>Google Review</p>
                </div>

                <div className='col4'>
                    <h1>25k+</h1>
                    <p>API Integration</p>
                </div>
            </div>


            <div className="main-experience">
                <Fade left>
                <div className="main-experience-left">
                    <h1>We Strive To Offer An Unparalleled Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    <div className="experience-left-row">
                        <div className="experience-left-row-icon">
                        <i class="fa-solid fa-wallet"></i>
                        </div>
                        <div className="experience-left-row-text">
                        <h4>Flexible Transaction</h4>
                        <p>Molestias excepturi sint occaecati cupiditate noo eos et accusamus et iusto odio dignissimos ducimus qui bland</p>
                        </div>
                    </div>

                    
                    <div className="experience-left-row">
                        <div className="experience-left-row-icon">
                        <i class="fa-solid fa-trophy"></i>
                        </div>

                        <div className="experience-left-row-text">
                        <h4>Giftcards & Bonuses</h4>
                        <p>Molestias excepturi sint occaecati cupiditate noo eos et accusamus et iusto odio dignissimos ducimus qui bland</p>
                        </div>
                    </div>

                    <div className="experience-left-row">
                        <div className="experience-left-row-icon">
                        <i class="fa-solid fa-shield-halved"></i>
                        </div>

                        <div className="experience-left-row-text">
                        <h4>Strong Security</h4>
                        <p>Molestias excepturi sint occaecati cupiditate noo eos et accusamus et iusto odio dignissimos ducimus qui bland</p>
                        </div>
                    </div>
                </div>
                </Fade>

                <div className="main-experience-right">
                    
                    <div className="experience-right-row">
                    <Fade top >
                    <img src="../assets/blogp.jpg" alt="experience" className="main-image" />
                    </Fade>
                    <Fade left>
                    <img src="../assets/App-Block04.png" alt="experience" className="top-left"/>
                    </Fade>
                    <Fade right>
                    <img src="../assets/card.png" alt="experience" className="bottom-right" />
                    </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}
