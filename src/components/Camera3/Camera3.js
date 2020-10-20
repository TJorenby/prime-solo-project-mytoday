import React from 'react';
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user"
};

function Camera3(props) {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            props.setCamImage(imageSrc);
            props.setCamOn(false);
        },
        [webcamRef]
    );

    return (
        <>
            <Webcam
                audio={false}
                height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={200}
                videoConstraints={videoConstraints}
            />

            {/* <Link to="neweventform"> */}
            <button onClick={capture}>Capture photo</button>
            {/* </Link> */}
        </>
    );
}

export default Camera3
