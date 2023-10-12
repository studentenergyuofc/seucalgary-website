import { useRef, useEffect } from "react";

function Blogs() {
    const topOfPage = useRef<HTMLDivElement>(null);

    useEffect(() => {
        topOfPage.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div>
        <div className="page-heading" ref={topOfPage}>
            <img src="/background3.jpg" alt="" />
            <div className="page-heading-overlay"></div>
            <div className="page-heading-text">
                <h1>Blogs</h1>
                <p>Check out our selection of blogs this week</p>
            </div>
        </div>
        <div className="blog">
            <div className="blog-box">
                <div className="blog-details">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eos mollitia voluptatum atque consequatur deserunt blanditiis obcaecati ut libero adipisci?...</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                    <img src="/blog3.jpg" alt="" />
                    <div className="blog-img-overlay"></div>
                </div>
                <h1>07/05</h1>
            </div>
            <div className="blog-box">
                <div className="blog-details">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis, atque earum ipsum deserunt ad voluptatem saepe porro voluptatibus fugiat...</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nesciunt vitae nam deleniti rem impedit officia. Laborum ipsum recusandae vel.</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <div className="blog-img">
                    <img src="/blog1.jpg" alt="" />
                    <div className="blog-img-overlay"></div>
                </div>
                <h1>06/10</h1>
            </div>
        </div>
        </div>
    );
}

export default Blogs;