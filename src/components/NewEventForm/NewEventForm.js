import React, { Fragment, useState } from 'react';
import Progress from '../Progress/Progress';
import Camera2 from '../Camera2/Camera2';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


//Styling Imports
import './NewEventForm.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';


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
    const [fileName, setFileName] = useState('Choose File');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [imagePreview, setImagePreview] = useState('');
    const [camImage, setCamImage] = useState({});
    const user_id = props.store.user.id;


    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const newEvent = {
        user_id: user_id,
        title: title,
        description: description,
        file: camImage,
        highlight: highlight
    }



    console.log('Title:', title);
    console.log('Description:', description);
    console.log('file:', file);
    console.log('highlight:', highlight);
    console.log('camImage:', camImage);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        imageHandler(e.target.files[0]);
    };

    const onSubmit = e => {
        e.preventDefault();
        // sending items to db
        props.dispatch({
            type: 'ADD_ITEM',
            payload: newEvent
        })
    };

    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

    const imageHandler = e => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result);
            }
        }

        reader.readAsDataURL(e);
    }


    return (
        <>
            <h4>New Event Form Component</h4>
            <div>
                <p>Cam Image should display below</p>
                <img src={camImage} alt="" />
            </div>
            <div>


                {/* <Progress percentage={uploadPercentage} /> */}
                <div>

                    {imagePreview ? (

                        <div
                            className="imgPreview"
                            style={{
                                background: imagePreview ? `url("${imagePreview}") no-repeat center/cover` : "#131313"
                            }}
                        >
                        </div>) : (null)}



                    <>
                        <p>Add an Image</p>
                        <label htmlFor="fileUpload">Choose File</label>
                        <input
                            type='file'
                            className='customFileUpload'
                            id='fileUpload'
                            onChange={onChange}
                        />
                    </>

                </div>

            </div>
            <form onSubmit={onSubmit}>
                <div className='custom-file mb-4'>
                    <input
                        type='text'
                        className='custom-title-input'
                        id='title'
                        value={title}
                        placeholder='title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type='text'
                        className='custom-description-input'
                        id='description'
                        value={description}
                        placeholder='description'
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type='checkbox'
                        className='custom-checkbox-input'
                        id='highlighCheckbox'
                        value={highlight}
                        onClick={toggleHighlight}
                    />
                    Make Highlight?

                </div>

                <input
                    type='submit'
                    value='Submit Event'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>

            <div>
                <button>Cancel</button>
            </div>

            <div className="neweventform__imgButtonContainer">
                <Button onClick={() => setOpen(true)}>Upload Image</Button>
                <Button onClick={() => setOpen(true)}>Camera</Button>
            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Camera2
                    setCamImage={setCamImage}
                />
            </Modal>


        </>
    );
};

export default connect(mapStoreToProps)(NewEventForm);