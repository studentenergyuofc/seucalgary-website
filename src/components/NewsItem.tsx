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
  return (
    <div className="news-piece-container">
      <div className={link ? "news-piece left-container" : "news-piece left-container"}>
        <h1>{title}</h1>
        <p>{description}</p>
        {link ? (
          <div className="bottom-info">
            <a href={link} target="_blank" className="event-link-btn">{type === "upcoming" ? `Get Tickets` : `See Details`}</a>
            <span>{date}</span>
          </div>
        ) :
        (
          <span>{date}</span>
        )}
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
