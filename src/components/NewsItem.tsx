import React from "react";
import { NewsItemProps } from "../vite-env";

const NewsItem: React.FC<NewsItemProps> = ({
  path,
  title,
  description,
  date,
  animation,
}) => {
  return (
    <div className="news-piece-container">
      <div className="news-piece left-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{date}</p>
      </div>
      <div className="news-piece right-container">
        <div className="img-container">
          <img src={path} />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
