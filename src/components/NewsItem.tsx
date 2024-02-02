import React from "react";
import { NewsItemProps } from "../vite-env";
import ImgComponent from "./ImgComponent";


interface NewsItemExtendedProps extends NewsItemProps {
  link?: string; //optional for events
}

const NewsItem: React.FC<NewsItemExtendedProps> = ({
  path,
  blurhash,
  title,
  description,
  date,
  link,
}) => {
  return (
    <div className="news-piece-container">
      <div className="news-piece left-container">
        <h1>{title}</h1>
        <p>{description} {link && <div style={{display:"inline"}}> Get your tickets <a href={link} target="_blank" className="event-link">here</a>!</div> }</p>
        <span>{date}</span>
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
