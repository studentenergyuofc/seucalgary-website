import FlipCard from "../components/FlipCard";
import subbnr from "/banner4.webp";
import mainbnr from "/banner3.webp";
import ImgComponent from "../components/ImgComponent";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";

function About() {
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [text] = useTypewriter({
    words: [
      "Student Energy UofC",
      "Student Energy at University of Calgary",
      "SEUC",
    ],
    loop: true,
    deleteSpeed: 50,
  });

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
              We are{" "}
              <span style={{ color: "white", fontSize: "2.5rem" }}>{text}</span>
              <Cursor />
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eos harum architecto temporibus amet odio sunt
              beatae pariatur numquam illo.
            </h3>
          </div>
        </div>
        <div className="sub-banners">
          <div className="sub-banner-left">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur, laudantium? Minima autem cumque vel, atque veniam porro
              nam, dolor consectetur quas, eum non debitis repellendus
              perferendis totam magni itaque soluta. Illo, accusantium
              consectetur in ducimus, obcaecati nobis repellendus commodi nisi
              possimus, libero odit tenetur soluta dolore quae dolor!
              Consectetur, molestias?
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
      </div>
      <div className="section team-members-section">
        <div className="team-members-header">
          <h1>Meet Our Executive Team</h1>
        </div>
        <div className="cards-container">
          <FlipCard
            name={"Kareem Yousef"}
            execImg={"/img-kareem.webp"}
            position={"President"}
            major={"Electrical Engineering"}
          />
          <FlipCard
            name={"Abdul Jalel"}
            execImg={""}
            position={"Vice President"}
            major={"Mechanical Engineering"}
          />
          <FlipCard
            name={"Ibrahim Hashmi"}
            execImg={""}
            position={"VP Communications"}
            major={"Mechanical Engineering"}
          />
          <FlipCard
            name={"Axel Sanchez"}
            execImg={""}
            position={"Co-VP Development"}
            major={"Software Engineering"}
          />
          <FlipCard
            name={"Mariia Podgaietska"}
            execImg={""}
            position={"Co-VP Development"}
            major={"Software Engineering"}
          />
          <FlipCard
            name={"Murad Tashkandi"}
            execImg={""}
            position={"VP Public Relations"}
            major={"Electrical Engineering"}
          />
          <FlipCard
            name={"Omar Ahmed"}
            execImg={""}
            position={"VP Events"}
            major={"Electrical Engineering"}
          />
          <FlipCard
            name={"Kiichi Sakai"}
            execImg={"/img-kiichi.jpg"}
            position={"VP Finance"}
            major={"Business Technology"}
          />
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
              <img src="/img-kiichi.jpg" alt="founder-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
