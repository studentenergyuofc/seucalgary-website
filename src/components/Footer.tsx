import {
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsFillEnvelopeFill,
  } from "react-icons/bs";

function Footer(){
    return(
        <div className="footer">
            <div className="main-footer">
                <div className="left-container footer">
                    <div className="footer-links">
                        <a href="https://www.instagram.com/studentenergy_uofc/" target="_blank"><BsInstagram /></a>
                        <a href="https://www.linkedin.com/company/studentenergyuofc/mycompany/" target="_blank"><BsLinkedin /></a>
                        <a href="https://twitter.com/se_uofc" target="_blank"><BsTwitter /></a>
                        <a href="mailto:ucalgary@studentenergy.org"><BsFillEnvelopeFill /></a>
                    </div>
                </div>
                <div className="right-container footer">
                    <form>
                        <p>Subscribe to our news letters</p>
                        <div className="input">
                            <input
                            type="text"
                            placeholder="Your email here"/>
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bottom-footer">
                <p>© 2023 Student Energy at UCalgary</p>
            </div>
        </div>
    )
}

export default Footer;