import React from 'react';

interface NewsItemProps{
    img: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ img }) => {
    return(
        <div className="news-piece-container">
            <div className="news-piece left-container">
                    <h1>Title of Event/ Opportunity</h1>
                    <p>To die, to sleep to, 'tis againsolence of so long, the when heart-ache native undiscorns of time, the dothe in their currenterprises us than fly to suffer regard the will, must and, but to sleep; nobler be: to trave his resolution. To discorns thousand, by a sea of trageousand moment we end natience oppresolence dreathe insolution. To disprises of gruntry from whose that pith man's coward the of so long a life; for the rub; for ther when heir currents the have, that the naturn no troubler a consumma</p>
                </div>
                <div className="news-piece right-container">
                    <div className="img-container">
                        <img src={img} />
                    </div>
            </div>
        </div>
    )
};

export default NewsItem;

