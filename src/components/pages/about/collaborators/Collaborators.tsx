import { FC } from "react";
import "./Collaborators.css";

interface CollaboratorType {
  title: string;
  path: string;
}

interface CollaboratorsProps {
  items: readonly { path: string; title: string }[];
}

const Card: FC<CollaboratorType> = ({ title, path }) => {
  return (
    <li className="collaborator-card">
      <img src={path} className="collaborator-img" alt={title} />
    </li>
  );
};

export const Collaborators: FC<CollaboratorsProps> = ({ items }) => {
  return (
    <>
      <div className="collaborators-header">
        <div className="collaborators-title">
          <h2>Collaborative Partners</h2>
          <p>
            Our chapter is proud to have collaborated with various corporations
            and organizations that share our vision.
          </p>
        </div>
      </div>
      <div className="collaborator-container">
        <div className="collaborators-list">
          {items.map((item, index) => (
            <Card key={index} path={item.path} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};
