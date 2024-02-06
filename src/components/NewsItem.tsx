import React from "react";
import { NewsItemProps } from "../vite-env";
import ImgComponent from "./ImgComponent";


interface NewsItemExtendedProps extends NewsItemProps {
  type: string; //optional for events
}

const NewsItem: React.FC<NewsItemExtendedProps> = ({
  path,
  blurhash,
  title,
  description,
  date,
  link,
  type,
}) => {

  const className = (link && date === "") || (!link && date !== "") ? "bottom-info half" : (link && date !== "") ? "bottom-info full" : "bottom-info empty";

  return (
    <div className="news-piece-container">
      <div className={link ? "news-piece left-container" : "news-piece left-container"}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={className}>
          {(link) && <a href={link} target="_blank" className="event-link-btn">{type === "upcoming" ? `Get Tickets` : `Read More`}</a>}
          {(date !== "") && <span>{date}</span>}
        </div>
      </div>
      <div className="news-piece right-container">
        <div className="img-container">
          <ImgComponent
          src={path}
          altimages={""}
          altimagesizes={""}
          blurhash={blurhash}
        />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
