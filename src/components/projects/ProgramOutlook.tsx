import "./ProgramOutlook.css";
import ImgComponent from "@components/shared/ImgComponent/ImgComponent";
import { Image } from "@interfaces/Project";

interface ProgramOutlookProps {
  img: Image;
}

const ProgramOutlook: React.FC<ProgramOutlookProps> = ({ img }) => {
  return (
    <div className="program-outlook">
      <h1>Program Outlook</h1>
      <div className="program-outlook-img">
        <ImgComponent
          src={img.src}
          altimages=""
          altimagesizes=""
          blurhash={img.blurhash}
        />
      </div>
    </div>
  );
};

export default ProgramOutlook;
