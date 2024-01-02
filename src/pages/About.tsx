import FlipCard from "../components/FlipCard";
import subbnr from "/banner4.webp";
import mainbnr from "/banner3.webp";
import ImgComponent from "../components/ImgComponent";
import Footer from "../components/Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ExecMembers } from "../vite-env";
import { executives } from "../lib/data";

function About() {
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [text] = useTypewriter({
    words: [
      "STUDENT ENERGY UOFC",
      "STUDENT ENERGY AT UNIVERCITY OF CALGARY",
      "SEUC",
    ],
    loop: true,
    deleteSpeed: 50,
  });

  const handleScroll = () => {
    const scrollDistance = window.innerHeight;
    window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="about-section" ref={topOfPage}>
        <div className="main-banner">
          <div className="banner-img"></div>
          <ImgComponent
            src={mainbnr}
            width={1500}
            height={500}
            blurhash={"LDBM#,R+W;tR~Wt8kCt7$zt7oztR"}
          />
          <div className="main-banner-overlay">
            <h1>
              WE ARE{" "}
              <span style={{ color: "white", fontSize: "2.5rem", fontWeight: "400" }}>{text}</span>
              <Cursor />
            </h1>
            <h3>
              Nurturing professional development and bridging the gap between university and the energy sector.
            </h3>
          </div>
        </div>
        <div className="sub-banners">
          <div className="sub-banner-left">
            <p>
              "FUELED BY <span id="blue-text">PASSION</span>,
            </p>
            <p>
              DRIVEN BY <span id="green-text">INNOVATION</span>,
            </p>
            <p>
              SHAPING A<span id="yellow-text"> SUSTAINABLE FUTURE</span>"
            </p>
          </div>
          <div className="sub-banner-right">
            <ImgComponent
              src={subbnr}
              width={900}
              height={500}
              blurhash={"LWH3K=9axuRj*0WBWBWC01xZR*j["}
            />
            <div className="sub-banner-right-overlay"></div>
          </div>
        </div>
        <div className="scroll-down-btn about" onClick={handleScroll}>
          <AiOutlineArrowDown />
        </div>
      </div>
      <div className="section team-members-section">
        <div className="team-members-header">
          <h1>Meet Our Executive Team</h1>
        </div>
        <div className="cards-container">
          {executives.map((exec: ExecMembers) => {
            return (
              <FlipCard
                name={exec.name}
                path={exec.path}
                position={exec.position}
                major={exec.major}
              />
            )
          })}
        </div>
      </div>
      <div className="section club-founders">
        <div className="club-founders-header">
          <h1>Meet Our Founders</h1>
          <p>
            Check out what out founders had to say about about Student Energy
            and their reasoning behind starting a chapter at Uofc.
          </p>
        </div>
        <div className="club-founders-main">
          <div className="founder-container">
            <div className="founder-img">
              <img src="/img-kareem-prof.webp" alt="founder-img" />
            </div>
            <div className="founder-testimony">
              <div className="founder-title">
                <h1>President and Co-Founder of Student Energy at UofC</h1>
              </div>
              <p>
                The future will be shaped by the energy decisions made today,
                and it's important to understand the impact that the youth can
                have on these decisions. By bringing Student Energy to
                University of Calgary's campus I hope to create a community that
                shares a common goal: reaching a sustainable and equitable
                energy future.
              </p>
              <div className="founder-name">
                <p>-Kareem Yousef</p>
              </div>
            </div>
          </div>
          <div className="founder-container">
            <div className="founder-testimony">
              <div className="founder-title">
                <h1>Vice President and Co-Founder of Student Energy at UofC</h1>
              </div>
              <p>
                With Alberta being the center of the Canadian energy sector,
                it's up to us, the students, to take the lead of the future of
                energy here in our province. Focused on sustainability, Student
                Energy's goal is to facilitate meaningful youth engagement to
                support youth-led energy solutions. Overall, this means that we
                - students - will be able to have a greated impact on the
                rapidly growing energy sector.
              </p>
              <div className="founder-name">
                <p>-Abdul Jalel</p>
              </div>
            </div>
            <div className="founder-img">
              <img src="/aj_img1.webp" alt="founder-img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
