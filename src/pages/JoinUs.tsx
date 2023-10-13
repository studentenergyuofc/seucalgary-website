import { useEffect, useRef } from "react";
import Header from "../components/Header";
import PositionCard from "../components/PositionCard";
import { Position } from "../vite-env";

function JoinUs(): JSX.Element {
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const positions: Position[] = [
    {
      title: "VP DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/rocket-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "JR. DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/computer-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "VP EVENTS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/video-camera-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "JR. EVENTS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/calender-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "VP PUBLIC RELATIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/megaphone-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "JR. PUBLIC RELATIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/at-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "VP COMMUNICATIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/chat-bubble-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
    {
      title: "JR. COMMUNICATIONS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.",
      deadline: "September 15th 2023",
      path: "/phone-missing-dynamic-color.png",
      btnText: "Applications closed",
      isEnable: false,
    },
  ];

  return (
    <>
      <Header />
      <div className="page-heading">
        <img src="/banner.webp" alt="" />
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
