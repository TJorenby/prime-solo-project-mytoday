import React, { useRef } from 'react';
import { Camera } from 'react-cam';

function capture(imgSrc) {
    console.log(imgSrc);
}


function Camera1() {
    const cam = useRef(null);
    return (
        <>
            <Camera
                showFocus={true}
                front={false}
                capture={capture}
                ref={cam}
                width="80%"
                height="auto"
                focusWidth="80%"
                focusHeight="60%"
                btnColor="white"
            />
            <button onClick={img => cam.current.capture(img)}>Take image</button>
        </>
    );
}

export default Camera1;
