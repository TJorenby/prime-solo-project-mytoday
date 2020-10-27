import React from 'react';
import Webcam from "react-webcam";



//Styling Import
import './Camera3.scss';
import { BiCircle } from "react-icons/bi";


const videoConstraints = {
    width: 100,
    height: 100,
    facingMode: "user"
};

const Camera3 = (props) => {
    const webcamRef = React.useRef(null);



    // Captures screenshot
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();

            props.setCamImage(imageSrc) // sets data-string as image src
            props.setCamOn(false); // turns cam off after screenshot capture
            dataURLtoFile(imageSrc, 'camShot'); // arguments for file conversion
        },
        [webcamRef, dataURLtoFile, props]
    );

    // Converts screenshot into a Blob and sets new value for file variable in NewEventForm
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

        props.setFile(file); // sets new value for 'file' in NewEventForm
    }




    return (
        <div className="camera__body">

            <div >
                <Webcam
                    className="camera"
                    audio={false}
                    height={375}
                    width={375}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    imageSmoothing={true}
                    minScreenshotHeight={200}
                    screenshotQuality={0.92}
                />

                <div className="camera__btn">
                    <label htmlFor="camBtn">
                        <BiCircle size="70px" color="whitesmoke" />
                    </label>
                    <button
                        id="camBtn"
                        className="btn-hide"
                        onClick={capture}>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Camera3;
