import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

//Styling Imports
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import { BiTrash } from "react-icons/bi";
import './Event.scss';



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
        width: "80%",
        // height: "50%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

//________

function Event(props) {

    const [textOpen, setTextOpen] = useState(false);
    const [highlight, setHighlight] = useState(props.item.highlight);
    const [description, setDescription] = useState(props.item.description);
    const date = moment(props.item.date).format('LLL');


    // Modal stuff
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [modalOpen, setModalOpen] = useState(false);

    const update = {
        description: description,
        highlight: highlight,
        id: props.item.id


    }


    const toggleHighlight = () => {
        highlight ? setHighlight(false) : setHighlight(true);
    }

    const updateDescription = () => {
        console.log('in updateText');
        setTextOpen(false);


        props.dispatch({
            type: 'PUT_UPDATE',
            payload: update
        })
    }

    console.log('update:', update);

    const deleteEvent = (id) => {
        console.log('in deleteItem with item id:', id);
        setDescription(props.item.description);

        props.dispatch({
            type: 'DELETE_EVENT',
            payload: id
        })
        setModalOpen(false);
    }


    return (
        <div className="event">

            <div
                onClick={() => setModalOpen(true)}

            >
                <img
                    className="event__imgClick"
                    src={`${props.item.file_url}`} />
            </div>


            <Modal

                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div>
                        <div className="event__modalImage">
                            <img src={`${props.item.file_url}`} />
                        </div>
                        <div>{date}</div>
                        <div className="event__modalText">

                        </div>

                        <div>

                            {
                                textOpen ? (
                                    <input
                                        type="text"
                                        placeholder={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                ) : (
                                        <p>{description}</p>
                                    )
                            }
                        </div>


                        {textOpen ? (
                            <div>
                                <button
                                    onClick={() => updateDescription()}

                                >Update Text</button>
                            </div>
                        ) : (null)}


                        <div>
                            <label htmlFor="deleteBtn">
                                <BiTrash size="30px" />
                            </label>
                            <button
                                id="deleteBtn"
                                className="btn-hide"
                                onClick={() => deleteEvent(props.item.id)}
                            ></button>
                            <input
                                type='checkbox'
                                className='custom-checkbox-input'
                                id='highlighCheckbox'
                                value={highlight}
                                onClick={toggleHighlight}
                            />
                            {textOpen ? (null) : (
                                <button
                                    onClick={() => setTextOpen(true)}
                                >Edit Text</button>
                            )}
                        </div>
                    </div>
                </div >

            </Modal >
        </div >
    )
}

export default connect()(Event);
