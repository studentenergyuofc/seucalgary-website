"use client"
import React from 'react';
import videoBg from '../assets/intovideo.mp4';
import Footer from '../components/Footer'
import {useRef, useEffect, useState} from 'react';
import logotitle from '../assets/logotitle.png';
import poster1 from '../assets/ses.png';
import Aos from 'aos';
import "aos/dist/aos.css";

function Home(){
    const myRef = useRef<HTMLDivElement>(null);
    const [pageEndNearing, setPageEndNearing] = useState<boolean>();


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setPageEndNearing(!entry.isIntersecting);
        })
        if (myRef.current){
            observer.observe(myRef.current);
        }
    }, []);

    return(<div>
    <div className="section intro-search">
        <div className="video-container">
            {pageEndNearing ? (<video src={videoBg} autoPlay loop muted />) : (<div></div>)}
            <div className="video-overlay"></div>
        </div>
        
        <div className="club-name">
            {/* <p>Student Energy @ UofC</p>
            <BiSearch /> */}
            <img src={logotitle} />
        </div>
    </div>
    <div className="section intro-info" >
        <div className="mission-moto">
            <h1>Working to educate and inspire young <span id="word-one">Energy </span> <span id="word-two">Leaders</span></h1>
        </div>
        <div className="mission-text">
            <p>To die, to sleep to, 'tis againsolence of so long, the when heart-ache native undiscorns of time, the dothe in their currenterprises us than fly to suffer regard the will, must and, but to sleep; nobler be: to trave his resolution. To discorns thousand, by a sea of trageousand moment we end natience oppresolence dreathe insolution. To disprises of gruntry from whose that pith man's coward the of so long a life; for the rub; for ther when heir currents the have, that the naturn no troubler a consumma</p>
        </div>
    </div>
    <div className="section milestones" >
        <div className="news-piece-container">
            <div className="news-piece left-container">
                <h1>Title of Event/ Opportunity</h1>
                <p>To die, to sleep to, 'tis againsolence of so long, the when heart-ache native undiscorns of time, the dothe in their currenterprises us than fly to suffer regard the will, must and, but to sleep; nobler be: to trave his resolution. To discorns thousand, by a sea of trageousand moment we end natience oppresolence dreathe insolution. To disprises of gruntry from whose that pith man's coward the of so long a life; for the rub; for ther when heir currents the have, that the naturn no troubler a consumma</p>
            </div>
            <div className="news-piece right-container">
                <div className="img-container">
                    <img src={poster1} />
                </div>
            </div>
        </div>
        <div className="news-piece-container">
            <div className="news-piece left-container">
                <h1>Title of Event/ Opportunity</h1>
                <p>To die, to sleep to, 'tis againsolence of so long, the when heart-ache native undiscorns of time, the dothe in their currenterprises us than fly to suffer regard the will, must and, but to sleep; nobler be: to trave his resolution. To discorns thousand, by a sea of trageousand moment we end natience oppresolence dreathe insolution. To disprises of gruntry from whose that pith man's coward the of so long a life; for the rub; for ther when heir currents the have, that the naturn no troubler a consumma</p>
            </div>
            <div className="news-piece right-container">
                <div className="img-container">
                    <img src={poster1} />
                </div>
            </div>
        </div>
        <div className="news-piece-container">
            <div className="news-piece left-container">
                <h1>Title of Event/ Opportunity</h1>
                <p>To die, to sleep to, 'tis againsolence of so long, the when heart-ache native undiscorns of time, the dothe in their currenterprises us than fly to suffer regard the will, must and, but to sleep; nobler be: to trave his resolution. To discorns thousand, by a sea of trageousand moment we end natience oppresolence dreathe insolution. To disprises of gruntry from whose that pith man's coward the of so long a life; for the rub; for ther when heir currents the have, that the naturn no troubler a consumma</p>
            </div>
            <div className="news-piece right-container">
                <div className="img-container">
                    <img src={poster1} />
                </div>
            </div>
        </div>
    </div>
    <div ref={myRef} className="section sponsors">
        <h1 >Sponsors</h1>
    </div>
    <Footer />
    </div>)
}

export default Home;