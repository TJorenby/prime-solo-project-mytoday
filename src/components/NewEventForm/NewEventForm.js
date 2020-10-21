import React, { Fragment, useState } from 'react';
import Camera3 from '../Camera3/Camera3';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import moment from 'moment';


//Styling Imports
import './NewEventForm.scss';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import { FaCamera, FaImage, FaStar, FaRegTrashAlt } from 'react-icons/fa';



// Modal Styling
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const NewEventForm = (props) => {
    const [file, setFile] = useState('');
    const [camFile, setCamFile] = useState({});
    const [description, setDescription] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [camImage, setCamImage] = useState('');
    const [camOn, setCamOn] = useState(true);

    const [selectImage, setSelectImage] = useState('');
    const user_id = props.store.user.id;


    // const classes = useStyles();
    // const [modalStyle] = React.useState(getModalStyle);
    // const [open, setOpen] = useState(false);


    // const [rating, setRating] = useState(null);
    // const [hover, setHover] = useState(null);

    const newEvent = {
        user_id: user_id,
        description: description,
        file: file,
        highlight: highlight
    }




    console.log('Description:', description);
    console.log('highlight:', highlight);
    console.log('New Event file:', file);
    console.log('New Event camImage:', camImage);

    const onChange = e => {
        setFile(e.target.files[0]);
        imageHandler(e.target.files[0]);
        setCamOn(false);

    };

    const onSubmit = () => {
        // e.preventDefault();
        // sending items to db
        props.dispatch({
            type: 'ADD_EVENT',
            payload: newEvent
        })
    };

    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

    const toggleImageView = (e) => {
        camOn ? setCamOn(false) : setCamOn(true);
        setCamImage('');


    }

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
        <div className="background-color">
            <div className="newevent">
                <Link to="/user">
                    <div>
                        <button className="btn-styles">
                            Cancel
                        </button>
                    </div>
                </Link>
                <div>
                    {
                        camOn ? (null) : (
                            <Link to="user">
                                <div>
                                    <button
                                        className="btn-styles"
                                        onClick={() => onSubmit()}
                                    >Submit</button>
                                </div>
                            </Link>)


                    }
                </div>
                <p>{moment().format('LT')}</p>
            </div>

            <div className="neweventform__imageView">
                {
                    camOn ? (

                        <div>
                            <Camera3
                                className="neweventform__camera"
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

            <div className="newevent__form">


                <div>
                    <div className='custom-file mb-4'>

                        <input
                            type='text'
                            className='custom-description-input'
                            id='description'
                            value={description}
                            placeholder='description'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label>
                            <input
                                type='checkbox'
                                className='neweventform__checkbox'
                                id='highlighCheckbox'
                                value={highlight}
                                onClick={toggleHighlight}
                            />

                            <FaStar
                                className="star"
                                size={30}
                                color={highlight ? "#ffc107" : "#C0C0C0"}
                            // onMouseEnter={() => setHover(highlight)}
                            // onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    </div>

                </div>


            </div>

            <div className="neweventform__imgButtonContainer">
                <div>
                    <label htmlFor="fileUpload">
                        <FaImage size="7%" />
                    </label>
                    <input
                        type='file'
                        className="neweventform__imageInput"
                        id='fileUpload'
                        onChange={onChange}
                    />
                </div>
                <div>
                    {camOn ? (null) : (
                        <button
                            className="btn-styles"
                            onClick={() => toggleImageView()}>
                            <FaCamera size="10%" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default connect(mapStoreToProps)(NewEventForm);