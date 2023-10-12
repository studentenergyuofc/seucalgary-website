import { useState, useEffect } from "react";
import {Blurhash} from "react-blurhash";

type imgProps = {
    src : string,
    width : number,
    height : number,
    blurhash : string
}

function ImgComponent({src, width, height, blurhash} : imgProps){
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;
    }, [src]);

    console.log(imageLoaded)

    return ( 
        <>
            <div style={{display: imageLoaded ? "none" : "inline"}}>
                <Blurhash
                    hash={blurhash}
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} />
            </div>
            <img
                src={src}
                alt=""
            />
        </>
    )
}

export default ImgComponent;