import React from "react"
import './Footer.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="column">
                    {/* column 1 FB*/}
                    <div className="col">
                        <a class="media-link" href="https://facebook.com">
                            <img src={facebook} alt="Facebook" />
                        </a>
                    </div>
                    {/* column 2 IG*/}
                    <div className="col">
                        <a class="media-link" href="https://www.instagram.com/">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>
                    {/* column 3 Twitter*/}
                    <div className="col">
                        <a class="media-link" href="https://twitter.com/">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Book Exchange Store | All right Reserved | Terms Of Service | Privacy
                    </p>

                </div>
            </div>
        </div>
    )
}


export default Footer