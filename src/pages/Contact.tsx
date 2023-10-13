import {BsInstagram, BsLinkedin, BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";
import {useState, useRef, useEffect } from 'react';
import {toast} from 'react-toastify';

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    const sending = toast("Sending...");
    fetch("https://formsubmit.co/ajax/podgaietska.m@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        email: email,
        _subject: subject,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success == "true") {
          toast.dismiss(sending);
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          toast.error("Message failed to send. Please try again.");
        }
      })
      .catch((error) => console.log(error));
  };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(name, email, message);
        const sending = toast("Sending...");
        fetch("https://formsubmit.co/ajax/ucalgary@studentenergy.org", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                message: message,
                email: email,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success == 'true'){
                    toast.dismiss(sending);
                    toast.success("Message sent successfully!");
                    setName('');
                    setEmail('');
                    setMessage('');
                }
                else{
                    toast.dismiss(sending);
                    toast.error("Message failed to send. Please try again.");
                    setName('');
                    setEmail('');
                    setMessage('');
                }
            })
            .catch(error => console.log(error));
    };

    return(
        <div>
            <div className="contact-container">
                <div className="contact-banner">
                    <img src="/contact-banner.webp" alt="contact-banner"/>
                    <div className="contact-banner-overlay"></div>
                </div>
                <div className="contact-main">
                    <div className="contact-main-inner">
                    <div className="contact-text">
                        <h1>Get In Touch</h1>
                        <p>Have a question or a proposal? Fill out the form below to get in touch or contact us through any other platform!</p>
                    </div>
                    <div className="contact-window">
                        <div className="contact-window-left">
                        <h4>CONTACT FORM</h4>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} required/>
                            <input type="text" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <textarea name="" id="" cols={30} rows={6} placeholder="MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            <button type="submit">Send</button>
                        </form>
                        </div>
                        <div className="contact-window-right">
                            <div className="contact-details">
                                <h4>OTHER WAYS TO CONTACT US</h4>
                                <div className="socials">
                                    <div className="social-link">
                                        <BsFillEnvelopeFill className="icon"/>
                                        <p>ucalgary@studentenergy.org</p>
                                    </div>
                                    <div className="social-link">
                                        <BsTwitter className="icon"/>
                                        <p>@se_uofc</p>
                                    </div>
                                    <div className="social-link">
                                        <BsInstagram className="icon"/>
                                        <p>@studentenergy_uofc</p>
                                    </div>
                                    <div className="social-link">
                                        <BsLinkedin className="icon"/>
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
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details-heading">
          <h5>LEAVE US A MESSAGE</h5>
          <li>
            <BiEnvelope className="icon" />
            <p>ucalgary@studentenergy.org</p>
          </li>
          <li>
            <AiOutlineInstagram className="icon" />
            <p>studentenergy_uofc</p>
          </li>
          <li>
            <AiOutlineInstagram className="icon" />
            <p>403 123 4567</p>
          </li>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.6303236638937!2d-114.13917211114503!3d51.07837390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717db7481cb3b1%3A0x36aff4a9e3c803fb!2sUniversity%20of%20Calgary!5e0!3m2!1sen!2sca!4v1683659211581!5m2!1sen!2sca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
