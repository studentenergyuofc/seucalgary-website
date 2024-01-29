import React from "react";
import { NewsItemProps } from "../vite-env";
import ImgComponent from "./ImgComponent";

const NewsItem: React.FC<NewsItemProps> = ({
  path,
  blurhash,
  title,
  description,
  date,
}) => {
  return (
    <div className="news-piece-container">
      <div className="news-piece left-container">
        <h1>{title}</h1>
        <p>{description}</p>
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
