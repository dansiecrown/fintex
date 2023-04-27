import "./Footer.css"
import Fade from "react-reveal/Fade"

export default function Footer() {
    return (
        <div className='footer'>

            <Fade left>
                <div className="creds">
                    <h1>Fintex</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    <div className="socials">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>

            </Fade>

            <Fade top>

                <div className="links">
                    <h4>Quick Links</h4>
                    <div className="link">
                        <p>Payment Integration</p>
                        <p>How to use</p>
                        <p>FAQs & Support</p>
                        <p>Solutions</p>
                        <p>Data Security</p>
                    </div>
                </div>

            </Fade>

            <Fade bottom>

                <div className="contact">
                    <h4>Contact Us</h4>
                    <div className="contact-info">
                        <div className="contact-row">
                            <div className="contact-icon">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <p>+234 000 000 000</p>

                        </div>
                        <div className="contact-row">
                            <div className="contact-icon">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <p>support@fintex.org</p>
                        </div>
                    </div>
                </div>

            </Fade>

            <Fade right>

                <div className="location">
                    <h4>Our Location</h4>
                    <div className="location-info">
                        <p>434 Forth Avenue, Los Angeles Park Avenue #436</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4242200714057!2d3.3313790778774535!3d6.5940799763811135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91897faf1325%3A0x5d47e3c4a448eba2!2sIkeja%20Along!5e0!3m2!1sen!2sng!4v1682521956965!5m2!1sen!2sng" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Location" ></iframe>
                </div>

            </Fade>
        </div>
    )
}
