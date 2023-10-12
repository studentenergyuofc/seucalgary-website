import { BiEnvelope } from "react-icons/bi";
import {AiOutlineInstagram} from 'react-icons/ai';
import {useState, useRef, useEffect } from 'react';
import {toast} from 'react-toastify';


function Contact(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
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
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                message: message,
                email: email,
                _subject: subject,
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success == 'true'){
                    toast.dismiss(sending);
                    toast.success("Message sent successfully!");
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                }
                else{
                    toast.error("Message failed to send. Please try again.");
                }
            })
            .catch(error => console.log(error));
    };

    return(
        <div>
            <div className="contact-container" ref={topOfPage}>
                <div className="form-details">
                    <div className="contact-form-heading">
                        <h5>LEAVE US A MESSAGE</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatibus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi dolores ut dolorem suscipit quae provident? Itaque voluptates temporibus vitae?</p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        <textarea name="" id="" cols={30} rows={10} placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-details">
                    <div className="contact-details-heading">
                        <h5>LEAVE US A MESSAGE</h5>
                        <li>
                            <BiEnvelope className="icon"/>
                            <p>ucalgary@studentenergy.org</p>
                        </li>
                        <li>
                            <AiOutlineInstagram className="icon"/>
                            <p>studentenergy_uofc</p>
                        </li>
                        <li>
                            <AiOutlineInstagram className="icon"/>
                            <p>403 123 4567</p>
                        </li>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.6303236638937!2d-114.13917211114503!3d51.07837390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717db7481cb3b1%3A0x36aff4a9e3c803fb!2sUniversity%20of%20Calgary!5e0!3m2!1sen!2sca!4v1683659211581!5m2!1sen!2sca" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;