import React, { useState } from 'react';
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
    const [imageSrc, setImageSrc] = useState('');
    const [camFile, setCamFile] = useState({});

    const capture = React.useCallback(
        () => {
            const data = webcamRef.current.getScreenshot();

            setImageSrc(data);
            props.setCamOn(false);
            dataURLtoFile(data, 'camShot');


        },
        [webcamRef]
    );

    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        let file = new File([u8arr], filename, { type: mime });

        props.setCamImage(file);


    }








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
