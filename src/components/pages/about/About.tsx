import FlipCard from "./FlipCard";
import subbnr from "/banner4.jpg";
import mainbnr from "/banner3.jpg";
import ImgComponent from "@shared/ImgComponent/ImgComponent";
import Footer from "@shared/Footer/Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ExecMembers } from "../../../vite-env";
import { executives } from "@lib/data";
import { collaborators } from "@lib/data";
import { Collaborators } from "../about/collaborators/Collaborators";

function About() {
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [text] = useTypewriter({
    words: ["Student Energy at UofC!", "SEUC!"],
    loop: true,
    deleteSpeed: 50,
  });

  const handleScroll = () => {
    const scrollDistance = window.innerHeight;
    window.scrollBy({ top: scrollDistance, behavior: "smooth" });
  };

  return (
    <div>
      <div className="about-section" ref={topOfPage}>
        <div className="main-banner">
          <div className="banner-img"></div>
          <ImgComponent
            src={mainbnr}
            altimages={"/banner3-sm-720.jpg 480w, /banner3.jpg 1080w"}
            altimagesizes={"(max-width: 440px) 440px, 1000px"}
            blurhash={"LDBM#,R+W;tR~Wt8kCt7$zt7oztR"}
          />
          <div className="main-banner-overlay blue">
            <h1>
              We are <span className="cursor-text">{text}</span>
              <Cursor />
            </h1>
            <h3>
              Nurturing professional development and bridging the gap between
              university and the energy sector.
            </h3>
          </div>
          <div className="main-banner-overlay yellow"></div>
        </div>
        <div className="sub-banners">
          <div className="sub-banner-left">
            <ImgComponent
              src={subbnr}
              altimages={"/banner4-sm-300.jpg 300w, /banner4.jpg 800w"}
              altimagesizes={"(max-width: 440px) 250px, 800px"}
              blurhash={"LJD^JI-oM|Rk~nWCs.ofWGRlR*R%"}
            />
            <div className="sub-banner-left-overlay"></div>
          </div>
          <div className="sub-banner-right">
            <div className="text">
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
                altimages={exec.altimages}
                altimagesizes={exec.altimagesizes}
                position={exec.position}
                major={exec.major}
                text={exec.text}
                hobby={exec.hobby}
                blurhash={exec.blurhash}
              />
            );
          })}
        </div>
      </div>
      <div className="section club-founders">
        <div className="club-founders-header">
          <h1>Meet Our Founders</h1>
          <p>
            Check out what our founders had to say about about Student Energy
            and their reasoning behind starting a chapter at UofC.
          </p>
        </div>
        <div className="club-founders-main">
          <div className="founder-container">
            <div className="founder-img">
              <ImgComponent
                src={"/img-kareem-prof.jpg"}
                altimages={
                  "/img-kareem-prof-sm-300.jpg 300w, /img-kareem-prof.jpg 632w"
                }
                altimagesizes={"(max-width: 440px) 300px, 500px"}
                blurhash={"LhIiLG%1_Mof.TWAIUWBJFbIRks+"}
              />
            </div>
            <div className="founder-testimony">
              <div className="founder-title">
                <h1>Co-Founder and President of Student Energy at UofC</h1>
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
                <p>-Kareem Youssef</p>
              </div>
            </div>
          </div>
          <div className="founder-container">
            <div className="founder-testimony">
              <div className="founder-title">
                <h1>Co-Founder and VP Finance of Student Energy at UofC</h1>
              </div>
              <p>
                With Alberta being the center of the Canadian energy sector,
                it's up to us, the students, to take the lead of the future of
                energy here in our province. Focused on sustainability, Student
                Energy's goal is to facilitate meaningful youth engagement to
                support youth-led energy solutions. Overall, this means that we
                - students - will be able to have a greater impact on the
                rapidly growing energy sector.
              </p>
              <div className="founder-name">
                <p>-Abduljalel Wadouh</p>
              </div>
            </div>
            <div className="founder-img">
              <ImgComponent
                src={"/aj_img1.jpg"}
                altimages={"/aj_img1-sm-300.jpg 300w, /aj_img1.jpg 500w"}
                altimagesizes={"(max-width: 440px) 300px, 500px"}
                blurhash={"LwCa7IR:tSWAt:bIWFs.I_oKWBoc"}
              />
            </div>
          </div>
        </div>
      </div>
      <Collaborators items={collaborators} />
      <Footer />
    </div>
  );
}

export default About;
