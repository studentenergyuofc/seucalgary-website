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
                        <BsInstagram />
                        <BsLinkedin />
                        <BsTwitter />
                        <BsFillEnvelopeFill />
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