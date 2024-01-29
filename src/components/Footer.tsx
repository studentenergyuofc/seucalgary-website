import {
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsFillEnvelopeFill,
  } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

function Footer(){
    const [email, setEmail] = useState<string>("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("https://formsubmit.co/ajax/ucalgary@studentenergy.org", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            message: email + " has subscribed to the newsletter.",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.success == "true") {
              toast.success("You are now subscribed!");
              setEmail("");
            } else {
              toast.error("Subscription failed. Please try again.");
              setEmail("");
            }
          })
          .catch((error) => console.log(error));
      };

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
                    <form onSubmit={onSubmit}>
                        <p>Subscribe to our news letters</p>
                        <div className="input">
                            <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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