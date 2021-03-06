import React, { useState } from 'react';
import Camera3 from '../Camera3/Camera3';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';


//Styling Imports
import './NewEventForm.scss';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { BiCamera, BiPin, BiImageAdd } from "react-icons/bi";


// Material UI styling
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
            color: "whitesmoke"

        },
    },
}));




const NewEventForm = (props) => {
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [camImage, setCamImage] = useState('');
    const [camOn, setCamOn] = useState(true);

    const [selectImage, setSelectImage] = useState('');
    const user_id = props.store.user.id;
    const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
    const classes = useStyles();

    const newEvent = {
        user_id: user_id,
        description: description,
        file: file,
        highlight: highlight
    }

    // Test Logs
    // console.log('Description:', description);
    // console.log('highlight:', highlight);
    // console.log('New Event file:', file);
    // console.log('New Event camImage:', camImage);



    // sets the value of 'file' variable. Passes 'e' as the argument for imageHandler() and turns the camera off (which then displays the image preview rather than the cam)
    const onChange = e => {
        setFile(e.target.files[0]);
        imageHandler(e.target.files[0]);
        setCamOn(false);

    };


    // sends newEvent object to the saga. 
    const onSubmit = () => {

        // sending items to db
        props.dispatch({
            type: 'ADD_EVENT',
            payload: newEvent
        })
    };

    // const toggleHighlight = () => {
    //     highlight ? setHighlight(false) : setHighlight(true);
    // }


    // sets the camera on/off status and resets the camera image (which renders on the DOM)
    const toggleImageView = () => {
        camOn ? setCamOn(false) : setCamOn(true);
        setCamImage('');
    }

    // responsible for rendering the selected file upload on the DOM. It also resets setCamImage in order to facilitate conditional rendering. 
    const imageHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setSelectImage(reader.result);
                setCamImage('');
            }
        }

        reader.readAsDataURL(e);
    }

    return (
        <>
            <animated.div style={trans}>
                <div className="newevent">
                    <div className="center__header">
                        <h4>New Event</h4>
                        <div className="text_color">
                            <p>{moment().format('LT')}</p>
                        </div>

                    </div>
                </div>


                <div className="neweventform__imageView">
                    {
                        camOn ? (

                            <div>
                                <Camera3
                                    setCamImage={setCamImage}
                                    setFile={setFile}
                                    setCamOn={setCamOn}
                                >
                                </Camera3>
                            </div>


                        ) : (
                                <div>
                                    {camImage ? (
                                        <img src={camImage} alt="" />
                                    ) : (<img src={selectImage} alt="" />)
                                    }

                                </div>
                            )}

                </div>

                <div className="newevent__topBtns">
                    <div className="imgButtonContainer__imgBtn">
                        <label htmlFor="fileUpload">
                            <BiImageAdd size="30px" color="whitesmoke" />
                        </label>
                        <input
                            type='file'
                            className="neweventform__imageInput"
                            id='fileUpload'
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        {
                            camOn ? (null) : (
                                <>
                                    <label htmlFor="camBtn">
                                        <BiCamera size="30px" color="whitesmoke" />
                                    </label>
                                    <button
                                        id="camBtn"
                                        className="btn-hide"
                                        onClick={() => toggleImageView()}
                                    />
                                </>

                            )
                        }

                    </div>
                    <div className={camOn ? "hide" : ""}>

                        <Link className="link" to="user">
                            <Button className="text_color"

                                onClick={() => onSubmit()}
                            >Add</Button>
                        </Link>
                    </div>
                </div>

                {camOn ? <div className="newevent__formContainer"></div> : (


                    <div className="newevent__form">
                        <form className={classes.root} noValidate autoComplete="off">

                            <TextField
                                className="form__textField"
                                InputProps={{ className: "text_color" }}
                                InputLabelProps={{ className: "text_color" }}
                                InputPlaceholderProps={{ className: "text_color" }}
                                type='text'
                                id="standard-multiline-static"
                                multiline
                                rows={2}
                                value={description}
                                placeholder='Add Caption'
                                onChange={(e) => setDescription(e.target.value)}
                            />


                        </form>
                        {/* <label>
                            <input
                                type='checkbox'
                                className='neweventform__checkbox'
                                id='highlighCheckbox'
                                value={highlight}
                                onClick={toggleHighlight}

                            />

                            <BiPin

                                size={20}
                                color={highlight ? "red" : "blue"}
                            />
                        </label> */}

                    </div>


                )}
            </animated.div>
        </>
    );
};

export default connect(mapStoreToProps)(NewEventForm);