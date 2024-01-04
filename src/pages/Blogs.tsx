import { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import { Articles } from "../vite-env";
import { articles } from "../lib/data";

function Blogs() {
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div>
        <div className="page-heading" ref={topOfPage}>
          <img src="/background3.jpg" alt="" />
          <div className="page-heading-overlay"></div>
          <div className="page-heading-text">
            <h1>Blogs</h1>
            <p>Check out some articles that we found interesting!</p>
          </div>
        </div>
      </div>
      <div className="blog">
        {articles.map((article: Articles) => {
            return (
              <div className="blog-box">
                <div className="blog-details">
                  <h4>{article.title}</h4>
                  <p>
                    {article.description}
                  </p>
                  <a href={article.link} target="_blank">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                  <img src={article.image} alt="" />
                  <div className="blog-img-overlay"></div>
                </div>
                <h1>{article.date}</h1>
            </div>
            )
          })}
        {/* <div className="blog-box">
          <div className="blog-details">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              perspiciatis, atque earum ipsum deserunt ad voluptatem saepe porro
              voluptatibus fugiat...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <div className="blog-img">
            <img src="/blog2.jpg" alt="" />
            <div className="blog-img-overlay"></div>
          </div>
          <h1>31/10</h1>
        </div>
        <div className="blog-box">
          <div className="blog-details">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              nesciunt vitae nam deleniti rem impedit officia. Laborum ipsum
              recusandae vel.
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <div className="blog-img">
            <img src="/blog1.jpg" alt="" />
            <div className="blog-img-overlay"></div>
          </div>
          <h1>06/10</h1>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
