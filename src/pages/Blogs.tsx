import { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import { Articles } from "../vite-env";
import { articles } from "../lib/data";
import ImgComponent from "../components/ImgComponent";
import background from "/background3.jpg";
import smbackground from "/background3-sm-800.jpg";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

function Blogs() {
  const topOfPage = useRef<HTMLDivElement>(null);
  const isWindow = useMediaQuery("(max-width: 440px)");
  const [defaultBackground, setDefaultBackground] = useState<string>(background);

  useEffect(() => {
    if (isWindow){
      setDefaultBackground(smbackground);
    }
    else{
      setDefaultBackground(background);
    }
  }, [isWindow])

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div>
        <div className="page-heading" ref={topOfPage}>
          <ImgComponent
          src={defaultBackground}
          altimages={""}
          altimagesizes={""}
          blurhash={"L8DS%Ox_0K-.u6o}s,NF?akUt7xt"}
          />
          <div className="page-heading-overlay"></div>
          <div className="page-heading-text">
            <h1>Articles</h1>
            <p>Check out some articles that we found interesting!</p>
          </div>
        </div>
      </div>
      <div className="blog">
        {articles.map((article: Articles) => {
            return (
              <div className="blog-box" key={article.title}>
                <div className="blog-details">
                  <h4>{article.title}</h4>
                  <p>
                    {article.description}
                  </p>
                  <a href={article.link} target="_blank">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                  <ImgComponent
                  src={article.image}
                  altimages={""}
                  altimagesizes={""}
                  blurhash={article.blurhash}
                  />
                  <div className="blog-img-overlay"></div>
                </div>
                <h1>{article.date}</h1>
            </div>
            )
          })}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
