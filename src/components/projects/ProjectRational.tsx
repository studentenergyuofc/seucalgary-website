import Slideshow from "@components/shared/Slideshow/Slideshow";
import "./ProjectRational.css";
import { Image } from "@interfaces/Project";

interface ProjectRationalProps {
  images: Image[];
}

const ProjectRational: React.FC<ProjectRationalProps> = ({ images }) => {
  return (
    <div className="project-rational">
      <div className="project-rational-desc">
        <h1>Project Rationale</h1>
        <p>
          This project aims to enhance energy security, reduce costs, and
          promote sustainability by installing Solar PV systems on a home in the
          Siksika Reserve.
        </p>
        <ul>
          <li>
            <strong>Energy Security:</strong> Provides a reliable renewable
            energy source, reducing or eliminating power outages.
          </li>
          <li>
            <strong>Cost Reduction:</strong> Lowers utility bills, making energy
            more affordable for residents.
          </li>
          <li>
            <strong>Sustainability:</strong> Reduces carbon emissions and
            supports environmental efforts.
          </li>
          <li>
            <strong>Infrastructure Longevity:</strong> Durable solar units
            minimize maintenance and replacement costs.
          </li>
          <li>
            <strong>Grid Stability:</strong> Lowers demand on Fortis Energy,
            especially during peak hours, improving efficiency.
          </li>
        </ul>
        <p>
          By addressing energy insecurity, economic challenges, and
          environmental concerns, this project benefits both individual
          households and the broader community, ensuring long-term resilience
          and sustainability.
        </p>
      </div>
      <div className="slideshow-deck-container">
        <Slideshow images={images} />
      </div>
    </div>
  );
};

export default ProjectRational;
