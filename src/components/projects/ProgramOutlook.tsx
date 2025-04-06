import "./ProgramOutlook.css";
import ImgComponent from "@components/shared/ImgComponent/ImgComponent";

interface ProgramOutlookProps {
  img_url: string;
}

const ProgramOutlook: React.FC<ProgramOutlookProps> = ({ img_url }) => {
  return (
    <div className="program-outlook">
      <h1>Program Outlook</h1>
      <div className="program-outlook-img">
        <ImgComponent
          src={img_url}
          altimages={img_url}
          altimagesizes={"(max-width: 440px) 130px, 300px"}
          blurhash={"LlH{csxa?uRn.mtRaeofN#R*M|ad"}
        />
      </div>
    </div>
  );
};

export default ProgramOutlook;
