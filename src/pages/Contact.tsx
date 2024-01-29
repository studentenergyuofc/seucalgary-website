import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, message);
    const sending = toast("Sending...");
    fetch("https://formsubmit.co/ajax/ucalgary@studentenergy.org", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success == "true") {
          toast.dismiss(sending);
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast.dismiss(sending);
          toast.error("Message failed to send. Please try again.");
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-banner">
          <img src="/contact-banner.jpg" alt="contact-banner" />
          <div className="contact-banner-overlay"></div>
        </div>
        <div className="contact-main">
          <div className="contact-main-inner">
            <div className="contact-text">
              <h1>Get In Touch</h1>
              <p>
                Have a question or a proposal? Fill out the form below to get in
                touch or contact us through any other platform!
              </p>
            </div>
            <div className="contact-window">
              <div className="contact-window-left">
                <h4>CONTACT FORM</h4>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    placeholder="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={6}
                    placeholder="MESSAGE"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <button type="submit">Send</button>
                </form>
              </div>
              <div className="contact-window-right">
                <div className="contact-details">
                  <h4>OTHER WAYS TO CONTACT US</h4>
                  <div className="contact-methods">
                    <div className="social-link">
                      <BsFillEnvelopeFill className="icon" />
                      <p>ucalgary@studentenergy.org</p>
                    </div>
                    <div className="social-link">
                      <BsTwitter className="icon" />
                      <p>@se_uofc</p>
                    </div>
                    <div className="social-link">
                      <BsInstagram className="icon" />
                      <p>@studentenergy_uofc</p>
                    </div>
                    <div className="social-link">
                      <BsLinkedin className="icon" />
                      <p>Student Eenergy at University of Calgary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
