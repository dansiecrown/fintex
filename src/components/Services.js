import "./Services.css"
import Fade from "react-reveal/Fade"

export default function Services() {
  return (
    <>
     <img className='bg-shape' src="../assets/briefcase.png" alt="briefcase" />
    <div className="services-section">
        <div className="services-text">
            <Fade left>
            <h1>We Strive To Offer An Unparalleled Experience</h1>
            </Fade>

            <Fade bottom>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <p>We believe that everyone should have access to financial services regardless of their background. That's why we give our best.</p>
            </Fade>
            <div className="cols">
                <Fade bottom>
                <div className="col1">
                    <div className="service-icon"><i class="fa-solid fa-tags"></i></div>
                    <h3>Anytime Transaction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                </div>

                <div className="col2">
                    <div className="service-icon1"><i class="fa-solid fa-briefcase"></i></div>
                    {/* font awesome tag */}
                    <h3>Anytime Transaction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                </div>
                </Fade>
            </div>
        </div>

        <div className="service-images">
            <Fade right>
            <img src="../assets/dashboard.png" alt="service" className="service1" />
            </Fade>
            <Fade left>
            <img src="../assets/mobDash.png" alt="service" className="service2" />
            </Fade>
        </div>
    </div>
    </>
  )
}
