import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./ProjectDescription.css";

interface ProjectDescriptionProps {
  description: string;
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 50.795485,
  lng: -112.934199,
};

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading Maps...</p>;

  return (
    <div className="project-description">
      <div className="project-overview">
        <h1>Project Overview</h1>
        <p>{description}</p>
      </div>
      <div className="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          {/* Custom Marker (dot) on Siksika Nation */}
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default ProjectDescription;
