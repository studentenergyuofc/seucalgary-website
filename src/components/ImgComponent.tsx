import { useState, useEffect } from "react";
import {Blurhash} from "react-blurhash";

type imgProps = {
    src : string,
    blurhash : string
    altimages : string,
    altimagesizes : string
}

function ImgComponent({src, blurhash, altimages, altimagesizes} : imgProps){
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;
    }, [src]);


    return ( 
        <div className="image" style={{ width: '100%', height: '100%' }}>
            <div style={{display: imageLoaded ? "none" : "inline",  width: '100%', height: '100%'}}>
                <Blurhash
                    hash={blurhash}
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} />
            </div>
            <img
                src={src}
                srcSet={altimages}
                sizes={altimagesizes}
                alt=""
                loading="lazy"
            />
        </div>
    )
}

export default ImgComponent;