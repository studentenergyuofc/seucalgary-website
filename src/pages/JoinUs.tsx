import { useEffect, useRef } from "react";
import usePositionsData from "../hooks/usePositionsData";
import Header from "../components/Header";
import PositionCard from "../components/PositionCard";
import { Position } from "../vite-env";

function JoinUs(): JSX.Element {
  const topOfPage = useRef<HTMLDivElement>(null);
  const positions = usePositionsData();

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <div className="page-heading" ref={topOfPage}>
        <img src="/banner.webp" alt="solar panels" />
        <div className="page-heading-overlay"></div>
        <div className="page-heading-text">
          <h1>Positions</h1>
          <p>Apply for a position in Student Energy!</p>
        </div>
      </div>
      <div className="join-main-container">
        {positions.map((position: Position) => (
          <PositionCard
            key={position.title}
            title={position.title}
            description={position.description}
            deadline={position.deadline}
            path={position.path}
            btnText={position.btnText}
            isEnable={position.isEnable}
          />
        ))}
      </div>
    </>
  );
}

export default JoinUs;
