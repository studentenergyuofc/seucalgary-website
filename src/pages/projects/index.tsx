import { useRef, useEffect } from "react";
import Footer from "@shared/Footer/Footer";
import ImgComponent from "@shared/ImgComponent/ImgComponent";
import background from "/background3.jpg";
import smbackground from "/background3-sm-800.jpg";
import useMediaQuery from "@hooks/useMediaQuery";
import { useState } from "react";
import ProjectDescription from "@components/projects/ProjectDescription";
import { projects } from "@lib/data";
import { GuidedProject } from "@interfaces/Project";
import TeamMembers from "@components/projects/TeamMembers";
import ProgramOutlook from "@components/projects/ProgramOutlook";
import ProjectRational from "@components/projects/ProjectRational";
import ProjectBudget from "@components/projects/ProjectBudget";

function GuidedProjects() {
  const topOfPage = useRef<HTMLDivElement>(null);
  const isWindow = useMediaQuery("(max-width: 440px)");
  const [defaultBackground, setDefaultBackground] =
    useState<string>(background);
  const [selectedProject] = useState(0);

  useEffect(() => {
    if (isWindow) {
      setDefaultBackground(smbackground);
    } else {
      setDefaultBackground(background);
    }
  }, [isWindow]);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div>
        <div className="page-heading" ref={topOfPage}>
          <ImgComponent
            src={defaultBackground}
            altimages={""}
            altimagesizes={""}
            blurhash={"L8DS%Ox_0K-.u6o}s,NF?akUt7xt"}
          />
          <div className="page-heading-overlay"></div>
          <div className="page-heading-text">
            <h1>Guided Projects</h1>
            <p>
              Check out the projects our Student Energy UCalgary chapter has
              worked on! From hands-on sustainability initiatives to
              energy-focused research, these guided projects showcase our
              commitment to innovation and impact.
            </p>
          </div>

          <div className="project-navigation">
            {projects.map((project: GuidedProject, index) => {
              return (
                <div
                  className={`${
                    index === selectedProject ? "active-tab" : "tab"
                  }`}
                >
                  <p>{project.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ProjectDescription description={projects[selectedProject].description} />
      <TeamMembers team={projects[selectedProject].team} />
      <ProgramOutlook
        img_url={projects[selectedProject].project_outlook_link}
      />
      <ProjectRational images={projects[selectedProject].images} />
      <ProjectBudget
        budget_breakdown={projects[selectedProject].budget_breakdown}
        total_budget_statement={
          projects[selectedProject].total_budget_statement
        }
      />
      <Footer />
    </div>
  );
}

export default GuidedProjects;
