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
import { BiImage, BiCamera, BiPin } from "react-icons/bi";







const NewEventForm = (props) => {
    const [file, setFile] = useState('');
    const [camFile, setCamFile] = useState({});
    const [description, setDescription] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [camImage, setCamImage] = useState('');
    const [camOn, setCamOn] = useState(true);

    const [selectImage, setSelectImage] = useState('');
    const user_id = props.store.user.id;


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
        <div>
            <div className="newevent">
                <div className="newevent__topBtns">
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

                                            onClick={() => onSubmit()}
                                        >Submit</button>
                                    </div>
                                </Link>)
                        }
                    </div>
                </div>
                <p>{moment().format('LT')}</p>
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
                            <div className="neweventform__imgPreview">
                                {camImage ? (
                                    <img src={camImage} alt="" />
                                ) : (<img src={selectImage} alt="" />)
                                }

                            </div>
                        )}

            </div>

            <div className="neweventform__imgButtonContainer">
                <div className="imgButtonContainer__imgBtn">
                    <label htmlFor="fileUpload">
                        <BiImage size="30px" />
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
                        <div imgButtonContainer__imgBtn>
                            <label htmlFor="camBtn">
                                <BiCamera size="30px" />
                            </label>
                            <button
                                id="camBtn"
                                className="btn-hide"
                                onClick={() => toggleImageView()}>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="newevent__form">
                <div>
                    <div className=''>

                        <Input
                            type='text'
                            id='description'
                            value={description}
                            placeholder='caption'
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

                            <BiPin
                                className="star"
                                size={30}
                                color={highlight ? "red" : "white"}
                            />
                        </label>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default connect(mapStoreToProps)(NewEventForm);