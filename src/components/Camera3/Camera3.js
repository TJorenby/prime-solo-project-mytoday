import React from 'react';
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
import './Camera3.scss';

const WebcamComponent = () => <Webcam />;

//Styling Import


const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user"
};

const Camera3 = (props) => {
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();

            props.setCamImage(imageSrc)
            props.setCamOn(false);
            dataURLtoFile(imageSrc, 'camShot');


        },
        [webcamRef]
    );

    const dataURLtoFile = (dataurl, filename) => {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        let file = new File([u8arr], filename, { type: mime });

        props.setFile(file);
    }

    return (
        <div className="body">

            <div className="camera">
                <Webcam
                    className="camera__cam"
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={200}
                    videoConstraints={videoConstraints}
                />

                <div className="camera__btn">
                    <button

                        onClick={capture}
                    >
                        Capture photo</button>

                </div>

            </div>

        </div>
    );
}

export default Camera3
